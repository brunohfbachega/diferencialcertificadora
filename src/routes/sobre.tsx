import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Award,
  Users,
  ShieldCheck,
  MapPin,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { PageShell, WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";
import escritorioAsset from "@/assets/escritorio-diferencial.webp.asset.json";
import escritorioMobileAsset from "@/assets/escritorio-diferencial-800.webp.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Diferencial Certificado Digital — Quem somos, missão e valores" },
      {
        name: "description",
        content:
          "Conheça a Diferencial Certificado Digital: 7 anos de mercado, +5.000 clientes atendidos, atendimento humanizado e conformidade total com a ICP-Brasil.",
      },
      { property: "og:title", content: "Sobre a Diferencial Certificado Digital" },
      { property: "og:description", content: "Quem somos, nossa missão, visão e valores. +5.000 clientes atendidos em todo o Brasil." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: escritorioAsset.url },
      { name: "twitter:image", content: escritorioAsset.url },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-12 pt-14 lg:grid-cols-2 lg:gap-14 lg:pt-20">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Quem somos
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Conheça a{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Diferencial Certificadora Digital
              </span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Somos uma Autoridade de Registro autorizada, com sede em Joinville/SC e atendimento
              em todo o Brasil. Há 7 anos entregamos certificados digitais com atendimento
              humano, segurança e agilidade.
            </p>
            <p className="mt-3 text-muted-foreground">
              Já emitimos mais de 5.000 certificados para pessoas físicas, empresas e escritórios
              contábeis. Nossa missão é descomplicar a certificação digital com um time real do
              seu lado, do primeiro contato ao suporte pós-emissão.
            </p>
          </div>
          <div className="relative">
            <img
              src={escritorioAsset.url}
              srcSet={`${escritorioMobileAsset.url} 800w, ${escritorioAsset.url} 1600w`}
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Escritório da Diferencial Certificado Digital em Joinville/SC"
              className="h-full w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <Users className="h-5 w-5" />, value: "+5.000", label: "clientes atendidos" },
            { icon: <Award className="h-5 w-5" />, value: "7 anos", label: "no mercado" },
            { icon: <MapPin className="h-5 w-5" />, value: "Brasil", label: "atuação nacional" },
            { icon: <ShieldCheck className="h-5 w-5" />, value: "ICP-Brasil", label: "totalmente autorizada" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div
                className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {s.icon}
              </div>
              <p className="text-2xl font-extrabold" style={{ color: "var(--primary)" }}>{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSÃO / VISÃO / VALORES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Nossos pilares
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Missão, Visão e Valores
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: <Target className="h-5 w-5" />,
              title: "Missão",
              text: "Descomplicar a certificação digital, entregando agilidade, segurança e atendimento humano para cada cliente.",
            },
            {
              icon: <Eye className="h-5 w-5" />,
              title: "Visão",
              text: "Ser referência nacional em certificação digital, reconhecida pela excelência no atendimento e inovação.",
            },
            {
              icon: <Award className="h-5 w-5" />,
              title: "Valores",
              text: "Ética, transparência, respeito, agilidade, foco no cliente e compromisso com a segurança da informação.",
            },
          ].map((p) => (
            <div key={p.title} className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {p.icon}
              </div>
              <h3 className="text-xl font-extrabold">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POR QUE EXISTIMOS */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <HeartHandshake className="h-3.5 w-3.5" /> Nosso jeito
              </span>
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                Tecnologia é meio. Pessoas são o fim.
              </h2>
            </div>
            <p className="text-muted-foreground">
              A gente acredita que certificado digital pode (e deve) ser simples. Por isso, o
              cliente que chega até a Diferencial encontra um time real: atendimento próximo,
              suporte antes e depois da emissão e um processo pensado para caber no dia a dia
              corrido de quem já tem muito o que resolver.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 pt-16">
        <div
          className="mx-auto max-w-4xl rounded-[2rem] p-10 text-center text-primary-foreground shadow-[var(--shadow-brand)] sm:p-12"
          style={{ background: "var(--gradient-brand)" }}
        >
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Vamos conversar sobre o seu certificado?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Nosso time está pronto para te atender pelo WhatsApp — sem robô, com gente de verdade.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
            </a>
            <Link
              to="/certificados"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white hover:bg-white/10"
            >
              Ver modelos de certificado <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
