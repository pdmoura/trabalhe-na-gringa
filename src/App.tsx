import React, { useEffect, useState } from 'react';
import { 
  Globe2, 
  DollarSign, 
  Laptop, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin,
  TrendingUp,
  Award,
  Zap,
  ChevronRight,
  MessageSquare,
  Users,
  FileText,
  Heart,
  MessageCircle,
  Share2,
  ChevronDown,
  X,
  Circle
} from 'lucide-react';

import dolarRealImg from './assets/dolar-real.webp';
import mockupGringaImg from './assets/mockup-gringa.webp';
import garantiaImg from './assets/garantia.webp';
import secureCheckoutImg from './assets/seguro.png';

declare global {
  interface Window {
    gtag: any;
  }
}

function App() {
  const CHECKOUT_LINK = "#";
  const [isVisible, setIsVisible] = useState(false);
  const [openBonus, setOpenBonus] = useState<number | null>(null);
  const [showStickyCta, setShowStickyCta] = useState(false);

  const handleCheckoutClick = (sectionName: string) => {
    if (window.gtag) {
      window.gtag('event', 'click_checkout', { section: sectionName });
    }
    window.location.href = CHECKOUT_LINK;
  };

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // Show sticky CTA only after scrolling past 80% of the viewport (Hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NextArrow = ({ targetId }: { targetId: string }) => (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30">
      <a href={`#${targetId}`} className="text-[#00C853] hover:text-[#00E65F] transition-colors" aria-label="Próxima seção">
        <ChevronDown className="w-10 h-10 animate-bounce" />
      </a>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0B1220] font-sans text-slate-200 selection:bg-[#00C853]/30 selection:text-white overflow-hidden">
      
      {/* SEÇÃO 1 - HERO */}
      <header id="hero" className="relative py-16 md:py-24 lg:min-h-screen flex items-center border-b border-white/5">
        {/* Abstract Dark Background Elements */}
        <div className="absolute inset-0 z-0 bg-[#0B1220] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#071426] via-[#0B1220] to-[#0B1220]"></div>
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content */}
            <div className={`lg:w-1/2 flex flex-col items-start transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              <h1 className="text-4xl lg:text-[3.5rem] font-bold text-white leading-[1.2] mb-6 tracking-tight">
                Aprendi inglês sozinha, consegui uma vaga em uma empresa americana e hoje <span className="text-[#00C853] drop-shadow-[0_0_15px_rgba(0,200,83,0.2)]">recebo em dólar morando no Brasil.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-light">
                Organizei todo o caminho que percorri no Guia Trabalhe na Gringa para ajudar outros brasileiros a acessarem oportunidades internacionais sem precisar emigrar.
              </p>

              <div className="flex flex-col w-full sm:w-auto gap-4">
                <a 
                  href={CHECKOUT_LINK}
                  onClick={(e) => { e.preventDefault(); handleCheckoutClick('hero'); }}
                  className="group relative px-8 py-5 bg-[#00C853] hover:bg-[#00E65F] text-[#0B1220] font-extrabold rounded-xl transition-all duration-300 text-lg flex items-center justify-center gap-3 overflow-hidden shadow-[0_0_40px_rgba(0,200,83,0.3)] hover:shadow-[0_0_60px_rgba(0,200,83,0.5)] transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    QUERO CONHECER O CAMINHO
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                </a>
                
                <p className="text-sm text-slate-500 font-medium flex items-center justify-center sm:justify-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#00C853]" />
                  Acesso imediato • Pagamento seguro
                </p>
              </div>

            </div>

            {/* Right Content - Hero Image */}
            <div className={`lg:w-1/2 relative transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              
              {/* Discrete Green Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00C853]/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
              
              <div className="relative z-10">
                {/* Main Image Mask/Container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#071426] group lg:max-h-[70vh] xl:max-h-[75vh]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent z-10"></div>
                  <img 
                    src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781677391/Captura_de_tela_2026-06-17_025014_remuw5.png" 
                    alt="Victoria Morais - História Real" 
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 opacity-95"
                  />
                </div>

                {/* Floating Elements (Story focus) */}
                <div className="absolute top-4 right-4 md:-top-6 md:-right-6 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '4s'}}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-[#00C853]/20 p-1.5 md:p-2 rounded-lg md:rounded-xl">
                      <DollarSign className="w-4 h-4 md:w-6 md:h-6 text-[#00C853]" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-wider leading-none mb-0.5 md:mb-0">Moeda Forte</p>
                      <p className="text-xs md:text-base text-white font-black leading-none md:leading-normal">Receba em USD</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-4 md:-left-16 lg:-left-20 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xl md:text-3xl leading-none">🇺🇸</span>
                    <div>
                      <p className="text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-wider leading-none mb-0.5 md:mb-0">Contratos</p>
                      <p className="text-xs md:text-base text-white font-black leading-none md:leading-normal">EUA & Global</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-6 right-4 md:bottom-10 md:-right-12 lg:-right-16 z-20 bg-white/5 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl animate-bounce" style={{animationDuration: '4.5s', animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="bg-blue-500/20 p-1.5 md:p-2 rounded-lg md:rounded-xl">
                      <Laptop className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-slate-300 font-bold uppercase tracking-wider leading-none mb-0.5 md:mb-0">Modelo</p>
                      <p className="text-xs md:text-base text-white font-black leading-none md:leading-normal">100% Remoto</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
        <NextArrow targetId="why" />
      </header>

      {/* SEÇÃO 2 - POR QUE EU CRIEI ESTE GUIA */}
      <section id="why" className="py-16 md:py-24 lg:min-h-screen flex flex-col justify-center bg-[#071426] border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Por que eu criei <span className="text-[#00C853]">este guia?</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 font-light leading-relaxed">
                <p>
                  Depois que comecei a compartilhar minha história nas redes sociais, centenas de pessoas começaram a me fazer exatamente as mesmas perguntas:
                </p>
                
                <ul className="space-y-4 text-white font-medium bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]"></div> Como você aprendeu inglês?
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]"></div> Onde encontrou sua vaga?
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]"></div> Precisa morar nos Estados Unidos?
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]"></div> Precisa ser programador?
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00C853]"></div> Como recebe em dólar?
                  </li>
                </ul>

                <p>
                  Em vez de responder uma por uma, decidi reunir tudo o que aprendi e vivi em um guia totalmente direto ao ponto.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-[#00C853]/10 blur-3xl rounded-full"></div>
              <img 
                src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781680518/Captura_de_tela_2026-06-17_041310_f6cmq2.png" 
                alt="A postagem que iniciou tudo" 
                loading="lazy"
                className="relative rounded-3xl w-full object-cover shadow-2xl border border-white/10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            
          </div>
        </div>
        <NextArrow targetId="interest" />
      </section>

      {/* SEÇÃO 3 - PROVA SOCIAL VISUAL (O INTERESSE) */}
      <section id="interest" className="py-16 md:py-24 lg:min-h-screen flex flex-col justify-center bg-[#0B1220] border-b border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              O interesse que esse assunto gerou
            </h2>
            <p className="text-xl text-slate-400 font-light">
              Quando compartilhei minha história, não esperava a repercussão que ela teria.
            </p>
          </div>

          {/* DMs e Comentários Grid */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <img src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781684362/Captura_de_tela_2026-06-17_051831_pjvo9d.png" alt="Comentário" loading="lazy" className="rounded-2xl border border-white/10 shadow-xl opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 w-full h-auto object-cover" />
            <img src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781680404/Captura_de_tela_2026-06-17_040742_tawya8.png" alt="Comentário" loading="lazy" className="rounded-2xl border border-white/10 shadow-xl opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 w-full h-auto object-cover" />
            <img src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781684458/Captura_de_tela_2026-06-17_052037_y1nyy2.png" alt="Comentário" loading="lazy" className="rounded-2xl border border-white/10 shadow-xl opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 w-full h-auto object-cover" />
            <img src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781680260/Captura_de_tela_2026-06-17_040836_cqru3n.png" alt="Comentário" loading="lazy" className="rounded-2xl border border-white/10 shadow-xl opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all duration-300 w-full h-auto object-cover" />
          </div>

          {/* Estatísticas Virais */}
          <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center space-y-2">
              <Heart className="w-8 h-8 text-[#00C853] mb-2" />
              <span className="text-3xl lg:text-4xl font-bold text-white">+11.000</span>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">Curtidas</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <MessageCircle className="w-8 h-8 text-[#00C853] mb-2" />
              <span className="text-3xl lg:text-4xl font-bold text-white">+430</span>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">Comentários</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <MessageSquare className="w-8 h-8 text-[#00C853] mb-2" />
              <span className="text-3xl lg:text-4xl font-bold text-white">Centenas</span>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">de Mensagens Privadas</span>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Share2 className="w-8 h-8 text-[#00C853] mb-2" />
              <span className="text-3xl lg:text-4xl font-bold text-white">Milhares</span>
              <span className="text-sm text-slate-400 font-medium uppercase tracking-widest">de Pessoas Querendo Aprender</span>
            </div>
          </div>
        </div>
        <NextArrow targetId="problem" />
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="py-16 md:py-24 lg:min-h-screen flex flex-col justify-center bg-slate-950 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative flex justify-center">
                <img 
                  src={dolarRealImg} 
                  alt="Dólares" 
                  loading="lazy"
                  className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Você já fez as contas de quanto o seu salário atual vale <span className="text-red-400 border-b-2 border-red-400/30">em dólar?</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p className="text-xl">
                  É frustrante. Você <span className="text-white font-semibold">estuda, faz faculdade, entrega resultados incríveis</span> e trabalha 40 horas por semana. Mas no final do mês, percebe que seu esforço muitas vezes não é recompensado financeiramente na mesma proporção.
                </p>
                <p className="text-xl leading-relaxed">
                  Durante muito tempo eu achei normal estudar, trabalhar duro e ainda sentir que meu salário <span className="text-white font-semibold">nunca acompanhava meu esforço</span>.
                  Só depois que comecei a olhar para <span className="text-[#00C853] font-bold">oportunidades internacionais</span> percebi que o problema não era minha capacidade profissional.
                  Era o <span className="text-white font-bold underline decoration-white/20 underline-offset-4">mercado onde eu estava competindo.</span>
                </p>
                <p className="text-xl">
                  O mercado brasileiro <strong className="text-red-400 font-bold">está saturado</strong>. Salários estagnados, empresas exigindo cada vez mais por cada vez menos, e aquela sensação constante de que você <span className="text-white font-bold">nunca vai ser valorizado como realmente merece.</span>
                </p>
                <div className="p-8 bg-slate-800/50 border border-slate-700/50 rounded-xl shadow-lg">
                  <p className="text-emerald-300 font-bold text-2xl leading-relaxed">
                    A verdade é que seu salário deixa de depender exclusivamente da realidade econômica brasileira. Você passa a disputar oportunidades em mercados que tradicionalmente oferecem <span className="text-white underline decoration-emerald-500 underline-offset-4">remunerações mais altas, ganhando em moeda forte.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NextArrow targetId="history" />
      </section>

      {/* SEÇÃO 5 - HISTÓRIA PESSOAL (Antes do guia) */}
      <section id="history" className="py-16 md:py-24 lg:min-h-screen flex flex-col justify-center bg-[#0B1220] border-b border-white/5 relative overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-[#00C853]/5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[2.5rem] p-8 lg:p-12 backdrop-blur-sm">
            
            <div className="lg:w-5/12 relative group">
              <div className="absolute inset-0 bg-[#00C853] rounded-3xl translate-x-3 translate-y-3 opacity-20 transition-transform duration-500"></div>
              <img 
                src="https://res.cloudinary.com/dyqyb9ri8/image/upload/v1781682143/Captura_de_tela_2026-06-17_042859_orxk4u.png" 
                alt="Victoria Morais" 
                className="relative rounded-3xl w-full object-cover shadow-2xl border border-white/10"
              />
            </div>

            <div className="lg:w-7/12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 leading-tight">
                Há alguns anos eu também achava que isso era <span className="text-[#00C853]">impossível.</span>
              </h2>
              
              <div className="space-y-5">
                {[
                  "Aprendi inglês sozinha, sem depender de cursos caros.",
                  "Nunca sai da América Latina",
                  "Nunca estudei em escola bilíngue.",
                  "Encontrei as oportunidades internacionais por mim mesma.",
                  "Fui contratada por uma empresa americana.",
                  "Hoje trabalho remotamente recebendo em dólar."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#00C853] shrink-0 mt-0.5" />
                    <span className="text-lg text-slate-300 font-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-xl font-medium text-white italic">
                  "Se eu, saindo de Fortaleza e aprendendo inglês sozinha e sem nenhuma orientação, consegui... Por que você, que é dedicado e terá um passo a passo pra te ajudar, não conseguiria?"
                </p>
              </div>
            </div>
            
          </div>
        </div>
        <NextArrow targetId="who-is-this-for" />
      </section>

      {/* SEÇÃO 5.5 - PARA QUEM É O GUIA */}
      <section id="who-is-this-for" className="py-16 lg:py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 z-0 mix-blend-overlay pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              A pergunta que mais recebo é simples: <br /> <span className="text-[#00C853]">"Mas isso funciona para mim?"</span>
            </h2>
            <p className="text-lg text-slate-400 font-medium">
              Respondo com uma pergunta: <span className="text-[#00C853]">"Você quer ganhar em dólar trabalhando de casa"</span>
            </p>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-8">
            
            {/* Box 1 - É para você */}
            <div className="bg-slate-800/60 border border-emerald-500/30 rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-[#00C853] text-[#0B1220] px-5 py-1.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(0,200,83,0.3)] whitespace-nowrap">
                É para você se:
              </div>
              <ul className="space-y-3 md:space-y-4 mt-4">
                {[
                  "Já tem experiência profissional (qualquer área)",
                  "Quer ganhar em moeda forte",
                  "Quer trabalhar remotamente",
                  "Está cansado do mercado brasileiro",
                  "Quer construir carreira internacional"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00C853] shrink-0" />
                    <span className="text-white font-medium text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2 - NÃO precisa */}
            <div className="bg-[#0B1220] border border-white/5 rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-slate-700 text-white px-5 py-1.5 rounded-full font-bold text-sm whitespace-nowrap">
                Você NÃO precisa de:
              </div>
              <ul className="space-y-3 md:space-y-4 mt-4">
                {[
                  "Ser programador",
                  "Morar fora do Brasil",
                  "Falar inglês perfeito",
                  "Ter feito intercâmbio",
                  "Ter diploma internacional"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Circle className="w-4 h-4 text-slate-500 shrink-0" strokeWidth={3} />
                    <span className="text-slate-300 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3 - NÃO é para você */}
            <div className="bg-[#0B1220] border border-red-500/10 rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl relative opacity-80">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-8 bg-red-500/10 text-red-400 px-5 py-1.5 rounded-full font-bold text-sm border border-red-500/20 whitespace-nowrap">
                Mas não é para você se:
              </div>
              <ul className="space-y-3 md:space-y-4 mt-4">
                {[
                  "Quer dinheiro rápido",
                  "Acredita que vai ganhar dinheiro sem se candidatar a vagas",
                  "Não quer passar por processos seletivos",
                  "Não quer estudar nem se preparar para entrevistas",
                  "Espera resultado sem ação"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <X className="w-5 h-5 text-red-500/70 shrink-0" strokeWidth={3} />
                    <span className="text-slate-400 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="max-w-3xl mx-auto mt-20 text-center px-4">
            <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
              Se você se identificou com isso, <span className="text-white font-bold block mt-2 md:inline md:mt-0">aqui está exatamente o que você vai aprender.</span>
            </p>
          </div>

        </div>
        <NextArrow targetId="offer" />
      </section>

      {/* SEÇÃO 6 - O GUIA E OFERTA */}
      <section id="offer" className="py-16 md:py-24 lg:min-h-screen flex flex-col justify-center bg-gradient-to-b from-[#071426] to-[#0B1220] border-b border-white/5 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center max-w-6xl mx-auto">
            
            <div className="lg:w-5/12 w-full flex justify-center mb-6 lg:mb-0">
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Back glow for Mockup */}
                <div className="absolute inset-0 bg-[#00C853]/20 blur-[80px] rounded-full z-0"></div>
                <img 
                  src={mockupGringaImg} 
                  alt="Mockup Guia Trabalhe na Gringa" 
                  loading="lazy"
                  className="relative z-10 w-full max-h-[350px] lg:max-h-none object-contain mx-auto rounded-xl drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:w-7/12 w-full">
              <div className="bg-[#071426] border border-white/10 rounded-3xl p-5 md:p-10 shadow-2xl relative">
                
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00C853] text-[#0B1220] px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg whitespace-nowrap">
                  Oferta Especial de Lançamento
                </div>

                <div className="text-center mb-6 mt-4 md:mt-0">
                  <p className="text-white font-medium text-base md:text-lg leading-snug bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-[#00C853]">Mais que um ebook</strong> isso é o passo a passo que usei pra conseguir ganhar em dólar morando no Brasil.
                  </p>
                </div>

                <h2 className="text-xl md:text-2xl font-extrabold text-white mb-5 text-center">
                  Tudo que você vai receber hoje:
                </h2>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#00C853] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-slate-300 leading-snug font-medium">
                      <strong className="text-white">E-book Completo:</strong> O caminho validado para trabalhar na gringa <span className="text-[#00C853] ml-1">(Valor inestimável)</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#00C853] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-slate-300 leading-snug font-medium">
                      <strong className="text-white">BÔNUS 1:</strong> Templates prontos para falar com recrutadores estrangeiros no LinkedIn <span className="line-through text-slate-500 ml-1 whitespace-nowrap">R$ 47,00</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#00C853] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-slate-300 leading-snug font-medium">
                      <strong className="text-white">BÔNUS 2:</strong> Checklist do currículo usado para aplicar em vagas internacionais <span className="line-through text-slate-500 ml-1 whitespace-nowrap">R$ 27,00</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#00C853] shrink-0 mt-0.5" />
                    <p className="text-sm md:text-base text-slate-300 leading-snug font-medium">
                      <strong className="text-white">BÔNUS 3:</strong> Como usar IA para praticar inglês e se preparar para entrevistas <span className="line-through text-slate-500 ml-1 whitespace-nowrap">R$ 37,00</span>
                    </p>
                  </div>
                </div>

                <div className="bg-[#0B1220] rounded-2xl p-6 lg:p-8 text-center border border-white/5 shadow-inner">
                  <p className="text-slate-400 mb-1 text-sm md:text-base">Valor total estimado de tudo que você vai receber:</p>
                  <p className="text-slate-500 mb-4 line-through text-lg font-medium">R$ 258,00</p>
                  
                  <p className="text-white font-bold text-base md:text-lg mb-5 bg-[#00C853]/10 inline-block px-4 py-1 rounded-full border border-[#00C853]/20">Mas durante o lançamento de acesso inicial:</p>
                  
                  <div className="flex flex-col items-center justify-center mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl md:text-3xl font-bold text-slate-400">R$</span>
                      <span className="text-6xl md:text-7xl font-extrabold text-[#00C853] drop-shadow-[0_0_20px_rgba(0,200,83,0.3)]">147,00</span>
                    </div>
                    <p className="text-white font-black text-xl md:text-2xl mt-1 tracking-wide uppercase">à vista</p>
                    <p className="text-slate-400 font-medium text-base md:text-lg mt-3 bg-white/5 px-4 py-1 rounded-full">ou 10x de R$ 15,41</p>
                  </div>
                  
                  <a 
                    href={CHECKOUT_LINK}
                    onClick={(e) => { e.preventDefault(); handleCheckoutClick('offer'); }}
                    className="block w-full px-4 py-5 bg-[#00C853] hover:bg-[#00E65F] text-[#0B1220] font-extrabold rounded-xl transition-all duration-300 text-lg md:text-xl transform hover:-translate-y-1 shadow-[0_0_30px_rgba(0,200,83,0.3)] hover:shadow-[0_0_50px_rgba(0,200,83,0.5)]"
                  >
                    QUERO TRABALHAR NA GRINGA
                  </a>
                  <p className="text-xs md:text-sm text-slate-400 mt-4 font-medium flex flex-wrap justify-center gap-x-3 gap-y-2">
                    <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4 text-[#00C853]"/> Compra 100% segura</span>
                    <span className="flex items-center gap-1"><Zap className="w-4 h-4 text-[#00C853]"/> Download imediato após a compra</span>
                    <span className="flex items-center gap-1"><Laptop className="w-4 h-4 text-[#00C853]"/> Acesso vitalício</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NextArrow targetId="bonus" />
      </section>

      {/* SEÇÃO 7 - BÔNUS */}
      <section id="bonus" className="flex flex-col justify-center py-16 bg-[#0B1220] border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-1/2 h-1/2 bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Acesso Premium aos Bônus</h2>
            <p className="text-lg text-slate-400 font-light">O guia é a base. O ecossistema é o que garante sua execução.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Users />, title: "Grupo Exclusivo", desc: "Networking com pessoas buscando trabalho internacional" },
              { icon: <MessageSquare />, title: "Sala de Inglês", desc: "Prática de conversação focada em entrevistas" },
              { icon: <FileText />, title: "Checklist", desc: "Passo a passo do que revisar antes de se candidatar" },
              { icon: <Globe2 />, title: "Plataformas", desc: "Sites usados para vagas internacionais além do LinkedIn" }
            ].map((bonus, i) => (
              <div 
                key={i} 
                onClick={() => setOpenBonus(openBonus === i ? null : i)}
                className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-4 md:p-6 lg:p-8 rounded-2xl hover:border-white/20 transition-all cursor-pointer md:cursor-default"
              >
                <div className="flex items-center justify-between w-full md:w-auto">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#071426] border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <div className="text-[#00C853]">{bonus.icon}</div>
                    </div>
                    <h4 className="text-lg font-bold text-white md:hidden">{bonus.title}</h4>
                  </div>
                  <div className="md:hidden">
                    <ChevronDown className={`w-5 h-5 text-[#00C853] transition-transform duration-300 ${openBonus === i ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                
                <div className={`w-full md:w-auto mt-2 md:mt-0 transition-all duration-300 overflow-hidden ${openBonus === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
                  <h4 className="hidden md:block text-xl font-bold text-white mb-2">{bonus.title}</h4>
                  <p className="text-slate-400 font-medium text-sm md:text-base leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - GARANTIA E SEGURANÇA */}
      <section id="guarantee" className="flex flex-col justify-center py-16 bg-[#071426] border-t border-white/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3 flex justify-center">
              <img 
                src={garantiaImg}
                alt="Garantia Incondicional de 7 Dias" 
                loading="lazy"
                className="w-48 h-auto drop-shadow-2xl"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left space-y-4">
              <h3 className="text-3xl font-bold text-white">Risco Zero: Garantia Incondicional de 7 Dias</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                Você tem 7 dias de garantia incondicional. Acesse o guia, leia o material e veja o passo a passo por dentro. Se decidir que o meu caminho não é para você, basta solicitar e seu investimento será 100% reembolsado.
              </p>
              
              <div className="pt-6">
                <img 
                  src={secureCheckoutImg}
                  alt="Checkout Seguro e Meios de Pagamento" 
                  loading="lazy"
                  className="w-full max-w-md mx-auto md:mx-0 opacity-90 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL */}
      <section id="cta" className="flex flex-col justify-center py-20 relative overflow-hidden">
        {/* Deep Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00C853]/10 to-[#0B1220] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 z-0 mix-blend-overlay"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              A história que eu contei no Instagram <span className="text-[#00C853]">também pode ser a sua.</span>
            </h2>
            <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
              Deixe de apenas assistir os outros mudarem de vida e venha descobrir como é ser valorizado pelo mercado internacional sem precisar sair de casa.
            </p>

            <a 
              href={CHECKOUT_LINK}
              onClick={(e) => { e.preventDefault(); handleCheckoutClick('final'); }}
              className="inline-flex px-12 py-6 bg-[#00C853] hover:bg-[#00E65F] text-[#0B1220] font-extrabold rounded-2xl transition-all duration-300 text-xl items-center justify-center shadow-[0_0_50px_rgba(0,200,83,0.3)] hover:shadow-[0_0_80px_rgba(0,200,83,0.5)] transform hover:-translate-y-1"
            >
              QUERO ACESSAR O GUIA AGORA
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-[#071426] border-t border-white/5 text-center">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="flex gap-6 mb-8">
            <a href="https://www.instagram.com/vivimoraiss/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00C853] transition-colors" aria-label="Instagram">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@vivimoraiss" className="text-slate-400 hover:text-[#00C853] transition-colors" aria-label="TikTok">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 15.68a6.34 6.34 0 006.35 6.32A6.33 6.33 0 0017.7 15.68V8.66a8.21 8.21 0 005.3 1.92V7.15a4.84 4.84 0 01-3.41-1.46z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/vivimoraiss/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#00C853] transition-colors" aria-label="LinkedIn">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          <div className="mb-8">
            <p className="text-slate-400 mb-2 font-medium">Ficou com alguma dúvida?</p>
            <a href="mailto:suporte@trabalhenagringa.com.br" className="text-[#00C853] hover:text-[#00E65F] transition-colors font-medium text-lg">
              suporte@trabalhenagringa.com.br
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-500">
            <a href="/termos" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="/privacidade" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
          </div>

          <p className="text-slate-600 text-sm font-medium">
            © {new Date().getFullYear()} Trabalhe na Gringa. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0B1220]/90 backdrop-blur border-t border-white/10 md:hidden transition-transform duration-500 ease-in-out ${showStickyCta ? 'translate-y-0' : 'translate-y-[150%]'}`}>
        <button 
          onClick={() => handleCheckoutClick('sticky_mobile')}
          className="w-full block text-center py-4 bg-[#00C853] text-[#0B1220] font-bold rounded-xl shadow-lg cursor-pointer hover:bg-[#00E65F] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,200,83,0.3)] transition-all duration-300"
        >
          QUERO ACESSO AGORA
        </button>
      </div>

    </div>
  );
}

export default App;
