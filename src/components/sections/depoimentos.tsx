import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

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

const TESTIMONIALS = [
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
  {
    name: "Adriana Rodrigues",
    role: "Avaliação Google · 12 avaliações",
    text: "Atendimento maravilhoso, rapidez e super indico.",
  },
  {
    name: "Marlon",
    role: "Avaliação Google · 1 avaliação",
    text: "Rapidez no atendimento, eficientes e muito prestativos.",
  },
  {
    name: "Lucas Ferreira Lima",
    role: "Local Guide · 63 avaliações",
    text: "Rápidos e justos.",
  },
  {
    name: "Camilla M",
    role: "Avaliação Google · 2 avaliações",
    text: "Excelente atendimento, recomendo demais a Diferencial!",
  },
  {
    name: "Gabriele Oliveira",
    role: "Avaliação Google · 9 avaliações",
    text: "Há 3 anos emitindo certificado digital de todas as minhas empresas com a Diferencial. Ótimo atendimento, preço justo e o melhor: agilidade na emissão dos certificados. Pós atendimento também é ótimo.",
  },
  {
    name: "Julio Cezar de Andrade Peixoto",
    role: "Avaliação Google · 2 avaliações",
    text: "Atendimento on line rápido, prático e bem orientado. Equipe competente.",
  },
  {
    name: "Sérgio Círico",
    role: "Avaliação Google · 10 avaliações",
    text: "Ótimo atendimento. Rápido e objetivo. Recomendo.",
  },
  {
    name: "Edson Morgan",
    role: "Avaliação Google · 6 avaliações",
    text: "Gostei do atendimento, serviço rápido e a pessoa muita atenciosa e simpática.",
  },
  {
    name: "LianCard",
    role: "Avaliação Google · 1 avaliação",
    text: "Atendimento, simpatia e agilidade, sempre estamos renovando com eles por esses motivos, nota 10.",
  },
  {
    name: "Mercado Livre CeK Acessórios",
    role: "Avaliação Google · 1 avaliação",
    text: "Ótimo atendimento. Equipe muito atenciosa.",
  },
];

export function Depoimentos() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const isPausedRef = useRef(false);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-testimonial-card]");
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.9;
    const maxScroll = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + step * dir;
    if (dir === 1 && el.scrollLeft >= maxScroll - 4) next = 0;
    if (dir === -1 && el.scrollLeft <= 4) next = maxScroll;
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      if (!isPausedRef.current) scrollBy(1);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="depoimentos" className="scroll-mt-28 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-card/60 p-8 shadow-[var(--shadow-soft)] sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Depoimentos
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            O que dizem sobre a Diferencial
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Veja o que nossos clientes compartilharam sobre a experiência de emitir o certificado
            digital com o nosso time.
          </p>

          <div
            ref={scrollerRef}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
            onFocusCapture={() => (isPausedRef.current = true)}
            onBlurCapture={() => (isPausedRef.current = false)}
            onTouchStart={() => (isPausedRef.current = true)}
            onTouchEnd={() => (isPausedRef.current = false)}
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                data-testimonial-card
                className="flex w-[85%] shrink-0 snap-start flex-col rounded-2xl border border-border bg-background p-6 shadow-[var(--shadow-soft)] sm:w-[360px]"
              >
                <div className="mb-3 flex gap-0.5" style={{ color: "var(--primary-glow)" }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="relative shrink-0">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-primary-foreground"
                      style={{ background: "var(--gradient-brand)" }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-card">
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

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => scrollBy(-1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => scrollBy(1)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-muted"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
