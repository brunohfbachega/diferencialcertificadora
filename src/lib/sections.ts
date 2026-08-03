export type SectionItem = { id: string; label: string };

/** Ordem das seções da SPA (usada pelo menu e pelo scroll-spy). */
export const SECTIONS: SectionItem[] = [
  { id: "hero", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "beneficios", label: "Benefícios" },
  { id: "como-funciona", label: "Como funciona" },
  { id: "depoimentos", label: "Depoimentos" },
  { id: "parceria-contabil", label: "Parceria Contábil" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];
