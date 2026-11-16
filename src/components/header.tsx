"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "@/components/brand";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node) && !buttonRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = window.matchMedia("(min-width: 1100px)");
    const onWide = () => { if (media.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    media.addEventListener("change", onWide);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      media.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button-outline header-contact" href={site.whatsapp} target="_blank" rel="noopener noreferrer">
          Fale com nossa equipe <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button ref={buttonRef} type="button" className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(value => !value)}>
          {open ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
        </button>
      </div>
      <div ref={menuRef} id="menu-mobile" className="mobile-menu" hidden={!open}>
        <nav className="container" aria-label="Navegação mobile">
          {navigation.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={17} aria-hidden="true" /></a>)}
          <a className="mobile-contact" href={site.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Fale com nossa equipe <ArrowUpRight size={17} aria-hidden="true" /></a>
        </nav>
      </div>
    </header>
  );
}
