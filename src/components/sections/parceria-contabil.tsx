import { ArrowRight, Percent, Phone, Users, Zap } from "lucide-react";

import { WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";

const BENEFITS = [
  {
    icon: <Percent className="h-5 w-5" />,
    title: "Comissão por indicação",
    text: "Indique certificados digitais para seus clientes e receba comissão por cada emissão concretizada.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Atendimento exclusivo",
    text: "Seus clientes são atendidos por nossa equipe especializada, com suporte antes e depois da emissão.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Processo simplificado",
    text: "Emissão rápida, presencial ou por videoconferência, para você não perder tempo com burocracia.",
  },
];

export function ParceriaContabil() {
  return (
    <section id="parceria-contabil" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
        <div>
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
            ÁREA EXCLUSIVA PARA CONTADORES
          </span>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Para Contabilidades
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">Parceria Contábil</h2>
          <p className="mt-4 text-base text-muted-foreground">
            Se você é contador ou gestor de um escritório contábil, seja nosso parceiro. Indique os
            certificados digitais A1 e A3 da Diferencial para seus clientes e ofereça mais
            praticidade e segurança na rotina fiscal e trabalhista deles.
          </p>
          <p className="mt-4 text-base text-muted-foreground">
            Você ganha com comissão por cada emissão, seus clientes ganham atendimento humano e
            especializado, e ainda contam com suporte técnico antes e depois da instalação.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Quero ser parceiro
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Falar com consultor
            </a>
          </div>
        </div>

        <div className="grid gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-background p-5"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {b.icon}
              </div>
              <div>
                <h3 className="text-base font-bold">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            </div>
          ))}

          <div
            className="rounded-2xl border border-border p-5"
            style={{ background: "var(--gradient-soft)" }}
          >
            <p className="text-sm font-semibold text-foreground">Quer saber mais sobre a parceria?</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Envie uma mensagem e nosso consultor explica as condições comerciais em poucos
              minutos.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary"
            >
              Chamar no WhatsApp
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div
        className="mt-8 overflow-hidden rounded-[2rem] border border-border p-8 text-center shadow-[var(--shadow-soft)]"
        style={{ background: "var(--gradient-brand)" }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
          Programa de Parceria Contábil
        </p>
        <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
          Indique certificados digitais e crie uma nova fonte de receita para sua contabilidade
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
          7 anos no mercado, atendimento em todo o Brasil e suporte técnico humano para seus
          clientes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Quero ser parceiro agora
          </a>
          <a
            href="tel:+554741010898"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> (47) 4101-0898
          </a>
        </div>
      </div>
    </section>
  );
}
