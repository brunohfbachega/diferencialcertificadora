import { createFileRoute } from "@tanstack/react-router";

import { Header, Footer, FloatingWhatsApp } from "@/components/site-chrome";
import { Hero } from "@/components/sections/hero";
import { Sobre } from "@/components/sections/sobre";
import { Servicos } from "@/components/sections/servicos";
import { Beneficios } from "@/components/sections/beneficios";
import { ComoFunciona } from "@/components/sections/como-funciona";
import { Depoimentos } from "@/components/sections/depoimentos";
import { ParceriaContabil } from "@/components/sections/parceria-contabil";
import { Faq } from "@/components/sections/faq";
import { CtaFinal } from "@/components/sections/cta-final";
import { Contato } from "@/components/sections/contato";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Diferencial Certificado Digital — Emissão rápida, segura e sem burocracia | Parceria Contábil",
      },
      {
        name: "description",
        content:
          "Certificados Digitais A1, A3 e em Nuvem com atendimento humanizado. Emissão rápida e segura para CPF e CNPJ. Contabilidades: seja parceira e ganhe comissão por indicação.",
      },
      { property: "og:title", content: "Diferencial Certificado Digital — Parceria Contábil" },
      {
        property: "og:description",
        content:
          "Certificados A1, A3 e em Nuvem com emissão rápida, segura e atendimento humanizado. Programa de parceria para contabilidades com comissão por indicação.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <main
      className="min-h-screen text-foreground"
      style={{ background: "var(--gradient-institutional)" }}
    >
      <Header />
      <Hero />
      <Sobre />
      <Servicos />
      <Beneficios />
      <ComoFunciona />
      <Depoimentos />
      <ParceriaContabil />
      <Faq />
      <CtaFinal />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
