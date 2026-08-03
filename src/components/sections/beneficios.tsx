import {
  AlertCircle,
  CheckCircle2,
  FileSignature,
  HeartHandshake,
  Headphones,
  Lock,
  RefreshCw,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

const PAINS = [
  "Seu certificado venceu e o sistema parou?",
  "Cansado de processos burocráticos e demorados?",
  "Já perdeu prazos fiscais por falta de assinatura digital?",
  "Insegurança com sites genéricos e sem suporte real?",
];

const ITEMS = [
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

const SELOS = [
  { icon: <ShieldCheck className="h-4 w-4" />, label: "ICP-Brasil" },
  { icon: <Lock className="h-4 w-4" />, label: "SSL Secure" },
  { icon: <FileSignature className="h-4 w-4" />, label: "Assinatura válida juridicamente" },
  { icon: <CheckCircle2 className="h-4 w-4" />, label: "Autoridade de Registro Autorizada" },
];

export function Beneficios() {
  return (
    <section id="beneficios" className="scroll-mt-28">
      {/* Conexão — dores */}
      <div className="border-y border-border bg-transparent">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Você não está sozinho
              </p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                A gente entende: certificado digital{" "}
                <span style={{ color: "var(--primary)" }}>parece complicado</span> — mas não
                precisa ser.
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Todo dia atendemos empresários e contadores que passam pelos mesmos problemas. Por
                isso construímos um processo simples, rápido e com gente de verdade do seu lado.
              </p>
            </div>
            <ul className="space-y-3">
              {PAINS.map((p) => (
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
      </div>

      {/* Diferenciais */}
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Nossos Diferenciais
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Por que escolher a Diferencial Certificado Digital?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Combinamos tecnologia, agilidade e atendimento humano para entregar a melhor
            experiência em certificação digital.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((s) => (
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

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
          {SELOS.map((s) => (
            <span
              key={s.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-xs font-semibold text-primary"
            >
              {s.icon}
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
