"use client";

import Image from "next/image";
import { useState } from "react";
import { WHATSAPP_URL } from "@/lib/config";

interface BrandCardProps {
  slug: string;
  name: string;
  category: string;
  catalogUrl: string | null;
  catalogs?: { label: string; url: string }[];
  siteUrl?: string | null;
  image: string;
  variant?: "catalog" | "preview";
}

function BrandPlaceholder({ initial }: { initial: string }) {
  return (
    <div className="w-full h-full bg-sand flex items-center justify-center">
      <span className="font-playfair text-4xl font-bold text-muted opacity-60">
        {initial}
      </span>
    </div>
  );
}

export default function BrandCard({
  slug,
  name,
  category,
  catalogUrl,
  catalogs,
  siteUrl,
  image,
  variant = "catalog",
}: BrandCardProps) {
  const initial = name.charAt(0);
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;
  const hasCatalog = catalogUrl && catalogUrl !== "#";
  const hasCatalogs = catalogs && catalogs.length > 0;
  const hasSite = siteUrl && siteUrl !== "#";

  if (variant === "preview") {
    return (
      <div className="group bg-white shadow-sm p-6 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-md cursor-pointer border border-sand">
        <div className="w-full aspect-square rounded-xl overflow-hidden bg-sand flex items-center justify-center relative">
          {showImage ? (
            <Image
              src={image}
              alt={name}
              width={160}
              height={160}
              className="object-contain p-4"
              unoptimized
              onError={() => setImgError(true)}
            />
          ) : (
            <BrandPlaceholder initial={initial} />
          )}
        </div>
        <p className="font-lato text-sm font-bold uppercase tracking-wider text-charcoal text-center">
          {name}
        </p>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative">
      {/* Logo area */}
      <div className="relative w-full aspect-[4/3] bg-sand flex items-center justify-center p-8">
        {showImage ? (
          <Image
            src={image}
            alt={name}
            width={300}
            height={120}
            className="object-contain max-h-20 w-auto"
            unoptimized
            onError={() => setImgError(true)}
          />
        ) : (
          <BrandPlaceholder initial={initial} />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-lato text-base font-extrabold uppercase tracking-[0.1em] text-charcoal">
          {name}
        </p>
        {category && (
          <span className="inline-block mt-2 px-3 py-1 text-xs font-lato rounded-full bg-sand text-muted">
            {category}
          </span>
        )}
        <div className="mt-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hasCatalog && (
            <a href={catalogUrl!} target="_blank" rel="noopener noreferrer" className="text-sm font-lato text-terracotta font-semibold">
              Ver catálogo PDF →
            </a>
          )}
          {hasCatalogs && catalogs!.map((c) => (
            <a key={c.url} href={c.url} target="_blank" rel="noopener noreferrer" className="text-sm font-lato text-terracotta font-semibold">
              {c.label} →
            </a>
          ))}
          {hasSite && (
            <a href={siteUrl!} target="_blank" rel="noopener noreferrer" className="text-sm font-lato text-terracotta font-semibold">
              Acessar site →
            </a>
          )}
        </div>
      </div>

      {/* WhatsApp button */}
      <div className="px-6 pb-6">
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Olá! Tenho interesse na marca ${name}. Poderia me dar mais informações?`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#25D366] text-white font-lato font-semibold text-sm transition-opacity hover:opacity-90"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.14 1.546 5.877L.057 23.986l6.274-1.648A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.027-1.382l-.36-.214-3.726.978.993-3.63-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
          Falar no WhatsApp
        </a>
      </div>

      {/* Bottom accent */}
      <div className="h-[3px] bg-terracotta w-full" />
    </div>
  );
}
