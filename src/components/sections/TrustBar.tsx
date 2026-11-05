const ITEMS = [
  { icon: "🛡️", label: "Garantia de até 1 ano" },
  { icon: "📝", label: "Orçamento sem compromisso" },
  { icon: "💳", label: "Parcelamento em até 10x" },
  { icon: "🚚", label: "Coleta e entrega no RJ" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4">
        {ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">{item.icon}</span>
            <span className="text-sm font-medium text-foreground/90">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
