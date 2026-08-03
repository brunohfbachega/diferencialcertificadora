import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

import heroPhoneAsset from "@/assets/hero-agora-mesmo.png.asset.json";

const heroPhoneUrl = heroPhoneAsset.url;

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

export function Hero() {
  return (
    <section id="hero" className="relative scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-6 lg:pb-20 lg:pt-20">
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

          <p className="mt-8 text-sm font-semibold text-muted-foreground">Você é:</p>
          <div className="mt-3 flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <a
              href="#servicos"
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
          className="relative -mx-6 flex items-center justify-center sm:-mx-10 md:-mx-12 lg:mx-0 lg:-mr-8 lg:justify-end"
        >
          <img
            src={heroPhoneUrl}
            alt="Certificado Digital Diferencial no celular — faça o seu agora mesmo"
            width={1200}
            height={1200}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full max-w-[120%] object-contain drop-shadow-[0_30px_60px_rgba(139,42,140,0.25)] sm:max-w-[110%] lg:max-w-[130%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
