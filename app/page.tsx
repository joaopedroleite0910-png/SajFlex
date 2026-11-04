import Link from "next/link";
import { ChevronDown, PackageCheck, PhoneCall, BookOpen } from "lucide-react";
import MarqueeBrands from "@/components/MarqueeBrands";
import BrandCard from "@/components/BrandCard";
import FadeInSection from "@/components/FadeInSection";
import HeroVideoPlayer from "@/components/HeroVideoPlayer";
import { WHATSAPP_URL, BRANDS } from "@/lib/config";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center relative overflow-hidden bg-gradient-to-b from-cream to-sand">
        <HeroVideoPlayer />
        {/* Conteúdo acima do overlay de vídeo */}
        <div className="relative z-20 flex flex-col items-center">
          <p className="font-lato text-xs uppercase tracking-[0.2em] text-white/80 mb-4">
            Representação Comercial
          </p>
          <h1 className="font-playfair font-semibold text-[36px] md:text-[52px] text-white leading-tight mb-6 max-w-2xl">
            Marcas que transformam<br />lares.
          </h1>
          <p className="font-lato text-base md:text-lg text-white/80 max-w-xl leading-relaxed mb-10">
            Conectamos lojistas às melhores marcas do mercado,<br className="hidden md:block" />
            com atendimento próximo e catálogos sempre atualizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/catalogo"
              className="px-8 py-4 bg-terracotta text-white font-lato font-semibold rounded-full transition-colors duration-200 hover:bg-zinc-700 min-h-[44px] flex items-center justify-center"
            >
              Ver Catálogo
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-white text-white font-lato font-semibold rounded-full transition-colors duration-200 hover:bg-white hover:text-charcoal min-h-[44px] flex items-center justify-center"
            >
              Falar no WhatsApp
            </a>
          </div>
          <ChevronDown
            size={28}
            className="mt-12 text-white/70 animate-bounce"
          />
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeBrands />

      {/* POR QUE TRABALHAR CONOSCO */}
      <FadeInSection>
        <section className="bg-white py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-[32px] md:text-[36px] font-semibold text-charcoal text-center mb-12">
              Por que trabalhar conosco?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  Icon: PackageCheck,
                  title: "Marcas selecionadas",
                  text: "Trabalhamos com marcas de qualidade comprovada no mercado nacional.",
                },
                {
                  Icon: PhoneCall,
                  title: "Atendimento direto",
                  text: "Atendimento próximo, sem intermediários, do pedido à entrega.",
                },
                {
                  Icon: BookOpen,
                  title: "Catálogos atualizados",
                  text: "Acesse as linhas completas com fotos, medidas e referências.",
                },
              ].map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-sand rounded-2xl p-8 flex flex-col items-start gap-4"
                >
                  <div className="p-3 bg-white rounded-xl">
                    <Icon size={24} className="text-terracotta" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-charcoal">
                    {title}
                  </h3>
                  <p className="font-lato text-sm text-muted leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* BRANDS PREVIEW */}
      <FadeInSection>
        <section className="bg-cream py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-semibold text-charcoal text-center mb-12">
              Conheça as marcas que representamos
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-0">
              {BRANDS.map((brand) => (
                <BrandCard key={brand.slug} {...brand} variant="preview" />
              ))}
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mt-10">
              <Link
                href="/catalogo"
                className="font-lato text-sm font-semibold text-terracotta hover:underline"
              >
                Ver catálogo completo →
              </Link>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
}
