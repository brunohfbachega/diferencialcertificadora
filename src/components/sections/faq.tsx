import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "Qual a diferença entre certificado A1, A3 e em nuvem?",
    a: "O A1 é um arquivo instalado no computador com validade de 12 meses. O A3 fica em token USB ou cartão inteligente, com validade de 12 a 36 meses. O certificado em nuvem fica em servidor seguro (HSM) e é usado pelo celular, via app Sympass, sem nenhum dispositivo físico.",
  },
  {
    q: "Preciso ir até a loja para emitir meu certificado?",
    a: "Não. A validação pode ser feita 100% online por videoconferência. Se preferir atendimento presencial, você é bem-vindo no nosso escritório em Joinville/SC.",
  },
  {
    q: "Quanto tempo leva para emitir o certificado?",
    a: "Com a documentação em mãos, a emissão costuma ser concluída no mesmo dia — em muitos casos em poucos minutos após a videoconferência.",
  },
  {
    q: "Quais documentos são necessários?",
    a: "Para e-CPF: documento de identidade com foto, CPF e comprovante de endereço. Para e-CNPJ: além dos documentos do responsável legal, o contrato social ou documento equivalente e o cartão CNPJ.",
  },
  {
    q: "Vocês ajudam na instalação e configuração?",
    a: "Sim. Nossa equipe faz o acompanhamento remoto da instalação e continua disponível para suporte sempre que você precisar, antes e depois da emissão.",
  },
  {
    q: "Sou contador. Como funciona a parceria?",
    a: "Você indica os certificados da Diferencial para seus clientes e recebe comissão por cada emissão concretizada, com atendimento exclusivo e processo simplificado para o seu escritório.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-28 border-y border-border bg-transparent">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Dúvidas frequentes
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
            Tudo o que você precisa saber antes de emitir
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold">{f.q}</span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-primary-foreground transition-transform duration-300"
                    style={{
                      background: "var(--gradient-brand)",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
