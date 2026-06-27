import { ArrowRight, Play, Users, Calendar, Dumbbell } from 'lucide-react';

const stats = [
  { icon: Users, value: '80+', label: 'Alunos' },
  { icon: Calendar, value: '5+', label: 'Anos CK' },
  { icon: Dumbbell, value: '2', label: 'Anos TETRIS' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-kombat-white">
      {/* Background layers */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-br from-kombat-white via-kombat-white/80 to-kombat-red-dark/15" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-kombat-red/15 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-kombat-red-dark/15 rounded-full blur-[120px]" />

      {/* Diagonal red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-kombat-red/10 to-transparent skew-x-6 origin-top-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-kombat-red/10 border border-kombat-red/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-kombat-red rounded-full animate-pulse" />
              <span className="font-body text-xs uppercase tracking-[0.2em] text-kombat-red-light">
                Jiu-Jitsu • MMA • Self-Defense
              </span>
            </div>

            <h1 className="font-display font-bold uppercase leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
              <span className="block text-kombat-black">Supere</span>
              <span className="block text-kombat-red">Seus</span>
              <span className="block text-stroke">Limites</span>
            </h1>

            <p className="font-body text-kombat-black/70 text-lg max-w-md mb-8 leading-relaxed">
              Na Corporação KOmbat, transformamos corpo e mente através do
              Jiu-Jitsu. Junte-se a uma família de guerreiros.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contato"
                className="group inline-flex items-center gap-2 bg-kombat-red hover:bg-kombat-red-light text-kombat-white font-display font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all hover:scale-105 hover:shadow-xl hover:shadow-kombat-red/40"
              >
                Comece Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="group inline-flex items-center gap-2 border-2 border-kombat-black/20 hover:border-kombat-red text-kombat-black font-display font-semibold uppercase tracking-wider px-8 py-4 rounded-sm transition-all"
              >
                <Play className="w-5 h-5 text-kombat-red group-hover:scale-110 transition-transform" />
                Conheça
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3">
                  <s.icon className="w-8 h-8 text-kombat-red" strokeWidth={1.5} />
                  <div>
                    <div className="font-display font-bold text-2xl text-kombat-black">{s.value}</div>
                    <div className="font-body text-xs uppercase tracking-wider text-kombat-black/50">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative">
              {/* Main card */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden border-2 border-kombat-red/30 shadow-2xl shadow-kombat-red/20">
                <img
                  src="/image copy.png"
                  alt="Lutador de Jiu-Jitsu"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kombat-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display font-bold uppercase text-2xl text-kombat-white">
                    A Arte Suave
                  </div>
                  <div className="font-body text-sm text-kombat-red-light uppercase tracking-wider">
                    Força • Técnica • Disciplina
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -left-6 bg-kombat-red text-kombat-white px-6 py-4 rounded-sm shadow-xl animate-float">
                <div className="font-display font-bold text-3xl leading-none">K</div>
                <div className="font-body text-[10px] uppercase tracking-widest">Kombat</div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-6 -right-6 bg-kombat-white-soft border border-kombat-red/30 px-6 py-4 rounded-sm shadow-xl">
                <div className="font-display font-bold text-3xl text-kombat-red">+80</div>
                <div className="font-body text-xs uppercase tracking-wider text-kombat-black/60">
                  Alunos ativos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-kombat-black/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-kombat-red rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
