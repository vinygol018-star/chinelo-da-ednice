/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Heart, CheckCircle2, ArrowDown, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToAulas = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#aulas');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToVitrine = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#vitrine');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FFF9FC] via-[#FBE7F1]/40 to-[#FFF9FC]">
      {/* Delicate floral/gradient background accents */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#E9D9F7]/50 blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#FBE7F1] blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Coluna de Texto (7 cols desktop) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Indicadores textuais limpos (Anti-slop zero-pill: clean text with typographic separators) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7040A0]">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#E88DB8]" />
                Aulas passo a passo
              </span>
              <span aria-hidden="true" className="text-[#E88DB8]">·</span>
              <span>15 modelos artesanais</span>
              <span aria-hidden="true" className="text-[#E88DB8]">·</span>
              <span>Para quem está começando</span>
            </div>

            {/* Título Principal */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#4E2879] leading-[1.18] text-balance">
              Aprenda a fazer lindos chinelos bordados sem sair de casa!
            </h1>

            {/* Subtítulo */}
            <p className="text-lg sm:text-xl text-[#33243D] leading-relaxed font-normal">
              Conheça <strong className="font-semibold text-[#4E2879]">15 modelos</strong> com pérolas, flores, laços e pedrarias, com aulas passo a passo feitas especialmente para quem está começando.
            </p>

            {/* Mensagem Complementar de Acolhimento */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E9D9F7] shadow-sm">
              <p className="text-sm sm:text-base text-[#33243D] leading-relaxed flex items-start gap-3">
                <Heart className="w-5 h-5 text-[#E88DB8] shrink-0 mt-0.5 fill-[#E88DB8]/20" />
                <span>
                  Aprenda no seu próprio ritmo e descubra como transformar o carinho do seu artesanato em uma verdadeira possibilidade de renda extra para ajudar nas despesas do mês.
                </span>
              </p>
            </div>

            {/* Botão de Ação Primária e Secundária */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleScrollToAulas}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-[0.98] rounded-2xl shadow-md hover:shadow-lg transition-all text-center"
              >
                <BookOpen className="w-5 h-5 text-[#E9D9F7]" />
                QUERO CONHECER OS MATERIAIS
              </button>

              <button
                type="button"
                onClick={handleScrollToVitrine}
                className="inline-flex items-center justify-center gap-1.5 px-6 py-4 text-sm sm:text-base font-semibold text-[#4E2879] bg-white hover:bg-[#FBE7F1] border border-[#E9D9F7] rounded-2xl transition-all text-center"
              >
                Ver fotos dos chinelos
                <ArrowDown className="w-4 h-4 text-[#7040A0]" />
              </button>
            </div>

            {/* Informações de Conforto para Usuárias 50+ */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#4E2879]/80 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7040A0]" />
                <span>Assista no celular ou computador</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7040A0]" />
                <span>Vídeos calmos e bem explicados</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#7040A0]" />
                <span>Sem prazo para terminar</span>
              </div>
            </div>

          </div>

          {/* Coluna Visual (5 cols desktop) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Moldura decorativa artesanal suave */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#7040A0]/20 via-[#E88DB8]/20 to-[#E9D9F7] blur-sm transform -rotate-1" />

              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white bg-white">
                <img
                  src="/src/assets/images/hero_chinelos_bordados_1793634256282.jpg"
                  alt="Chinelos artesanais ricamente bordados com pérolas e pedrarias feitos à mão pela Ednice"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Legenda de apoio na imagem */}
                <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E9D9F7] flex items-center justify-between gap-3">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-[#7040A0] block">
                      Feito com Amor & Dedicação
                    </span>
                    <span className="text-sm font-serif font-bold text-[#33243D]">
                      Chinelos bordados passo a passo
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#FBE7F1] text-[#4E2879]">
                    15 modelos
                  </span>
                </div>
              </div>

              {/* Card flutuante de depoimento discreto e verídico da proposta */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/90 border border-[#E9D9F7] shadow-sm text-xs text-[#33243D] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] font-bold shrink-0">
                  50+
                </div>
                <p className="leading-snug">
                  Didática pensada com carinho para mulheres que nunca pegaram numa agulha de bordar.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
