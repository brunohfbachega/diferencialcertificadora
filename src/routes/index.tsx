import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  FileSignature,
  Clock,
  Lock,
  CheckCircle2,
  Star,
  ArrowRight,
  Phone,
  MessageCircle,
  Building2,
  User,
  Sparkles,
  Video,
  Headphones,
  RefreshCw,
  Users,
  Mail,
  MapPin,
  Target,
  Eye,
  Award,
  Percent,
} from "lucide-react";
import escritorioAsset from "@/assets/escritorio-diferencial.webp.asset.json";
import escritorioMobileAsset from "@/assets/escritorio-diferencial-800.webp.asset.json";
const escritorioUrl = escritorioAsset.url;
const escritorioMobileUrl = escritorioMobileAsset.url;
import logoAsset from "@/assets/logo-diferencial.webp.asset.json";
const logoUrl = logoAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diferencial Certificado Digital — Emissão rápida, segura e sem burocracia | Parceria Contábil" },
      {
        name: "description",
        content:
          "Certificados Digitais A1 e A3 com atendimento personalizado. Emissão rápida, segura e sem complicação para sua empresa e CPF. Contabilidades: seja parceira e ganhe comissão por indicação.",
      },
      { property: "og:title", content: "Diferencial Certificado Digital — Parceria Contábil" },
      {
        property: "og:description",
        content: "Certificados A1 e A3 com emissão rápida, segura e atendimento humanizado. Programa de parceria para contabilidades com comissão por indicação.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: escritorioMobileUrl, fetchpriority: "high" } as unknown as { rel: string; href: string },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/554741010898";

function Landing() {
  return (
    <main
      className="min-h-screen text-foreground"
      style={{ background: "var(--gradient-institutional)" }}
    >
      <Header />
      <Atracao />
      <Conexao />
      <Diferenciais />
      <QuemSomos />
      <ParceriaContabil />
      <Confianca />
      <Depoimentos />
      <Conversao />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="Diferencial Certificado Digital" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">DIFERENCIAL</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Certificado Digital
            </p>
          </div>
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] sm:inline-flex"
          style={{ background: "var(--gradient-brand)" }}
        >
          <MessageCircle className="h-4 w-4" /> Falar agora
        </a>
      </div>
    </header>
  );
}

/* ===================== ATRAÇÃO ===================== */
function Atracao() {
  return (
    <section className="relative overflow-hidden">

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Certificadora Digital Autorizada
          </span>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Seu Certificado Digital{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              pronto em minutos
            </span>
            , sem dor de cabeça.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Emissão de Certificados <strong className="text-foreground">A1 e A3</strong> com
            atendimento personalizado, suporte humano e total segurança jurídica para sua empresa
            ou CPF.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03]"
              style={{ background: "var(--gradient-brand)" }}
            >
              Quero emitir meu certificado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#confianca"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Como funciona
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <Metric value="+5" label="anos no mercado" />
            <Metric value="100%" label="seguro e válido" />
            <Metric value="24h" label="emissão expressa" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[var(--shadow-soft)]">
            <img
              src={escritorioMobileUrl}
              srcSet={`${escritorioMobileUrl} 800w, ${escritorioUrl} 1400w`}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 90vw, 540px"
              alt="Escritório Diferencial Certificado Digital"
              width={1254}
              height={1254}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="aspect-square w-full object-cover"
            />
          </div>
          <FloatingCard
            className="-bottom-6 -left-6"
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Validade Jurídica"
            subtitle="ICP-Brasil"
          />
          <FloatingCard
            className="-right-4 top-8"
            icon={<Zap className="h-5 w-5" />}
            title="Emissão expressa"
            subtitle="Em até 1 dia útil"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--primary)" }}>
        {value}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    </div>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  subtitle,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className={`absolute flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 pr-5 shadow-[var(--shadow-soft)] backdrop-blur ${className}`}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
        style={{ background: "var(--gradient-brand)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-sm font-bold leading-tight">{title}</p>
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
    </motion.div>
  );
}

/* ===================== CONEXÃO ===================== */
function Conexao() {
  const pains = [
    "Seu certificado venceu e o sistema parou?",
    "Cansado de processos burocráticos e demorados?",
    "Já perdeu prazos fiscais por falta de assinatura digital?",
    "Insegurança com sites genéricos e sem suporte real?",
  ];
  return (
    <section className="border-y border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Você não está sozinho
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              A gente entende: certificado digital{" "}
              <span style={{ color: "var(--primary)" }}>parece complicado</span> — mas não precisa
              ser.
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Todo dia atendemos empresários e contadores que passam pelos mesmos problemas. Por
              isso construímos um processo simples, rápido e com gente de verdade do seu lado.
            </p>
          </div>
          <ul className="space-y-3">
            {pains.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4 shadow-[var(--shadow-soft)]"
              >
                <span
                  className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ===================== DIFERENCIAIS ===================== */
function Diferenciais() {
  const items = [
    {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Atendimento humanizado",
      text: "Atendimento rápido, próximo e sem robô. Falamos a sua língua do começo ao fim.",
    },
    {
      icon: <Video className="h-5 w-5" />,
      title: "Presencial ou por videoconferência",
      text: "Emita seu certificado do seu jeito: no nosso escritório ou 100% online por vídeo.",
    },
    {
      icon: <Headphones className="h-5 w-5" />,
      title: "Suporte especializado",
      text: "Antes e depois da emissão — nossa equipe segue com você sempre que precisar.",
    },
    {
      icon: <RefreshCw className="h-5 w-5" />,
      title: "Renovação e instalação ágeis",
      text: "Processos rápidos para você não parar de emitir notas nem perder prazos.",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Segurança ICP-Brasil",
      text: "Total conformidade com os padrões oficiais da Infraestrutura de Chaves Públicas.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Para todos os perfis",
      text: "Soluções para pessoas físicas, empresas, contadores, advogados e área da saúde.",
    },
  ];

  return (
    <section id="diferenciais" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Nossos Diferenciais
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          Por que escolher a Diferencial Certificado Digital?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
          Combinamos tecnologia, agilidade e atendimento humano para entregar a melhor experiência
          em certificação digital.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
          >
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              {s.icon}
            </div>
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      {/* Selos de confiança */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {[
          { icon: <ShieldCheck className="h-4 w-4" />, label: "ICP-Brasil" },
          { icon: <Lock className="h-4 w-4" />, label: "SSL Secure" },
          { icon: <FileSignature className="h-4 w-4" />, label: "Assinatura válida juridicamente" },
          { icon: <CheckCircle2 className="h-4 w-4" />, label: "Autoridade de Registro Autorizada" },
        ].map((s) => (
          <span
            key={s.label}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold text-primary"
          >
            {s.icon}
            {s.label}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ===================== QUEM SOMOS ===================== */
function QuemSomos() {
  const pilares = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Missão",
      text: "Oferecer soluções em certificação digital com segurança, agilidade e excelência, simplificando processos e contribuindo para a transformação digital de nossos clientes.",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Visão",
      text: "Ser referência nacional em certificação digital, reconhecida pela inovação, qualidade dos serviços e excelência no atendimento.",
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Valores",
      text: "Ética e transparência; compromisso com o cliente; segurança e confiabilidade; agilidade e eficiência; inovação e melhoria contínua; respeito às pessoas e relações; excelência na prestação de serviços.",
    },
  ];

  return (
    <section id="quem-somos" className="border-y border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
              Quem Somos
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
              A Diferencial Certificado Digital
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Somos uma empresa especializada em soluções de certificação digital, com sede em
              Joinville/SC e atendimento em todo o Brasil. Oferecemos emissão, renovação e gestão
              de certificados digitais para empresas, profissionais liberais e pessoas físicas.
            </p>
            <p className="mt-4 text-base text-muted-foreground">
              Nosso diferencial está na combinação de tecnologia, atendimento personalizado e
              processos simplificados, proporcionando uma experiência rápida, segura e confiável para
              nossos clientes.
            </p>
          </div>

          <div className="grid gap-5">
            {pilares.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===================== PARCERIA CONTÁBIL ===================== */
function ParceriaContabil() {
  const benefits = [
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

  return (
    <section id="parceria-contabil" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Para Contabilidades
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Parceria Contábil
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Se você é contador ou gestor de uma escritória contábil, seja nosso parceiro. Indique
            os certificados digitais A1 e A3 da Diferencial para seus clientes e ofereça mais
            praticidade e segurança ao rotineiro fiscal e trabalhista deles.
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
          {benefits.map((b) => (
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

          <div className="rounded-2xl border border-border p-5" style={{ background: "var(--gradient-soft)" }}>
            <p className="text-sm font-semibold text-foreground">
              Quer saber mais sobre a parceria?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Envie uma mensagem e nosso consultor explica as condições comerciais em poucos minutos.
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

      {/* CTA em destaque abaixo do bloco principal */}
      <div className="mt-8 overflow-hidden rounded-[2rem] border border-border p-8 text-center shadow-[var(--shadow-soft)]" style={{ background: "var(--gradient-brand)" }}>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
          Programa de Parceria Contábil
        </p>
        <h3 className="mx-auto mt-3 max-w-2xl text-2xl font-extrabold text-white sm:text-3xl">
          Indique certificados digitais e crie uma nova fonte de receita para sua contabilidade
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/85">
          Mais de 5 anos no mercado, atendimento em todo o Brasil e suporte técnico humano para seus clientes.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" /> Quero ser parceiro agora
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

/* ===================== CONFIANÇA ===================== */
function Confianca() {
  const steps = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "1. Fale com a gente",
      text: "Atendimento humano via WhatsApp para entender qual certificado você precisa.",
    },
    {
      icon: <FileSignature className="h-5 w-5" />,
      title: "2. Emissão guiada",
      text: "Conduzimos cada etapa, validação e instalação — sem você se perder no processo.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "3. Use com segurança",
      text: "Certificado pronto, válido em todo Brasil, com suporte sempre que precisar.",
    },
  ];

  return (
    <section id="confianca" className="border-y border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Como funciona
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Um processo simples, do primeiro contato à validade jurídica.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <ProductCard
            icon={<User className="h-5 w-5" />}
            tag="Pessoa Física"
            title="Certificado A1 ou A3 — e-CPF"
            features={[
              "Assinatura digital de documentos",
              "Acesso ao e-CAC e Receita Federal",
              "Declaração de IR com segurança",
            ]}
          />
          <ProductCard
            icon={<Building2 className="h-5 w-5" />}
            tag="Pessoa Jurídica"
            title="Certificado A1 ou A3 — e-CNPJ"
            features={[
              "Emissão de notas fiscais (NF-e, NFS-e)",
              "eSocial, Conectividade Social e Sefaz",
              "Validade jurídica em contratos",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ===================== DEPOIMENTOS ===================== */
function Depoimentos() {
  const testimonials = [
    {
      name: "Júlia Da Silva Vargas",
      role: "Avaliação Google · 5 avaliações",
      text: "Ótimo lugar, muito bom o atendimento, rápido e organizado, no que precisar eles estão a disposição, super recomendo.",
    },
    {
      name: "Bete Novaes",
      role: "Local Guide · 24 avaliações",
      text: "O atendimento na Diferencial mostra sua essência em um atendimento que acolhe e resolve o necessário para a emissão do certificado digital. Recomendo muito!",
    },
    {
      name: "Marina Rover",
      role: "Local Guide · 9 avaliações",
      text: "Atendimento de qualidade, rapidez e agilidade!",
    },
  ];

  return (
    <section id="depoimentos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Prova social
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
          >
            <div className="mb-3 flex gap-0.5" style={{ color: "var(--primary-glow)" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
            <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {t.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold">{t.name}</p>
                <p className="truncate text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProductCard({
  icon,
  tag,
  title,
  features,
}: {
  icon: React.ReactNode;
  tag: string;
  title: string;
  features: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
      <div className="relative">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            {icon}
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {tag}
          </span>
        </div>
        <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
        <ul className="mt-5 space-y-2.5">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ===================== CONVERSÃO ===================== */
function Conversao() {
  return (
    <section className="relative px-6 pb-24">
      <div
        className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] p-10 text-primary-foreground shadow-[var(--shadow-brand)] sm:p-16"
        style={{ background: "var(--gradient-brand)" }}
      >
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <Clock className="h-3.5 w-3.5" /> Atendimento em minutos
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl">
              Pronto para emitir seu Certificado Digital com quem realmente entende?
            </h2>
            <p className="mt-4 text-white/85">
              Fale agora com um especialista da Diferencial pelo WhatsApp e tenha seu certificado
              hoje mesmo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
              </a>
              <a
                href="tel:+554741010898"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" /> (47) 4101-0898
              </a>
            </div>
          </div>

          <ul className="space-y-3">
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
      </div>
    </section>
  );
}

/* ===================== FOOTER ===================== */
function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Diferencial Certificado Digital" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-tight">DIFERENCIAL</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Certificado Digital
                </p>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold">Fale Conosco</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Estamos prontos para atender você.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <a
                  href="mailto:atendimento@diferencialcertificado.com.br"
                  className="break-all font-semibold hover:text-primary"
                >
                  atendimento@diferencialcertificado.com.br
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Phone className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Telefone / WhatsApp
                </p>
                <a href="tel:+554741010898" className="font-semibold hover:text-primary">
                  (47) 4101-0898
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <MapPin className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Localização
                </p>
                <p className="font-semibold">Joinville/SC</p>
                <p className="text-xs text-muted-foreground">Atendimento em todo o Brasil</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Atendimento
              </p>
              <p className="mt-2 text-lg font-extrabold leading-tight">
                Tire suas dúvidas agora mesmo pelo WhatsApp.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-brand)" }}
            >
              <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} Diferencial Certificado Digital. Todos os direitos
            reservados.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary">
            wa.me/554741010898
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ===================== FLOATING WHATSAPP ===================== */
function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-5 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.05]"
      style={{ background: "var(--gradient-brand)" }}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
