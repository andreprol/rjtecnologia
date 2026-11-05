const SERVICES = [
  {
    icon: "🛠️",
    title: "Conserto de PC e Notebook",
    desc: "Diagnóstico e reparo de falhas de hardware e software com laudo técnico gratuito.",
  },
  {
    icon: "⚡",
    title: "Upgrade de SSD e Memória",
    desc: "Troca de HD por SSD e ampliação de RAM para ganho real de velocidade.",
  },
  {
    icon: "🧩",
    title: "Montagem de PC",
    desc: "Montagem completa com instalação de placa-mãe, processador e placa de vídeo.",
  },
  {
    icon: "🦠",
    title: "Remoção de Vírus",
    desc: "Limpeza completa de malwares e otimização de sistema sem perda de arquivos.",
  },
  {
    icon: "💽",
    title: "Formatação e Backup",
    desc: "Reinstalação de sistema com backup seguro dos seus arquivos antes de começar.",
  },
  {
    icon: "🔧",
    title: "Instalação de Peças",
    desc: "Fonte, processador, placa de vídeo e armazenamento instalados por técnicos especializados.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Serviços especializados
        </h2>
        <p className="mt-4 text-muted">
          Tudo o que seu computador precisa, com equipe própria e peças de qualidade.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-2 text-2xl transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              {service.icon}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
