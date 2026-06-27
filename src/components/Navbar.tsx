import { useEffect, useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-kombat-white/95 backdrop-blur-md shadow-lg shadow-kombat-red/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <span className="relative">
            <Shield className="w-9 h-9 text-kombat-red transition-transform group-hover:scale-110" strokeWidth={2.5} />
            <span className="absolute inset-0 flex items-center justify-center text-kombat-black font-display font-bold text-xs">
              K
            </span>
          </span>
          <div className="leading-none">
            <span className="block font-display font-bold text-xl tracking-wider text-kombat-black">
              CORPORAÇÃO
            </span>
            <span className="block font-display font-bold text-sm tracking-[0.3em] text-kombat-red -mt-0.5">
              KOMBAT
            </span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative font-body text-sm font-medium uppercase tracking-wider text-kombat-black/80 hover:text-kombat-black transition-colors after:absolute after:bottom-[-6px] after:left-0 after:h-0.5 after:w-0 after:bg-kombat-red after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 bg-kombat-red hover:bg-kombat-red-light text-kombat-white font-display font-semibold uppercase tracking-wider text-sm px-6 py-2.5 rounded-sm transition-all hover:scale-105 hover:shadow-lg hover:shadow-kombat-red/40"
        >
          Matricule-se
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-kombat-black"
          aria-label="Menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pt-4 pb-6 bg-kombat-white-soft/98 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display font-medium uppercase tracking-wider text-kombat-black/80 hover:text-kombat-red border-b border-black/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center bg-kombat-red text-kombat-white font-display font-semibold uppercase tracking-wider px-6 py-3 rounded-sm"
            >
              Matricule-se
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
