import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook } from 'lucide-react';

const PHONE = '(11)983718659';
const PHONE_LINK = '5511983718659';

const info = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: PHONE,
    href: `tel:${PHONE_LINK}`,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@corporacaokombat.com.br',
    href: 'mailto:contato@corporacaokombat.com.br',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: 'R. Agatino de Esparta, 878 - Jardim Horizonte Azul, São Paulo - SP',
    href: '#',
  },
  {
    icon: Clock,
    label: 'Horário',
    value: 'Seg a sex — 7h às 23h',
    href: '#',
  },
];

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${form.name}. Telefone: ${form.phone}. ${form.message}`;
    window.open(`https://wa.me/${PHONE_LINK}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="relative py-24 bg-kombat-white-soft overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-kombat-red/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-kombat-red font-semibold">
            Fale Conosco
          </span>
          <h2 className="font-display font-bold uppercase text-4xl lg:text-5xl text-kombat-black mt-3 mb-4">
            Comece sua <span className="text-kombat-red">jornada</span>
          </h2>
          <p className="font-body text-kombat-black/60 text-lg max-w-2xl mx-auto">
            Agende sua aula experimental gratuita. Estamos prontos para receber você.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <div className="space-y-5">
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center gap-5 bg-kombat-white border border-black/5 hover:border-kombat-red/40 rounded-sm p-5 transition-all hover:-translate-y-1 shadow-sm"
              >
                <div className="w-14 h-14 bg-kombat-red/10 group-hover:bg-kombat-red rounded-sm flex items-center justify-center flex-shrink-0 transition-colors">
                  <item.icon className="w-6 h-6 text-kombat-red group-hover:text-kombat-white transition-colors" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-body text-xs uppercase tracking-wider text-kombat-black/50 mb-1">
                    {item.label}
                  </div>
                  <div className="font-display font-semibold text-lg text-kombat-black">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Quick WhatsApp button */}
            <a
              href={`https://wa.me/${PHONE_LINK}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-kombat-red hover:bg-kombat-red-light text-kombat-white font-display font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-kombat-red/40"
            >
              <MessageCircle className="w-6 h-6" />
              Chamar no WhatsApp Agora
            </a>

            {/* Social */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-12 h-12 bg-kombat-white border border-black/10 hover:border-kombat-red hover:bg-kombat-red rounded-sm flex items-center justify-center transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-kombat-black hover:text-kombat-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-kombat-white border border-black/10 hover:border-kombat-red hover:bg-kombat-red rounded-sm flex items-center justify-center transition-all shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-kombat-black hover:text-kombat-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-kombat-white border border-black/5 rounded-sm p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm uppercase tracking-wider text-kombat-black/60 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full bg-kombat-white-soft border border-black/10 focus:border-kombat-red rounded-sm px-4 py-3 font-body text-kombat-black placeholder:text-black/30 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-sm uppercase tracking-wider text-kombat-black/60 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(00) 00000-0000"
                  className="w-full bg-kombat-white-soft border border-black/10 focus:border-kombat-red rounded-sm px-4 py-3 font-body text-kombat-black placeholder:text-black/30 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-sm uppercase tracking-wider text-kombat-black/60 mb-2">
                  Mensagem
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Conte-nos sobre seus objetivos..."
                  className="w-full bg-kombat-white-soft border border-black/10 focus:border-kombat-red rounded-sm px-4 py-3 font-body text-kombat-black placeholder:text-black/30 outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-kombat-red hover:bg-kombat-red-light text-kombat-white font-display font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-kombat-red/40"
              >
                {sent ? (
                  'Enviado com Sucesso!'
                ) : (
                  <>
                    Enviar via WhatsApp
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              <p className="text-center font-body text-xs text-kombat-black/40">
                Sua mensagem será aberta diretamente no WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
