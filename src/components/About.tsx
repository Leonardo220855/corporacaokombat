import { Target, Heart, Flame, Award } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Disciplina',
    desc: 'Treinamento focado em constância e evolução contínua.',
  },
  {
    icon: Heart,
    title: 'Respeito',
    desc: 'Valores que vão além do tatame, para a vida toda.',
  },
  {
    icon: Flame,
    title: 'Superação',
    desc: 'Enfrente seus limites e vença a si mesmo todos os dias.',
  },
  {
    icon: Award,
    title: 'Excelência',
    desc: 'Técnica refinada com professores campeões e certificados.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 bg-kombat-white-soft overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-kombat-red/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-sm overflow-hidden border border-kombat-red/20">
                  <img
                    src="/images/about/files_10599246-2026-06-27T12-29-56-518Z-image.png"
                    alt="Equipe Corporação Kombat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-square rounded-sm overflow-hidden border border-kombat-red/20">
                  <img
                    src="/images/about/files_10599246-2026-06-27T12-30-41-635Z-image.png"
                    alt="Recepção Corporação Kombat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-sm overflow-hidden border border-kombat-red/20">
                  <img
                    src="/images/about/files_10599246-2026-06-27T12-30-30-668Z-image.png"
                    alt="Fachada Corporação Kombat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="aspect-[3/4] rounded-sm overflow-hidden border border-kombat-red/20">
                  <img
                    src="/images/about/files_10599246-2026-06-27T12-30-19-042Z-image.png"
                    alt="Professores Corporação Kombat"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-kombat-red px-8 py-4 rounded-sm shadow-xl">
              <div className="font-display font-bold text-4xl text-kombat-white">5+</div>
              <div className="font-body text-xs uppercase tracking-widest text-kombat-white/90">
                Anos de história
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="font-body text-sm uppercase tracking-[0.3em] text-kombat-red font-semibold">
              Quem Somos
            </span>
            <h2 className="font-display font-bold uppercase text-4xl lg:text-5xl text-kombat-black mt-3 mb-6 leading-tight">
              Mais que uma academia,
              <span className="block text-kombat-red">uma corporação.</span>
            </h2>
            <p className="font-body text-kombat-black/70 text-lg leading-relaxed mb-10">
              A Corporação Kombat (CK) nasceu da paixão pelo Jiu-Jitsu e da missão de
              formar não apenas lutadores, mas pessoas melhores. Com mais de 5 anos
              de história na equipe CK e 2 anos de parceria com a TETRIS, contamos
              com uma metodologia comprovada e professores campeões, oferecendo um
              ambiente onde cada aluno encontra seu potencial máximo.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="group bg-kombat-white border border-black/5 hover:border-kombat-red/40 rounded-sm p-5 transition-all hover:-translate-y-1 shadow-sm"
                >
                  <div className="w-12 h-12 bg-kombat-red/10 group-hover:bg-kombat-red rounded-sm flex items-center justify-center mb-4 transition-colors">
                    <v.icon className="w-6 h-6 text-kombat-red group-hover:text-kombat-white transition-colors" strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold uppercase text-lg text-kombat-black mb-1">
                    {v.title}
                  </h3>
                  <p className="font-body text-sm text-kombat-black/60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
