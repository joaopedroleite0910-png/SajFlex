import Link from "next/link";
import { COMPANY_NAME, COMPANY_TAGLINE, NAV_LINKS, WHATSAPP_URL, WHATSAPP_DISPLAY, EMAIL, REGION } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t-[3px] border-terracotta">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1: Company */}
        <div>
          <p className="font-playfair text-lg font-semibold text-white mb-3">
            {COMPANY_NAME}
          </p>
          <p className="font-lato text-sm text-white/60 leading-relaxed">
            {COMPANY_TAGLINE}
          </p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <p className="font-lato text-xs uppercase tracking-widest text-white/40 mb-4">
            Links rápidos
          </p>
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-lato text-sm text-white/60 hover:text-terracotta transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Contact */}
        <div>
          <p className="font-lato text-xs uppercase tracking-widest text-white/40 mb-4">
            Contato
          </p>
          <div className="flex flex-col gap-2">
            <p className="font-lato text-sm text-white/60">{WHATSAPP_DISPLAY}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-lato text-sm text-terracotta hover:text-white transition-colors duration-150"
            >
              WhatsApp
            </a>
            <p className="font-lato text-sm text-white/60">{EMAIL}</p>
            <p className="font-lato text-sm text-white/60">{REGION}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 px-6 text-center">
        <p className="font-lato text-xs text-white/40">
          © {new Date().getFullYear()} {COMPANY_NAME}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
