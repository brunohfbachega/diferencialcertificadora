import {
  ArrowRight,
  BellRing,
  Building2,
  CheckCircle2,
  Cloud,
  Clock,
  FileSignature,
  FileText,
  Fingerprint,
  History,
  Lock,
  ShieldCheck,
  Smartphone,
  Usb,
  User,
  Zap,
} from "lucide-react";

import { WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";
import certificadoNuvemAsset from "@/assets/certificado-nuvem-sympass-v2.png.asset.json";

type Modelo = {
  tag: string;
  title: string;
  subtitle: string;
  validade: string;
  midia: string;
  icon: React.ReactNode;
  features: string[];
  destaque?: boolean;
};

const MODELOS: Modelo[] = [
  {
    tag: "Mais vendido",
    title: "Certificado A1",
    subtitle:
      "Arquivo digital instalado direto no computador. Prático para quem emite muitas notas fiscais.",
    validade: "12 meses",
    midia: "Arquivo (.pfx)",
    icon: <FileText className="h-6 w-6" />,
    destaque: true,
    features: [
      "Instalação direta no computador, sem token nem cartão",
      "Backup e uso em servidores e sistemas de gestão",
      "Ideal para escritórios contábeis e alto volume de NF-e",
      "Emissão 100% online por videoconferência",
    ],
  },
  {
    tag: "Tradicional",
    title: "Certificado A3",
    subtitle: "Armazenado em token USB ou cartão inteligente, com máxima segurança física.",
    validade: "12, 24 ou 36 meses",
    midia: "Token USB ou Smart Card",
    icon: <Usb className="h-6 w-6" />,
    features: [
      "Chave privada protegida no hardware",
      "Portátil — leve para qualquer computador",
      "Ideal para uso pessoal e profissional",
      "Retirada presencial ou entrega em Joinville/SC",
    ],
  },
  {
    tag: "Novidade",
    title: "Certificado em Nuvem",
    subtitle:
      "Assine documentos direto do celular pelo app Sympass, sem token, cartão ou leitora.",
    validade: "12 meses",
    midia: "Aplicativo Sympass (HSM)",
    icon: <Cloud className="h-6 w-6" />,
    features: [
      "Sem dispositivo físico — use pelo celular",
      "Assinatura com biometria e validade ICP-Brasil",
      "Acesso ao e-CAC, Receita Federal e sistemas contábeis",
      "Emissão totalmente por videoconferência",
    ],
  },
];

const PERFIS = [
  {
    icon: <User className="h-5 w-5" />,
    tag: "e-CPF",
    title: "Pessoa Física",
    text: "Para autônomos, profissionais liberais e cidadãos que precisam assinar documentos, acessar e-CAC, e-Social e Meu INSS.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    tag: "e-CNPJ",
    title: "Pessoa Jurídica",
    text: "Para MEI, ME, empresas e escritórios contábeis que emitem NF-e, NFS-e, SPED, e-Social e assinam contratos digitais.",
  },
];

const NUVEM_BENEFITS = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Sem dispositivo físico",
    text: "Acesse e assine de qualquer lugar, só com o celular. Sem token, sem cartão, sem leitora.",
  },
  {
    icon: <FileSignature className="h-5 w-5" />,
    title: "Assinatura com validade jurídica",
    text: "Mesma segurança e validade do certificado tradicional, dentro do padrão ICP-Brasil.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Praticidade no dia a dia",
    text: "Assine documentos, acesse e-CAC, Receita Federal e sistemas contábeis sem instalar drivers.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Chaves protegidas em HSM",
    text: "Seu certificado fica armazenado em servidor certificado de alta segurança (HSM).",
  },
];

const SYMPASS_FEATURES = [
  { icon: <Fingerprint className="h-4 w-4" />, text: "Autenticação por biometria do celular" },
  { icon: <BellRing className="h-4 w-4" />, text: "Notificação push para autorizar cada assinatura" },
  { icon: <FileSignature className="h-4 w-4" />, text: "Assinatura de documentos direto no app" },
  { icon: <History className="h-4 w-4" />, text: "Histórico completo de uso e acessos" },
  { icon: <Lock className="h-4 w-4" />, text: "Proteção com senha e segundo fator" },
];

export function Servicos() {
  return (
    <section id="servicos" className="scroll-mt-28">
      {/* Abertura */}
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          Modelos de Certificado
        </span>
        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
          Escolha o{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-brand)" }}
          >
            certificado ideal
          </span>{" "}
          para você ou sua empresa.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Emitimos e-CPF e e-CNPJ nos modelos A1, A3 e em Nuvem — com atendimento humano, emissão
          rápida e total conformidade com a ICP-Brasil.
        </p>
      </div>

      {/* Perfis */}
      <div className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {PERFIS.map((p) => (
            <div
              key={p.tag}
              className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {p.icon}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modelos */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Tipos de mídia
          </p>
          <h3 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            A1, A3 e em Nuvem — para o seu jeito de trabalhar
          </h3>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODELOS.map((m) => (
            <article
              key={m.title}
              className={`relative overflow-hidden rounded-3xl border p-8 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 ${
                m.destaque ? "border-primary/40 bg-card" : "border-border bg-card"
              }`}
            >
              {m.destaque ? (
                <span
                  className="absolute right-6 top-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {m.tag}
                </span>
              ) : (
                <span className="absolute right-6 top-6 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {m.tag}
                </span>
              )}

              <div
                className="mb-6 flex h-40 items-center justify-center rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)",
                }}
              >
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-brand)]"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {m.icon}
                </div>
              </div>

              <h4 className="text-2xl font-extrabold">{m.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{m.subtitle}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-background px-3 py-2">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <Clock className="h-3 w-3" /> Validade
                  </p>
                  <p className="mt-1 text-sm font-bold">{m.validade}</p>
                </div>
                <div className="rounded-xl border border-border bg-background px-3 py-2">
                  <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <ShieldCheck className="h-3 w-3" /> Mídia
                  </p>
                  <p className="mt-1 text-sm font-bold">{m.midia}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5">
                {m.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0"
                      style={{ color: "var(--primary)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
                style={{ background: "var(--gradient-brand)" }}
              >
                <WhatsAppIcon className="h-4 w-4" /> Emitir {m.title}
              </a>
            </article>
          ))}
        </div>
      </div>

      {/* Certificado em Nuvem / Sympass */}
      <div id="certificado-nuvem" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-16">
        <div className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground"
            style={{ background: "var(--gradient-brand)" }}
          >
            <Cloud className="h-3.5 w-3.5" />
            Certificado em Nuvem
          </span>
          <h3 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Seu certificado, sempre com você — sem token, sem cartão, sem complicação
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            O Certificado Digital em Nuvem fica armazenado com segurança máxima em HSM e é acessado
            direto pelo celular. Nada de token físico, cartão ou leitora — só praticidade.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {NUVEM_BENEFITS.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                {b.icon}
              </div>
              <h4 className="text-lg font-bold">{b.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground"
              style={{ background: "var(--gradient-brand)" }}
            >
              App próprio Diferencial
            </span>
            <h4 className="mt-5 text-2xl font-extrabold leading-tight sm:text-3xl">
              Conheça o{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Sympass
              </span>
              , o app da Diferencial para autenticar e assinar seus documentos
            </h4>
            <p className="mt-4 text-base text-muted-foreground">
              O Sympass é o aplicativo próprio da Diferencial para uso do seu certificado em nuvem.
              Pelo celular, você autentica login, assina documentos com validade jurídica e
              acompanha todo o histórico de uso em tempo real.
            </p>

            <ul className="mt-6 space-y-3">
              {SYMPASS_FEATURES.map((f) => (
                <li key={f.text} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary-foreground"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-primary">{f.icon}</span>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              className="absolute inset-0 -z-10 mx-auto h-full w-2/3 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <img
              src={certificadoNuvemAsset.url}
              alt="Certificado Digital em Nuvem com Sympass"
              loading="lazy"
              decoding="async"
              className="max-h-[520px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-primary-foreground shadow-[var(--shadow-brand)] transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--gradient-brand)" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
            Quero emitir meu certificado em nuvem
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Emissão 100% guiada, com suporte humano do início ao fim.
          </p>
        </div>
      </div>
    </section>
  );
}
