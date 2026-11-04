"use client";

const BRAND_NAMES = ["RECONFLEX", "TCIL", "EDN MÓVEIS", "AGRATTO", "VENTISOL"];

export default function MarqueeBrands() {
  const items = [...BRAND_NAMES, ...BRAND_NAMES];

  return (
    <div className="py-8 bg-white border-y border-sand overflow-hidden">
      <p className="text-center text-xs font-lato uppercase tracking-widest text-muted mb-6">
        Nossas Marcas
      </p>
      <div className="marquee-wrapper overflow-hidden">
        <div className="animate-marquee">
          {items.map((name, i) => (
            <span key={i} className="flex items-center gap-6 mx-6">
              <span className="font-lato text-lg font-bold text-charcoal whitespace-nowrap">
                {name}
              </span>
              <span className="text-terracotta text-xl font-bold">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
