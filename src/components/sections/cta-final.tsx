import { Clock, HeartHandshake, Lock, Percent, ShieldCheck, Users, Zap } from "lucide-react";

import { WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";

export function CtaFinal() {
  return (
    <section id="cta-final" className="relative scroll-mt-28 px-6 pb-24 pt-4">
      <div
        className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] p-10 text-primary-foreground shadow-[var(--shadow-brand)] sm:p-12"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <Clock className="h-3.5 w-3.5" /> Atendimento em minutos
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Pronto para emitir seu Certificado Digital com quem realmente entende?
            </h2>
            <p className="mt-4 text-white/85">
              Fale agora com um especialista da Diferencial pelo WhatsApp e tenha seu certificado
              hoje mesmo.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
            </a>
            <ul className="mt-8 space-y-3">
              {[
                { icon: <Zap className="h-4 w-4" />, t: "Emissão rápida e segura" },
                { icon: <HeartHandshake className="h-4 w-4" />, t: "Atendimento personalizado" },
                { icon: <Lock className="h-4 w-4" />, t: "100% válido em ICP-Brasil" },
                { icon: <ShieldCheck className="h-4 w-4" />, t: "Suporte humano de verdade" },
              ].map((b) => (
                <li
                  key={b.t}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary">
                    {b.icon}
                  </span>
                  <span className="text-sm font-semibold">{b.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center rounded-[2rem] border border-white/20 bg-white/10 p-8 backdrop-blur">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <Percent className="h-3.5 w-3.5" /> Programa de Parceria Contábil
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              É contador? Vire parceiro e gere nova receita.
            </h2>
            <p className="mt-4 text-white/85">
              Indique certificados digitais para os seus clientes e ganhe comissão por cada emissão.
              Atendimento especializado e processo simplificado.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Quero ser parceiro
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold text-white">
                <Percent className="h-3.5 w-3.5" /> Comissão por indicação
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold text-white">
                <Users className="h-3.5 w-3.5" /> Atendimento exclusivo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
