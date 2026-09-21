
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-8 py-5 backdrop-blur-md">

      {/* Logo */}
      <h1 className="text-2xl font-bold">
        Asmeera<span className="text-cyan-400">.</span>
      </h1>

      {/* Desktop Navbar */}
      <div className="hidden items-center gap-8 text-gray-300 md:flex">

        <a
          href="#about"
          className="transition hover:text-cyan-400"
        >
          About
        </a>

        <a
          href="#skills"
          className="transition hover:text-cyan-400"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="transition hover:text-cyan-400"
        >
          Projects
        </a>

        <a
          href="#experience"
          className="transition hover:text-cyan-400"
        >
          Experience
        </a>

        <a
          href="#education"
          className="transition hover:text-cyan-400"
        >
          Education
        </a>

        <a
          href="#contact"
          className="transition hover:text-cyan-400"
        >
          Contact
        </a>

      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-2xl md:hidden"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-8 top-20 z-50 flex w-52 flex-col gap-4 rounded-xl border border-white/10 bg-slate-900 p-5 shadow-xl md:hidden">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            Experience
          </a>

          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            Education
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="transition hover:text-cyan-400"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;

