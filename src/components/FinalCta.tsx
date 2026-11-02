/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowUpRight, Heart } from 'lucide-react';

export const FinalCta: React.FC = () => {
  const handleScrollToPacotes = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#pacotes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-r from-[#4E2879] via-[#7040A0] to-[#E88DB8] text-white">
      {/* Elementos decorativos florais sutis */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#E88DB8]/20 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-white">
          <Heart className="w-3.5 h-3.5 fill-white text-white" />
          Comece Hoje Mesmo
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight max-w-2xl mx-auto">
          Seu primeiro chinelo artesanal pode começar aqui!
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
          Escolha o material ideal para você, conheça as aulas e aprenda no seu próprio ritmo, no aconchego do seu lar.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleScrollToPacotes}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 text-base sm:text-lg font-extrabold text-[#4E2879] bg-white hover:bg-[#FFF9FC] active:scale-95 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
          >
            <span>ESCOLHER MEU PACOTE</span>
            <ArrowUpRight className="w-5 h-5 text-[#7040A0]" />
          </button>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-white/85 font-medium">
          <span>✓ Aulas passo a passo</span>
          <span>✓ Moldes em PDF inclusos</span>
          <span>✓ Atendimento pessoal no WhatsApp</span>
        </div>

      </div>
    </section>
  );
};
