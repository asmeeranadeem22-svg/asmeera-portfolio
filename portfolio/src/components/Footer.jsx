function Footer() {
  return (
    <footer className="  border-t border-white/10 bg-slate-950 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © 2026 Asmeera Nadeem. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-400">

          <a
            href="https://github.com/asmeeranadeem22-svg"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/asmeera-nadeem-176600436"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

        </div>

        {/* Built With */}
        <p className="text-sm text-gray-500">
          Built with React + Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;