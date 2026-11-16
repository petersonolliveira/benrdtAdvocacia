import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [375, 390, 768, 1440, 1920]) {
  test(`layout, original portrait proportions and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".hero-figure img")).toBeVisible();
    const image = await page.locator(".hero-figure img").evaluate((el: HTMLImageElement) => ({ width: el.clientWidth, height: el.clientHeight, naturalWidth: el.naturalWidth, naturalHeight: el.naturalHeight }));
    expect(image.naturalWidth).toBe(1154);
    expect(Math.abs(image.width / image.height - 1154 / 1600)).toBeLessThan(0.005);
    for (const section of ["#escritorio", "#areas", "#profissionais", "#contato"]) {
      await page.locator(section).scrollIntoViewIfNeeded();
      await expect(page.locator(section)).toBeVisible();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
    await page.emulateMedia({ reducedMotion: "reduce" });
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("mobile menu responds to Escape, returns focus and closes on navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Abrir menu" });
  await toggle.click();
  await expect(page.getByRole("button", { name: "Fechar menu" })).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await expect(page.locator("#menu-mobile")).toBeHidden();
  await toggle.click();
  await page.getByRole("navigation", { name: "Navegação mobile" }).getByRole("link", { name: "Contato", exact: true }).click();
  await expect(page.locator("#menu-mobile")).toBeHidden();
  await expect(page).toHaveURL(/#contato$/);
});

test("practice details support keyboard, and all internal links resolve", async ({ page }) => {
  await page.goto("/");
  const item = page.locator("#familia");
  await item.locator("summary").focus();
  await page.keyboard.press("Enter");
  await expect(item).toHaveAttribute("open", "");
  await expect(item.getByText("Inventários e partilhas.")).toBeVisible();
  const broken = await page.locator('a[href*="#"]').evaluateAll(links => links.map(link => (link as HTMLAnchorElement).hash).filter(hash => hash && !document.getElementById(decodeURIComponent(hash.slice(1)))));
  expect(broken).toEqual([]);
  await expect(page.locator('a[href="https://wa.me/5547992031370"]').first()).toBeVisible();
  expect(await page.locator('a[href="https://wa.me/5547992283718"]').count()).toBeGreaterThan(0);
  expect(await page.locator('a[href="https://www.instagram.com/berndtefftingadvocacia/"]').count()).toBeGreaterThan(0);
  const unsafe = await page.locator('a[target="_blank"]').evaluateAll(links => links.filter(link => !link.getAttribute("rel")?.includes("noopener")).length);
  expect(unsafe).toBe(0);
});

test("privacy and preview metadata match the implementation", async ({ page, context, request }) => {
  const externalRequests: string[] = [];
  page.on("request", req => { if (!new URL(req.url()).host.startsWith("localhost") && !new URL(req.url()).host.startsWith("127.0.0.1")) externalRequests.push(req.url()); });
  await page.goto("/");
  await expect(page).toHaveTitle("Berndt & Effting Advocacia | Advogados em Joinville - SC");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Berndt & Effting/);
  await page.getByRole("link", { name: "Política de Privacidade", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("Política de Privacidade");
  await expect(page.getByText("Minuta para revisão jurídica antes da publicação definitiva.")).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);
  expect(await context.cookies()).toEqual([]);
  expect(externalRequests).toEqual([]);
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect(await (await request.get("/robots.txt")).text()).toContain("Disallow: /");
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
});
