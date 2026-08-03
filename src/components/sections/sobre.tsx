import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Eye,
  MapPin,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

import { WHATSAPP } from "@/components/site-chrome";
import escritorioAsset from "@/assets/escritorio-diferencial.webp.asset.json";
import escritorioMobileAsset from "@/assets/escritorio-diferencial-800.webp.asset.json";
import pilarMissaoAsset from "@/assets/pilar-missao.jpg.asset.json";
import pilarVisaoAsset from "@/assets/pilar-visao.jpg.asset.json";
import pilarValoresAsset from "@/assets/pilar-valores.jpg.asset.json";

const escritorioUrl = escritorioAsset.url;
const escritorioMobileUrl = escritorioMobileAsset.url;

type Pilar = { icon: ReactNode; title: string; text: string; image: string };

function PilaresInterativos({ pilares }: { pilares: Pilar[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-16">
      {/* Desktop: painéis horizontais que expandem */}
      <div className="hidden md:flex gap-3 h-[420px]">
        {pilares.map((p, i) => {
          const isActive = active === i;
          return (
            <button
              key={p.title}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-3xl border border-border text-left shadow-[var(--shadow-soft)] transition-[flex] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive ? "flex-[5]" : "flex-[1]"
              }`}
              aria-expanded={isActive}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[2500ms] ease-out ${
                  isActive ? "scale-110" : "scale-100"
                }`}
                style={{ backgroundImage: `url(${p.image})` }}
              />

              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,10,30,0.55) 0%, rgba(20,10,30,0.85) 100%)",
                }}
              />
              <div
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? "opacity-90" : "opacity-0"
                }`}
                style={{
                  background:
                    "linear-gradient(135deg, color-mix(in oklab, var(--primary) 78%, transparent) 0%, color-mix(in oklab, var(--primary) 40%, transparent) 60%, transparent 100%)",
                }}
              />

              <div
                className={`absolute inset-0 flex items-end justify-center pb-8 transition-opacity duration-500 ${
                  isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.4em] text-white/90"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {p.title}
                </span>
              </div>

              <div
                className={`relative flex h-full flex-col justify-end p-8 transition-all duration-700 ${
                  isActive ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md ring-1 ring-white/30">
                    {p.icon}
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                    0{i + 1} / 0{pilares.length}
                  </div>
                </div>
                <h3 className="text-3xl font-extrabold text-white drop-shadow-sm">{p.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/95 sm:text-[15px]">
                  {p.text}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile: cards empilhados */}
      <div className="grid gap-4 md:hidden">
        {pilares.map((p, i) => (
          <div
            key={p.title}
            className="relative overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)] h-[260px]"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(20,10,30,0.25) 0%, color-mix(in oklab, var(--primary) 70%, transparent) 100%)",
              }}
            />
            <div className="relative flex h-full flex-col justify-end p-6 text-white">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur ring-1 ring-white/30">
                  {p.icon}
                </div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/80">
                  0{i + 1} / 0{pilares.length}
                </div>
              </div>
              <h3 className="text-2xl font-extrabold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/95">{p.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Sobre() {
  const pilares: Pilar[] = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Missão",
      text: "Oferecer soluções em certificação digital com segurança, agilidade e excelência, simplificando processos e contribuindo para a transformação digital de nossos clientes.",
      image: pilarMissaoAsset.url,
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Visão",
      text: "Ser referência nacional em certificação digital, reconhecida pela inovação, qualidade dos serviços e excelência no atendimento.",
      image: pilarVisaoAsset.url,
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Valores",
      text: "Ética e transparência; compromisso com o cliente; segurança e confiabilidade; agilidade e eficiência; inovação e melhoria contínua; respeito às pessoas e relações; excelência na prestação de serviços.",
      image: pilarValoresAsset.url,
    },
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "+5.000", label: "clientes atendidos" },
    { icon: <Clock className="h-6 w-6" />, value: "7 anos", label: "no mercado" },
    { icon: <MapPin className="h-6 w-6" />, value: "Atuação", label: "nacional" },
    { icon: <ShieldCheck className="h-6 w-6" />, value: "ICP-Brasil", label: "autorizada" },
  ];

  return (
    <section id="sobre" className="scroll-mt-28 border-y border-border bg-transparent">
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
            {["ICP-Brasil", "Atendimento humano", "Presencial ou online", "Suporte especializado"].map(
              (t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <PilaresInterativos pilares={pilares} />
      </div>
    </section>
  );
}
