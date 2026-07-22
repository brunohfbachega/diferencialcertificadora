import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/logo-diferencial.webp.asset.json";

export const WHATSAPP = "https://wa.me/554741010898";
export const logoUrl = logoAsset.url;

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M19.11 17.24c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.51l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.3-1.02 1-1.02 2.43 0 1.44 1.05 2.83 1.19 3.02.15.2 2.07 3.15 5.01 4.42 1.87.8 2.6.87 3.53.73.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35z" />
      <path d="M26.65 5.34A15.9 15.9 0 0 0 15.99 1C7.16 1 0 8.16 0 16.99a15.9 15.9 0 0 0 2.13 7.99L0 32l7.19-2.09a15.94 15.94 0 0 0 8.8 2.64h.01c8.83 0 15.99-7.16 16-15.99a15.9 15.9 0 0 0-5.35-11.22zM16 29.86h-.01a13.2 13.2 0 0 1-6.73-1.84l-.48-.29-4.27 1.24 1.27-4.16-.31-.5A13.2 13.2 0 0 1 2.86 17c0-7.24 5.9-13.14 13.14-13.14 3.51 0 6.81 1.37 9.29 3.85a13.05 13.05 0 0 1 3.85 9.28c0 7.24-5.9 13.14-13.14 13.14z" />
    </svg>
  );
}

const NAV = [
  { to: "/", label: "Início" },
  { to: "/certificados", label: "Certificados" },
  { to: "/parceria-contabil", label: "Parceria Contábil" },
  { to: "/sobre", label: "Sobre nós" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Diferencial Certificado Digital"
            width={40}
            height={40}
            className="h-10 w-10 rounded-lg object-contain"
          />
          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight">DIFERENCIAL</p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Certificado Digital
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-primary" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
      <nav className="flex items-center gap-1 overflow-x-auto border-t border-border/60 px-4 py-2 md:hidden">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
            activeProps={{ className: "whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold bg-secondary text-primary" }}
            activeOptions={{ exact: true }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-transparent">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Diferencial Certificado Digital" width={40} height={40} className="h-10 w-10 rounded-lg object-contain" />
              <div className="leading-tight">
                <p className="text-sm font-bold tracking-tight">DIFERENCIAL</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Certificado Digital</p>
              </div>
            </div>
            <h3 className="mt-6 text-2xl font-extrabold">Fale Conosco</h3>
            <p className="mt-2 text-sm text-muted-foreground">Estamos prontos para atender você.</p>
            <nav className="mt-6 flex flex-wrap gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:bg-secondary hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Mail className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">E-mail</p>
                <a href="mailto:atendimento@diferencialcertificado.com.br" className="break-all font-semibold hover:text-primary">
                  atendimento@diferencialcertificado.com.br
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <Phone className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Telefone / WhatsApp</p>
                <a href="tel:+554741010898" className="font-semibold hover:text-primary">(47) 4101-0898</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-brand)" }}>
                <MapPin className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Localização</p>
                <p className="font-semibold">Joinville/SC</p>
                <p className="text-xs text-muted-foreground">Atendimento em todo o Brasil</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Atendimento</p>
              <p className="mt-2 text-lg font-extrabold leading-tight">Tire suas dúvidas agora mesmo pelo WhatsApp.</p>
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
          <p>© {new Date().getFullYear()} Diferencial Certificado Digital. Todos os direitos reservados.</p>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hover:text-primary">wa.me/554741010898</a>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
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

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen text-foreground" style={{ background: "var(--gradient-institutional)" }}>
      <Header />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
