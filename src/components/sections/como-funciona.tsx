import { Building2, CheckCircle2, FileSignature, ShieldCheck, User } from "lucide-react";

import { WhatsAppIcon } from "@/components/site-chrome";

const STEPS = [
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
  );
}

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-28 border-y border-border bg-transparent">
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
          {STEPS.map((s) => (
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
