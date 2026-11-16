import Image from "next/image";
import Link from "next/link";

export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <Link href="/#inicio" aria-label="Berndt & Effting Advocacia — início" className={`brand${footer ? " brand-footer" : ""}`}>
      <span className="brand-crop">
        <Image src="/images/logo-hor-2.png" alt="Berndt & Effting Advocacia" width={1920} height={1080} priority={!footer} />
      </span>
    </Link>
  );
}
