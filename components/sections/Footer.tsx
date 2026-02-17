export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Designed & Built by{" "}
            <span className="text-text">Sven Sonnborn</span>
          </p>
          <p className="text-sm text-muted font-mono">
            © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
