import BrandCard from "@/components/BrandCard";
import FadeInSection from "@/components/FadeInSection";
import { BRANDS, WHATSAPP_URL } from "@/lib/config";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Catálogo de Marcas",
  description: "Navegue pelas marcas que representamos e acesse as linhas completas.",
};

export default function CatalogoPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[340px] md:h-[520px] flex items-center justify-center overflow-hidden mt-16">
        <Image
          src="/banner-catalogo.jpg"
          alt="Catálogo de Marcas"
          fill
          className="object-cover object-center scale-110"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-[36px] md:text-[52px] font-semibold text-white mb-4">
            Catálogo de Marcas
          </h1>
          <p className="font-lato text-base text-white/80 max-w-xl mx-auto">
            Navegue pelas marcas que representamos e acesse as linhas completas.
          </p>
        </div>
      </section>

      {/* Brand Grid */}
      <FadeInSection>
        <section className="bg-cream py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {BRANDS.map((brand) => (
                <BrandCard key={brand.slug} {...brand} variant="catalog" />
              ))}
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* WhatsApp CTA */}
      <section className="bg-terracotta py-16 px-6 text-center">
        <h2 className="font-playfair text-[28px] md:text-[32px] font-semibold text-white mb-6">
          Precisa de ajuda para montar seu pedido?
        </h2>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-terracotta font-lato font-semibold px-8 py-4 rounded-full transition-colors duration-200 hover:bg-cream min-h-[44px]"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
      </section>
    </>
  );
}
