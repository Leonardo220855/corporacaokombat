import { Dumbbell, Users, Baby, Shield, Zap, Heart } from 'lucide-react';

const modalidades = [
  {
    icon: Dumbbell,
    title: 'Jiu-Jitsu Adulto',
    desc: 'A arte suave completa para todos os níveis. Aprenda defesa pessoal, finalizações e estratégia.',
    level: 'Iniciante ao Avançado',
  },
  {
    icon: Baby,
    title: 'Jiu-Jitsu Kids',
    desc: 'Disciplina, respeito e coordenação motora para crianças a partir de 6 anos.',
    level: '6 a 12 anos',
  },
  {
    icon: Users,
    title: 'Jiu-Jitsu Juvenil',
    desc: 'Treinamento focado no desenvolvimento de adolescentes, técnica e preparo para o futuro.',
    level: '13 a 18 anos',
  },
  {
    icon: Shield,
    title: 'Self Defense',
    desc: 'Técnicas práticas de defesa pessoal para situações reais do dia a dia.',
    level: 'Iniciante',
  },
  {
    icon: Zap,
    title: 'No-Gi / Grappling',
    desc: 'Luta de submission sem kimono, foco em agilidade e transições rápidas.',
    level: 'Intermediário',
  },
  {
    icon: Heart,
    title: 'Condicionamento Físico',
    desc: 'Treinos funcionais específicos para melhorar performance no tatame.',
    level: 'Todos os níveis',
  },
];

export default function Modalidades() {
  return (
    <section id="modalidades" className="relative py-24 bg-kombat-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-kombat-red/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-kombat-red font-semibold">
            Nossas Modalidades
          </span>
          <h2 className="font-display font-bold uppercase text-4xl lg:text-5xl text-kombat-black mt-3 mb-4">
            Escolha seu <span className="text-kombat-red">caminho</span>
          </h2>
          <p className="font-body text-kombat-black/60 text-lg max-w-2xl mx-auto">
            Oferecemos programas para todas as idades e objetivos, do iniciante
            ao competidor profissional.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modalidades.map((m, i) => (
            <div
              key={m.title}
              className="group relative bg-kombat-white-soft border border-black/5 hover:border-kombat-red/50 rounded-sm p-7 transition-all duration-300 hover:-translate-y-2 overflow-hidden shadow-sm"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-kombat-red/0 to-kombat-red/0 group-hover:from-kombat-red/5 group-hover:to-transparent transition-all duration-500" />

              {/* Number */}
              <span className="absolute top-4 right-5 font-display font-bold text-5xl text-black/5 group-hover:text-kombat-red/20 transition-colors">
                0{i + 1}
              </span>

              <div className="relative">
                <div className="w-14 h-14 bg-kombat-red/10 group-hover:bg-kombat-red rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110">
                  <m.icon className="w-7 h-7 text-kombat-red group-hover:text-kombat-white transition-colors" strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold uppercase text-xl text-kombat-black mb-2">
                  {m.title}
                </h3>
                <p className="font-body text-sm text-kombat-black/60 leading-relaxed mb-4">
                  {m.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-xs font-body uppercase tracking-wider text-kombat-red border border-kombat-red/30 rounded-full px-3 py-1">
                  {m.level}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-kombat-red group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
