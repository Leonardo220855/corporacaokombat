import { Shield, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

const PHONE = '(63) 71234-8132';
const PHONE_LINK = '5563712348132';

const links = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Planos', href: '#planos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export default function Footer() {
  return (
    <footer className="relative bg-kombat-black border-t border-kombat-red/20 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-kombat-red to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Shield className="w-10 h-10 text-kombat-red" strokeWidth={2.5} />
              <div className="leading-none">
                <span className="block font-display font-bold text-2xl tracking-wider text-kombat-white">
                  CORPORAÇÃO
                </span>
                <span className="block font-display font-bold text-base tracking-[0.3em] text-kombat-red -mt-0.5">
                  KOMBAT
                </span>
              </div>
            </div>
            <p className="font-body text-kombat-white/50 leading-relaxed max-w-md mb-6">
              A academia de Jiu-Jitsu que transforma vidas através da arte suave.
              Força, técnica e disciplina em cada treino.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 bg-kombat-black-soft border border-white/10 hover:border-kombat-red hover:bg-kombat-red rounded-sm flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-kombat-white" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-kombat-black-soft border border-white/10 hover:border-kombat-red hover:bg-kombat-red rounded-sm flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-kombat-white" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold uppercase text-kombat-white mb-5 tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-kombat-white/50 hover:text-kombat-red transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold uppercase text-kombat-white mb-5 tracking-wider">
              Contato
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://wa.me/${PHONE_LINK}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-body text-sm text-kombat-white/50 hover:text-kombat-red transition-colors"
                >
                  <Phone className="w-5 h-5 text-kombat-red flex-shrink-0 mt-0.5" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@corporacaokombat.com.br"
                  className="flex items-start gap-3 font-body text-sm text-kombat-white/50 hover:text-kombat-red transition-colors"
                >
                  <Mail className="w-5 h-5 text-kombat-red flex-shrink-0 mt-0.5" />
                  contato@corporacaokombat.com.br
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-kombat-white/50">
                <MapPin className="w-5 h-5 text-kombat-red flex-shrink-0 mt-0.5" />
                Av. Brasil, 1500 — São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-sm text-kombat-white/40">
            © {new Date().getFullYear()} Corporação Kombat. Todos os direitos reservados.
          </p>
          <a
            href="#inicio"
            className="group flex items-center gap-2 font-body text-sm uppercase tracking-wider text-kombat-white/50 hover:text-kombat-red transition-colors"
          >
            Voltar ao topo
            <span className="w-8 h-8 border border-kombat-red/30 group-hover:bg-kombat-red rounded-sm flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4 group-hover:text-kombat-white transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
