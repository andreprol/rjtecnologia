import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <Logo />
        <div className="text-xs text-muted">
          <p>Rio de Janeiro Logística e Tecnologia LTDA — CNPJ 58.969.414/0001-03</p>
          <p className="mt-1">© 2026 RJ Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
