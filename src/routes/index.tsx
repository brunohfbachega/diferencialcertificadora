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
  
  Building2,
  User,
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
  AlertCircle,
} from "lucide-react";

/* Ícone oficial do WhatsApp (SVG inline) — usado nos CTAs */
function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M19.11 17.24c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.3-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.15.2 2.07 3.15 5.01 4.42 1.87.8 2.6.87 3.53.73.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M26.65 5.34A15.9 15.9 0 0 0 15.99 1C7.16 1 0 8.16 0 16.99a15.9 15.9 0 0 0 2.13 7.99L0 32l7.19-2.09a15.94 15.94 0 0 0 8.8 2.64h.01c8.83 0 15.99-7.16 16-15.99a15.9 15.9 0 0 0-5.35-11.22zM16 29.86h-.01a13.2 13.2 0 0 1-6.73-1.84l-.48-.29-4.27 1.24 1.27-4.16-.31-.5A13.2 13.2 0 0 1 2.86 17c0-7.24 5.9-13.14 13.14-13.14 3.51 0 6.81 1.37 9.29 3.85a13.05 13.05 0 0 1 3.85 9.28c0 7.24-5.9 13.14-13.14 13.14z" />
    </svg>
  );
}

/* Badge Google (usado nos cards de depoimento) */
function GoogleBadge({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.5 4 24 4 16.3 4 9.7 8.4 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2.1 14-5.5l-6.5-5.3C29.5 34.6 26.9 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.5 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.4-2.4 4.4-4.5 5.7l6.5 5.3C41.9 35.4 44 30 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}
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
          <WhatsAppIcon className="h-4 w-4" /> Falar agora
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

          <p className="mt-8 text-sm font-semibold text-muted-foreground">
            Você é:
          </p>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#emissao"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.03] sm:w-auto"
              style={{ background: "var(--gradient-brand)" }}
            >
              Quero emitir meu certificado
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#parceria-contabil"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary sm:w-auto"
            >
              Sou contador, quero ser parceiro
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
            <Metric value="+5" label="anos no mercado" />
            <Metric value="100%" label="seguro e válido" />
            <Metric value="24h" label="emissão expressa" />
          </div>

          <div className="mt-6 flex max-w-lg items-center justify-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--primary)" }}>
                +5.000
              </p>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                clientes atendidos
              </p>
            </div>
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
                  <AlertCircle className="h-4 w-4" />
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

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "+5.000", label: "clientes atendidos" },
    { icon: <Clock className="h-6 w-6" />, value: "10 anos", label: "no mercado" },
    { icon: <MapPin className="h-6 w-6" />, value: "Atuação", label: "nacional" },
    { icon: <ShieldCheck className="h-6 w-6" />, value: "ICP-Brasil", label: "autorizada" },
  ];

  return (
    <section id="quem-somos" className="border-y border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Foto */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-soft)]">
              <img
                src={escritorioUrl}
                srcSet={`${escritorioMobileUrl} 800w, ${escritorioUrl} 1600w`}
                sizes="(max-width: 1024px) 100vw, 560px"
                alt="Escritório da Diferencial Certificado Digital em Joinville/SC"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
              Conheça a Diferencial<br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Certificadora Digital
              </span>
            </h2>

            <p className="mt-6 text-base font-semibold text-foreground">
              A certificadora que já emitiu milhares de certificados digitais no Brasil{" "}
              <span className="font-normal text-muted-foreground">
                com atendimento humano, rápido e seguro.
              </span>
            </p>

            <p className="mt-4 text-base text-muted-foreground">
              Com sede em Joinville/SC e atendimento em todo o Brasil, a Diferencial nasceu para
              romper com a burocracia da certificação digital e oferecer uma experiência simples,
              próxima e confiável.
            </p>

            <p className="mt-4 text-base text-muted-foreground">
              Emitimos, renovamos e gerenciamos certificados A1 e A3 para empresas, profissionais
              liberais e pessoas físicas, combinando tecnologia, atendimento personalizado e
              processos simplificados.
            </p>

            <p className="mt-4 text-base text-muted-foreground">
              Nosso propósito é claro: descomplicar a certificação digital e contribuir para a
              transformação digital de cada cliente — do escritório contábil ao autônomo.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card px-4 py-6 text-center shadow-[var(--shadow-soft)]"
            >
              <div
                className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {s.icon}
              </div>
              <div className="text-xl font-extrabold sm:text-2xl">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-9 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            style={{ background: "var(--gradient-brand)" }}
          >
            Fale com a Diferencial
            <ArrowRight className="h-4 w-4" />
          </a>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
            {["ICP-Brasil", "Atendimento humano", "Presencial ou online", "Suporte especializado"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="mt-16 grid gap-5 md:grid-cols-3">
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
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
            ÁREA EXCLUSIVA PARA CONTADORES
          </span>
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

/* ===================== CONFIANÇA ===================== */
function Confianca() {
  const steps = [
    {
      icon: <WhatsAppIcon className="h-5 w-5" />,
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
    <section id="emissao" className="border-y border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">
            Emissão de certificado avulso
          </p>
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
              <div className="relative shrink-0">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {t.name.charAt(0)}
                </div>
                <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-card bg-background">
                  <GoogleBadge className="h-3 w-3" />
                </span>
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
                <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
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
              <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-bold text-white shadow-[var(--shadow-brand)] transition-transform hover:scale-[1.05]"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="hidden sm:inline">Fale no WhatsApp</span>
    </a>
  );
}
