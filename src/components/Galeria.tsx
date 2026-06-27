import { Quote } from 'lucide-react';

const depoimentos = [
  {
    name: 'Allan Silva',
    role: 'Aluno há 5 anos',
    text: 'Lugar excelente, mudou minha vida com pessoas incríveis. Já são 5 anos com esse time!',
    img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Barbareth R.',
    role: 'Aluna',
    text: 'A Corporação Kombat é um ambiente limpo, organizado e muito amistoso. Para aqueles que procuram um excelente lugar de treino para si e/ou filhos, este é o lugar certo, pois os professores são dedicados e muito preocupados com seus alunos.',
    img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Aline Aparecida',
    role: 'Aluna',
    text: 'Deixo registrado meus parabéns a todos envolvidos, pois me senti acolhida e muito bem recepcionada. Recomendo muito, mudou a vida da minha família, pois é uma nova família fora da sua casa. Acolhimento super ótimo tanto para as crianças quanto para os adultos também. Precisamos de um espaço assim.',
    img: 'https://images.pexels.com/photos/220457/pexels-photo-220457.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="relative py-24 bg-kombat-white overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-body text-sm uppercase tracking-[0.3em] text-kombat-red font-semibold">
            Depoimentos
          </span>
          <h2 className="font-display font-bold uppercase text-4xl lg:text-5xl text-kombat-black mt-3 mb-4">
            Nossos <span className="text-kombat-red">guerreiros</span>
          </h2>
          <p className="font-body text-kombat-black/60 text-lg max-w-2xl mx-auto">
            Histórias reais de transformação dentro e fora do tatame.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {depoimentos.map((d) => (
            <div
              key={d.name}
              className="group relative bg-kombat-white-soft border border-black/5 hover:border-kombat-red/40 rounded-sm p-8 transition-all duration-300 hover:-translate-y-2 shadow-sm"
            >
              <Quote className="w-10 h-10 text-kombat-red/30 mb-4" />
              <p className="font-body text-kombat-black/80 leading-relaxed mb-6 italic">
                "{d.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-kombat-red/40"
                />
                <div>
                  <div className="font-display font-bold uppercase text-kombat-black">
                    {d.name}
                  </div>
                  <div className="font-body text-xs uppercase tracking-wider text-kombat-red">
                    {d.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
