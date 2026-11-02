/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Heart, Sparkles, Check } from 'lucide-react';

export const AboutEdnice: React.FC = () => {
  return (
    <section id="sobre" className="py-8 sm:py-16 bg-[#FFF9FC] border-t border-[#E9D9F7] w-full box-border">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-6 w-full">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Foto de Ednice */}
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-xs sm:max-w-sm">
              {/* Moldura artesanal suave */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#7040A0]/20 to-[#E88DB8]/20 blur-sm transform rotate-1" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-white aspect-square">
                <img
                  src="/src/assets/images/ednice_artesa_retrato_1793634258803.jpg"
                  alt="Ednice, artesã e criadora do curso Chinelos da Ednice"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-3 text-center">
                <span className="font-serif text-lg font-bold text-[#4E2879] block">
                  Ednice, 55 anos
                </span>
                <span className="text-xs text-[#7040A0] font-medium">
                  Artesã e Produtora dos Chinelos da Ednice
                </span>
              </div>
            </div>
          </div>

          {/* Texto Biográfico Acolhedor */}
          <div className="md:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9D9F7] text-[#4E2879] text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-[#E88DB8] fill-[#E88DB8]" />
              Uma História Real
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4E2879] tracking-tight">
              Conheça a Ednice
            </h2>

            {/* Texto solicitado com exatidão */}
            <div className="p-6 rounded-2xl bg-white border border-[#E9D9F7] shadow-sm relative">
              <span className="text-4xl font-serif text-[#E9D9F7] absolute top-2 left-4 select-none leading-none">
                “
              </span>
              <p className="text-base sm:text-lg text-[#33243D] leading-relaxed pt-2">
                Meu nome é Ednice, tenho 55 anos. Trabalhei durante muitos anos de carteira assinada e sei como é chegar ao fim do mês precisando de um dinheiro extra. Aprendi a produzir chinelos artesanais com uma amiga e, com o tempo, fui aperfeiçoando minhas técnicas e organizando tudo que aprendi para ensinar outras mulheres.
              </p>
            </div>

            {/* Princípios de Ensino */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#33243D] leading-relaxed">
                  <strong className="text-[#4E2879]">Didática paciente:</strong> Cada passo é gravado bem de perto, sem pressa e sem termos difíceis.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#33243D] leading-relaxed">
                  <strong className="text-[#4E2879]">Artesanato acessível:</strong> Materiais simples de encontrar e que não exigem máquinas caras.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm text-[#33243D] leading-relaxed">
                  <strong className="text-[#4E2879]">Apoio pelo WhatsApp:</strong> Você não fica desamparada se tiver dúvida em algum ponto do bordado.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
