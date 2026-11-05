import { HeroVisual } from "@/components/HeroVisual";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Atendimento em todo o Rio de Janeiro
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Seu computador de volta à{" "}
            <span className="text-glow bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              máxima performance
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted">
            Conserto e manutenção de notebooks e desktops, upgrade de peças e
            venda de componentes com garantia e orçamento sem compromisso.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton label="Pedir orçamento grátis" />
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Ver serviços
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              ["+10 anos", "de experiência"],
              ["1 ano", "de garantia"],
              ["até 10x", "no cartão"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-bold text-foreground">{value}</dt>
                <dd className="text-sm text-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative h-[360px] sm:h-[460px] lg:h-[520px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
