import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { WhatsAppIcon, WHATSAPP } from "@/components/site-chrome";

export function Contato() {
  return (
    <section id="contato" className="scroll-mt-28 border-t border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">Contato</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Fale Conosco
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Estamos prontos para atender você — atendimento humano, rápido e sem robô.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: <Mail className="h-4 w-4" />,
                label: "E-mail",
                value: "atendimento@diferencialcertificado.com.br",
                href: "mailto:atendimento@diferencialcertificado.com.br",
              },
              {
                icon: <Phone className="h-4 w-4" />,
                label: "Telefone / WhatsApp",
                value: "(47) 4101-0898",
                href: "tel:+554741010898",
              },
              {
                icon: <MapPin className="h-4 w-4" />,
                label: "Endereço",
                value: "Av. Santos Dumont, 799 - Santo Antônio, Joinville - SC, 89218-100",
              },
              {
                icon: <Clock className="h-4 w-4" />,
                label: "Atendimento",
                value: "Segunda a sexta, das 8h30 às 18h — em todo o Brasil",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  {c.icon}
                </span>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="mt-1 block break-words font-semibold hover:text-primary">
                    {c.value}
                  </a>
                ) : (
                  <p className="mt-1 break-words font-semibold">{c.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Atendimento imediato
              </p>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight">
                Tire suas dúvidas agora mesmo pelo WhatsApp.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Um especialista da Diferencial responde em poucos minutos e conduz você em todo o
                processo de emissão.
              </p>
            </div>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-brand)" }}
            >
              <WhatsAppIcon className="h-4 w-4" /> Chamar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
