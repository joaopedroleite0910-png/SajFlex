import { Phone, MessageCircle, Mail, MapPin, Linkedin, Instagram } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FadeInSection from "@/components/FadeInSection";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, PHONE_DISPLAY, EMAIL, REGION } from "@/lib/config";

export const metadata = {
  title: "Entre em Contato",
  description: "Estamos prontos para atender você.",
};

export default function ContatoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-sand py-16 px-6 text-center">
        <h1 className="font-playfair text-[36px] md:text-[48px] font-semibold text-charcoal mb-4">
          Entre em Contato
        </h1>
        <p className="font-lato text-base text-muted">
          Estamos prontos para atender você.
        </p>
      </section>

      {/* Two-column layout */}
      <FadeInSection>
        <section className="bg-cream py-16 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Contact info */}
            <div className="bg-sand rounded-2xl p-10">
              <h2 className="font-playfair text-xl font-semibold text-charcoal mb-8">
                Informações de contato
              </h2>
              <div className="flex flex-col gap-6">
                <ContactItem
                  icon={<Phone size={20} className="text-terracotta" />}
                  label="Telefone"
                  value={PHONE_DISPLAY}
                />
                <ContactItem
                  icon={<MessageCircle size={20} className="text-terracotta" />}
                  label="WhatsApp"
                  value={WHATSAPP_DISPLAY}
                  href={WHATSAPP_URL}
                />
                <ContactItem
                  icon={<Mail size={20} className="text-terracotta" />}
                  label="E-mail"
                  value={EMAIL}
                  href={`mailto:${EMAIL}`}
                />
                <ContactItem
                  icon={<MapPin size={20} className="text-terracotta" />}
                  label="Região de atuação"
                  value={REGION}
                />
              </div>

              {/* Social */}
              <div className="flex gap-4 mt-10">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-3 rounded-xl bg-white text-terracotta hover:scale-110 transition-transform duration-150"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="p-3 rounded-xl bg-white text-terracotta hover:scale-110 transition-transform duration-150"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <ContactForm />
          </div>
        </section>
      </FadeInSection>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-white rounded-lg mt-0.5 shrink-0">{icon}</div>
      <div>
        <p className="font-lato text-xs text-muted uppercase tracking-wider mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-lato text-sm text-charcoal hover:text-terracotta transition-colors duration-150"
          >
            {value}
          </a>
        ) : (
          <p className="font-lato text-sm text-charcoal">{value}</p>
        )}
      </div>
    </div>
  );
}
