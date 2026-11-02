/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Card Principal de Boas-Vindas: WelcomeCard
 * Tipografia Poppins moderna e arredondada, sem fontes serifadas.
 * Título com quebra natural de linha (22 a 24px no celular), coração 💗 visível,
 * e botão de ação confortável (15-16px, min 48px de altura).
 */

import React from 'react';
import { Gift, Unlock, Sparkles } from 'lucide-react';

interface WelcomeCardProps {
  onUnlockClick: () => void;
}

export const WelcomeCard: React.FC<WelcomeCardProps> = ({ onUnlockClick }) => {
  return (
    <section className="w-full px-3 sm:px-6 py-2.5 sm:py-4 box-border">
      <div className="w-full max-w-4xl mx-auto box-border">
        <div className="relative overflow-hidden rounded-[22px] sm:rounded-3xl bg-gradient-to-br from-[#FBE7F1] via-[#FFF9FC] to-[#F5EDFC] border border-[#E5D4F2] p-4 sm:p-6 shadow-xs box-border">
          
          {/* Elementos decorativos sutis */}
          <div 
            className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-[#E88DB8]/15 blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute bottom-0 left-0 -ml-12 -mb-12 w-48 h-48 rounded-full bg-[#7040A0]/10 blur-2xl pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 space-y-3 sm:space-y-3.5">
            
            {/* Selo Superior com espaçamento adequado */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#E88DB8]/40 text-[#4E2879] text-[12px] sm:text-[13px] font-semibold uppercase tracking-wider shadow-xs">
                <Gift className="w-4 h-4 text-[#E88DB8] shrink-0" />
                <span>🎁 SUA AMOSTRA GRÁTIS</span>
              </div>
            </div>

            {/* Título Principal em Poppins (22 a 24px no celular, 28px no desktop) */}
            <h2 className="text-[22px] sm:text-[28px] font-bold text-[#4E2879] tracking-tight leading-snug break-words">
              Olá, seja muito bem-vinda! 💗
            </h2>

            {/* Texto Explicativo em 15px */}
            <p className="text-[14px] sm:text-[15px] text-[#33243D] leading-relaxed font-normal break-words">
              Separei algumas aulas e modelos de chinelos artesanais para você conhecer meu material. Comece pelas primeiras aulas e veja como é simples acompanhar o passo a passo.
            </p>

            {/* Informação do Acesso de 12 Horas em 14px */}
            <div className="flex items-center gap-2 text-[13px] sm:text-[14px] text-[#7040A0] font-medium">
              <Sparkles className="w-4 h-4 text-[#E88DB8] shrink-0" />
              <span>Seu acesso de demonstração fica disponível por 12 horas.</span>
            </div>

            {/* Botão de Desbloqueio (100% de largura no celular, min-height 48px, texto 15-16px) */}
            <div className="pt-1 w-full">
              <button
                type="button"
                onClick={onUnlockClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 text-[15px] sm:text-[16px] font-semibold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-[0.98] rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-all min-h-[48px] text-center cursor-pointer"
              >
                <Unlock className="w-5 h-5 text-[#E9D9F7] shrink-0" />
                <span>🔓 QUERO DESBLOQUEAR TUDO</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
