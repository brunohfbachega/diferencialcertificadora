import { createFileRoute } from "@tanstack/react-router";
import {
  Percent,
  Users,
  Headphones,
  Zap,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Handshake,
  TrendingUp,
  Clock,
} from "lucide-react";
import { PageShell, WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";

export const Route = createFileRoute("/parceria-contabil")({
  head: () => ({
    meta: [
      { title: "Parceria Contábil — Comissão por indicação | Diferencial Certificado Digital" },
      {
        name: "description",
        content:
          "Programa exclusivo para contadores: indique certificados digitais e ganhe comissão por emissão. Atendimento prioritário, painel de acompanhamento e suporte dedicado.",
      },
      { property: "og:title", content: "Parceria Contábil | Diferencial" },
      { property: "og:description", content: "Contador, seja parceiro da Diferencial e gere nova receita com comissão por indicação." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ParceriaPage,
});

function ParceriaPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-12 pt-14 lg:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Área exclusiva para contadores
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Vire parceiro da Diferencial e{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              gere nova receita
            </span>{" "}
            com seus clientes.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Indique certificados digitais para os clientes do seu escritório, receba comissão
            por emissão e conte com um time exclusivo para atender cada solicitação.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-brand)" }}
            >
              <WhatsAppIcon className="h-4 w-4" /> Quero ser parceiro
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Falar com consultor
            </a>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: <Percent className="h-5 w-5" />, value: "Comissão", label: "por cada emissão indicada" },
            { icon: <Zap className="h-5 w-5" />, value: "Emissão em minutos", label: "sem burocracia para o seu cliente" },
            { icon: <Headphones className="h-5 w-5" />, value: "Atendimento dedicado", label: "canal exclusivo para contadores" },
          ].map((k) => (
            <div key={k.label} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {k.icon}
              </div>
              <p className="text-lg font-extrabold">{k.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{k.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Vantagens da parceria
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Um programa pensado para escritórios contábeis
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <TrendingUp className="h-5 w-5" />, title: "Nova fonte de receita", text: "Ganhe comissão a cada certificado emitido através da sua indicação." },
            { icon: <Clock className="h-5 w-5" />, title: "Agilidade para seu cliente", text: "Emissão rápida por videoconferência, sem que seu cliente precise se deslocar." },
            { icon: <Users className="h-5 w-5" />, title: "Atendimento prioritário", text: "Canal exclusivo com resposta rápida — sem enfrentar filas de atendimento comum." },
            { icon: <HeartHandshake className="h-5 w-5" />, title: "Relacionamento humano", text: "Consultor dedicado ao seu escritório e acompanhamento de ponta a ponta." },
            { icon: <ShieldCheck className="h-5 w-5" />, title: "Segurança ICP-Brasil", text: "Emissões 100% dentro dos padrões oficiais, com validade jurídica garantida." },
            { icon: <Handshake className="h-5 w-5" />, title: "Sem burocracia para começar", text: "Cadastro simples e rápido. Em pouco tempo você já está indicando." },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {b.icon}
              </div>
              <h3 className="text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Como funciona</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
            Em 3 passos você já está gerando receita
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: "01", t: "Cadastro rápido", d: "Fale com nosso time pelo WhatsApp e ative sua conta de parceiro em minutos." },
              { n: "02", t: "Indique seu cliente", d: "Envie o cliente para emitir com a Diferencial — atendimento exclusivo para você." },
              { n: "03", t: "Receba sua comissão", d: "A cada emissão concluída, sua comissão é registrada e paga conforme combinado." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-border bg-background p-6">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-extrabold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {s.n}
                </span>
                <h3 className="mt-4 text-lg font-bold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <h2 className="text-2xl font-extrabold sm:text-3xl">Para quem é a parceria</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Escritórios contábeis e BPO financeiro",
              "Contadores autônomos e consultores fiscais",
              "Departamentos pessoais e RHs",
              "Advogados e assessorias tributárias",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--primary)" }} />
                <span className="text-sm font-semibold">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[2rem] p-10 text-center text-primary-foreground shadow-[var(--shadow-brand)] sm:p-12"
          style={{ background: "var(--gradient-brand)" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
            <Percent className="h-3.5 w-3.5" /> Programa de Parceria Contábil
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
            Pronto para começar a ganhar comissão?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Fale agora com o time da Diferencial e ative sua parceria contábil hoje mesmo.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="h-4 w-4" /> Quero ser parceiro
          </a>
        </div>
      </section>
    </PageShell>
  );
}
