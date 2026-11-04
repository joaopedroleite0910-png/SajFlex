"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xaeeajny");
  const submitted = state.succeeded;

  const inputClass =
    "w-full border border-sand rounded-xl px-4 py-3 font-lato text-sm text-charcoal placeholder-muted focus:outline-none focus:ring-2 focus:ring-terracotta/40 focus:border-terracotta transition bg-white";
  const labelClass = "block font-lato text-xs text-muted mb-1 ml-1";

  return (
    <div className="bg-white rounded-2xl shadow-sm p-10">
      <h3 className="font-playfair text-xl font-semibold text-charcoal mb-6">
        Mande uma mensagem
      </h3>

      {submitted ? (
        <div className="py-8 text-center">
          <p className="font-lato text-terracotta text-base font-semibold">
            Mensagem enviada! Em breve entraremos em contato.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className={labelClass}>Nome completo</label>
            <input
              type="text"
              name="nome"
              required
              placeholder="Seu nome"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>E-mail</label>
            <input
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
              className={inputClass}
            />
            <ValidationError field="email" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1" />
          </div>
          <div>
            <label className={labelClass}>Telefone / WhatsApp</label>
            <input
              type="tel"
              name="telefone"
              placeholder="+55 (XX) XXXXX-XXXX"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Empresa</label>
            <input
              type="text"
              name="empresa"
              placeholder="Nome da sua empresa"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>Mensagem</label>
            <textarea
              name="mensagem"
              required
              placeholder="Como podemos ajudar?"
              rows={5}
              className={`${inputClass} resize-none min-h-[120px]`}
            />
            <ValidationError field="mensagem" errors={state.errors} className="text-xs text-red-500 mt-1 ml-1" />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-terracotta text-white font-lato font-semibold py-4 rounded-full transition-colors duration-200 hover:bg-zinc-700 mt-2 disabled:opacity-60"
          >
            {state.submitting ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      )}
    </div>
  );
}
