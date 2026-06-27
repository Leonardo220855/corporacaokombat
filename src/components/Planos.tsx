import { Check, Star, Baby, Users, Dumbbell } from 'lucide-react';

const plans = [
  {
    name: 'KIDS',
    icon: Baby,
    price: '60',
    period: '/mês',
    desc: 'Para crianças de 6 a 12 anos.',
    features: [
      'Jiu-Jitsu Kids completo',
      'Aulas 3x por semana',
      'Aula experimental gratuita',
      'Kimono com desconto',
      'Avaliação de progresso mensal',
    ],
    highlighted: false,
  },
  {
    name: 'ADULTO',
    icon: Users,
    price: '90',
    period: '/mês',
    desc: 'Jiu-Jitsu + Preparo Físico incluso para adultos.',
    features: [
      'Jiu-Jitsu Adulto ilimitado',
      'Preparo Físico INCLUSO',
      'Aulas todos os dias da semana',
      'Avaliação física inicial',
      'Acompanhamento de progresso',
      'Acesso a eventos e campeonatos',
    ],
    highlighted: true,
  },
];

export default function Planos() {
  return (
    <section id="planos" className="relative py-24 bg-kombat-white-soft overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-kombat-red/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-kombat-red font-semibold">
            Nossos Planos
          </span>
          <h2 className="font-display font-bold uppercase text-4xl lg:text-5xl text-kombat-black mt-3 mb-4">
            Invista em <span className="text-kombat-red">você</span>
          </h2>
          <p className="font-body text-kombat-black/60 text-lg max-w-2xl mx-auto">
            Planos simples e diretos. Sem fidelidade, sem surpresas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 max-w-4xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-sm p-8 transition-all duration-300 hover:-translate-y-2 ${
                p.highlighted
                  ? 'bg-gradient-to-b from-kombat-red/15 to-kombat-white border-2 border-kombat-red shadow-2xl shadow-kombat-red/20 lg:scale-105'
                  : 'bg-kombat-white border border-black/5 hover:border-kombat-red/30 shadow-sm'
              }`}
            >
              {p.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-kombat-red text-kombat-white px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                  <Star className="w-4 h-4 fill-kombat-white" />
                  <span className="font-display font-semibold uppercase text-xs tracking-wider">
                    Preparo Físico Incluso
                  </span>
                </div>
              )}

              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                    p.highlighted ? 'bg-kombat-red' : 'bg-kombat-red/10'
                  }`}
                >
                  <p.icon className="w-6 h-6 text-kombat-white" strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold uppercase text-2xl text-kombat-black">
                  {p.name}
                </h3>
              </div>

              <p className="font-body text-sm text-kombat-black/50 mb-6 h-10">
                {p.desc}
              </p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-display font-bold text-5xl text-kombat-black">
                  R$ {p.price}
                </span>
                <span className="font-body text-kombat-black/50">{p.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        p.highlighted ? 'bg-kombat-red' : 'bg-kombat-red/20'
                      }`}
                    >
                      <Check className="w-3 h-3 text-kombat-white" strokeWidth={3} />
                    </span>
                    <span className="font-body text-sm text-kombat-black/80">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center font-display font-semibold uppercase tracking-wider text-sm px-6 py-3.5 rounded-sm transition-all hover:scale-105 ${
                  p.highlighted
                    ? 'bg-kombat-red hover:bg-kombat-red-light text-kombat-white shadow-lg shadow-kombat-red/30'
                    : 'border-2 border-kombat-black/20 hover:border-kombat-red hover:bg-kombat-red text-kombat-white'
                }`}
              >
                Matricule-se
              </a>
            </div>
          ))}
        </div>

        {/* Bonus highlight */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 bg-kombat-white border border-kombat-red/30 rounded-sm p-6 shadow-sm">
            <div className="w-14 h-14 bg-kombat-red rounded-sm flex items-center justify-center flex-shrink-0">
              <Dumbbell className="w-7 h-7 text-kombat-white" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-display font-bold uppercase text-lg text-kombat-black">
                Preparo Físico Incluso
              </h4>
              <p className="font-body text-sm text-kombat-black/60">
                Ao assinar o plano Adulto, você tem acesso completo ao
                condicionamento físico sem custo extra. Treine Jiu-Jitsu e
                melhore seu preparo no mesmo lugar.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center font-body text-sm text-kombat-black/40 mt-10">
          Todos os planos incluem matrícula gratuita no primeiro mês.
        </p>
      </div>
    </section>
  );
}
