export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border px-5 md:px-8 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-text-subtle font-inter text-sm">
          Kit Consultório Teen &copy; 2026
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {["Política de Privacidade", "Termos", "Contato"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-text-subtle font-inter text-sm hover:text-text-muted transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
