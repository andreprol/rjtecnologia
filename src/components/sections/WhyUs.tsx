const REASONS = [
  {
    title: "Transparência total",
    desc: "Diagnóstico explicado em linguagem simples, sem letras miúdas no orçamento.",
  },
  {
    title: "Seus arquivos preservados",
    desc: "Trabalhamos com backup antes de qualquer intervenção que envolva risco de dados.",
  },
  {
    title: "Técnicos especializados",
    desc: "Equipe com experiência em hardware de ponta, de notebooks a PCs gamer.",
  },
  {
    title: "Atendimento ágil",
    desc: "Resposta rápida pelo WhatsApp e coleta do equipamento em todo o Rio de Janeiro.",
  },
];

export function WhyUs() {
  return (
    <section id="diferenciais" className="border-y border-border bg-surface/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Consertar ou comprar outro?
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              Trocar de computador costuma custar bem mais do que parece — e
              ainda tem o trabalho de migrar arquivos, programas e
              configurações. Na maioria dos casos, reparar o seu equipamento
              atual é a opção mais rápida e mais em conta, preservando tudo o
              que já está configurado do jeito que você gosta.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {REASONS.map((reason) => (
              <div key={reason.title} className="rounded-xl border border-border bg-surface p-5">
                <dt className="font-semibold text-foreground">{reason.title}</dt>
                <dd className="mt-2 text-sm text-muted leading-relaxed">{reason.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
