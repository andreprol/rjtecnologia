import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden px-6 py-24">
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
      <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center sm:p-14">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Vamos resolver o seu problema hoje
        </h2>
        <p className="mt-4 text-muted">
          Fale agora com nossa equipe e receba um orçamento sem compromisso,
          sem letra miúda.
        </p>
        <div className="mt-8 flex justify-center">
          <WhatsAppButton label="Chamar no WhatsApp agora" />
        </div>
      </div>
    </section>
  );
}
