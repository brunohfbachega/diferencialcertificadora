import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText,
  Usb,
  Cloud,
  User,
  Building2,
  CheckCircle2,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { PageShell, WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";
import certificadoNuvemAsset from "@/assets/certificado-nuvem-sympass-v2.png.asset.json";

export const Route = createFileRoute("/certificados")({
  head: () => ({
    meta: [
      { title: "Modelos de Certificado Digital A1, A3 e em Nuvem | Diferencial" },
      {
        name: "description",
        content:
          "Conheça os modelos de Certificado Digital emitidos pela Diferencial: A1, A3 (token/cartão) e em Nuvem (Sympass), para e-CPF e e-CNPJ, com validade de 12 a 36 meses.",
      },
      { property: "og:title", content: "Modelos de Certificado Digital | Diferencial" },
      { property: "og:description", content: "A1, A3 e em Nuvem — e-CPF e e-CNPJ, com validade de 12 a 36 meses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CertificadosPage,
});

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
    subtitle: "Arquivo digital instalado direto no computador. Prático para quem emite muitas notas fiscais.",
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
    subtitle: "Assine documentos direto do celular pelo app Sympass, sem token, cartão ou leitora.",
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

function CertificadosPage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-10 pt-14 lg:pt-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            Modelos de Certificado
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            Escolha o{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              certificado ideal
            </span>{" "}
            para você ou sua empresa.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Emitimos e-CPF e e-CNPJ nos modelos A1, A3 e em Nuvem — com atendimento humano,
            emissão rápida e total conformidade com a ICP-Brasil.
          </p>
        </div>
      </section>

      {/* PERFIL: e-CPF vs e-CNPJ */}
      <section className="mx-auto max-w-6xl px-6 pb-10">
        <div className="grid gap-6 sm:grid-cols-2">
          {[
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
          ].map((p) => (
            <div key={p.tag} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
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
      </section>

      {/* MODELOS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Tipos de mídia
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            A1, A3 e em Nuvem — para o seu jeito de trabalhar
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {MODELOS.map((m) => (
            <article
              key={m.title}
              className={`relative overflow-hidden rounded-3xl border p-8 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1 ${
                m.destaque ? "border-primary/40 bg-card" : "border-border bg-card"
              }`}
            >
              {m.destaque && (
                <span
                  className="absolute right-6 top-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {m.tag}
                </span>
              )}
              {!m.destaque && (
                <span className="absolute right-6 top-6 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  {m.tag}
                </span>
              )}

              {/* Visual gráfico do modelo */}
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

              <h3 className="text-2xl font-extrabold">{m.title}</h3>
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
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--primary)" }} />
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
      </section>

      {/* DESTAQUE NUVEM COM IMAGEM */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] lg:grid-cols-2 lg:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
              Certificado em Nuvem
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Seu certificado no bolso, com o app{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              >
                Sympass
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Chave protegida em HSM de alta segurança, autenticação por biometria e assinatura
              válida em todo o Brasil — sem token, sem cartão, sem leitora.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Sem dispositivo físico", "Biometria", "ICP-Brasil", "e-CAC / Receita"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-primary">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={certificadoNuvemAsset.url}
              alt="Certificado Digital em Nuvem com o app Sympass"
              className="w-full max-w-md object-contain drop-shadow-[0_20px_40px_rgba(139,42,140,0.2)]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div
          className="mx-auto max-w-4xl rounded-[2rem] p-10 text-center text-primary-foreground shadow-[var(--shadow-brand)] sm:p-12"
          style={{ background: "var(--gradient-brand)" }}
        >
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Ainda em dúvida qual é o ideal para você?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            Fale com um especialista da Diferencial. Em minutos você tem uma recomendação
            sob medida para o seu perfil.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-primary transition-transform hover:scale-[1.03]"
            >
              <WhatsAppIcon className="h-4 w-4" /> Falar com um especialista
            </a>
            <Link
              to="/parceria-contabil"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-bold text-white hover:bg-white/10"
            >
              Sou contador <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
