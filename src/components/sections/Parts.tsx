import { whatsappLink } from "@/components/WhatsAppButton";

const PARTS = [
  { icon: "🎮", title: "Placas de Vídeo", desc: "GTX, RTX e Radeon de diversas gerações." },
  { icon: "💾", title: "SSDs e HDs", desc: "SATA, NVMe e M.2 de alta performance." },
  { icon: "🧠", title: "Memórias RAM", desc: "DDR4 e DDR5 para desktop e notebook." },
  { icon: "🔌", title: "Fontes", desc: "Fontes 80 Plus com proteção contra oscilação." },
  { icon: "🖥️", title: "Processadores", desc: "Intel e AMD, das linhas de entrada às gamer." },
  { icon: "🧰", title: "Placas-mãe", desc: "Compatíveis com os principais sockets do mercado." },
];

export function Parts() {
  return (
    <section id="pecas" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-accent-2/10 blur-[100px]" />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Venda de peças
        </h2>
        <p className="mt-4 text-muted">
          Consulte disponibilidade e preço direto com nossa equipe pelo WhatsApp.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3">
        {PARTS.map((part) => (
          <a
            key={part.title}
            href={whatsappLink(`Olá! Gostaria de consultar disponibilidade de ${part.title.toLowerCase()}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-8 text-center transition-all hover:-translate-y-1 hover:border-accent-2/60"
          >
            <span className="text-3xl transition-transform group-hover:scale-110" aria-hidden="true">
              {part.icon}
            </span>
            <span className="font-semibold text-foreground">{part.title}</span>
            <span className="text-xs text-muted">{part.desc}</span>
            <span className="mt-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Consultar no WhatsApp →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
