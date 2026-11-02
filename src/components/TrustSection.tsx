/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, MessageCircle, CheckCircle } from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';

interface TrustSectionProps {
  customWhatsAppNumber?: string;
}

export const TrustSection: React.FC<TrustSectionProps> = ({ customWhatsAppNumber }) => {
  const handleOpenWhatsApp = () => {
    const number = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;
    const url = generateWhatsAppLink('Olá, Ednice! Gostaria de conhecer uma prévia do material antes de realizar o pagamento.', number);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-8 sm:py-12 bg-white border-t border-[#E9D9F7] w-full box-border">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-6 w-full">
        
        <div className="rounded-2xl sm:rounded-3xl bg-[#FFF9FC] border border-[#E9D9F7] p-4 sm:p-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 pb-5 border-b border-[#E9D9F7]">
            <div className="w-12 h-12 rounded-xl bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shrink-0">
              <ShieldCheck className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#7040A0] block">
                Transparência e Respeito com Você
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4E2879] mt-0.5 break-words">
                Conheça o material antes de pagar
              </h2>
              <p className="text-xs sm:text-sm text-[#33243D] mt-1 leading-relaxed break-words">
                Sabemos o valor do seu dinheiro e da sua confiança. No nosso atendimento pelo WhatsApp, você pode tirar dúvidas e conferir a apresentação do conteúdo antes de realizar o Pix.
              </p>
            </div>
          </div>

          {/* Pontos Claros de Transparência */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-5">
            
            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E9D9F7] flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#7040A0] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[#4E2879] block">
                  Produto 100% Digital
                </strong>
                <p className="text-[11px] sm:text-xs text-[#33243D]/80 mt-0.5 leading-relaxed">
                  As aulas e apostilas são acessadas por celular ou computador. Você pode assistir quando quiser.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E9D9F7] flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#7040A0] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[#4E2879] block">
                  Chinelos Físicos Não Inclusos
                </strong>
                <p className="text-[11px] sm:text-xs text-[#33243D]/80 mt-0.5 leading-relaxed">
                  Ensinamos o passo a passo completo para você mesma confeccionar seus pares na sua casa.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E9D9F7] flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#7040A0] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[#4E2879] block">
                  Materiais Adquiridos Separadamente
                </strong>
                <p className="text-[11px] sm:text-xs text-[#33243D]/80 mt-0.5 leading-relaxed">
                  Pérolas, agulhas e fios de náilon são facilmente encontrados em armarinhos e lojas da sua cidade.
                </p>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-xl bg-white border border-[#E9D9F7] flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-[#7040A0] shrink-0 mt-0.5" />
              <div>
                <strong className="text-xs sm:text-sm font-bold text-[#4E2879] block">
                  Orientação Segura no WhatsApp
                </strong>
                <p className="text-[11px] sm:text-xs text-[#33243D]/80 mt-0.5 leading-relaxed">
                  A chave Pix e as opções de pacotes são enviadas com toda calma e orientação no atendimento humano.
                </p>
              </div>
            </div>

          </div>

          {/* CTA de Atendimento */}
          <div className="mt-5 pt-4 border-t border-[#E9D9F7] flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-[#33243D] text-center sm:text-left">
              Ficou com alguma dúvida sobre o funcionamento das aulas?
            </p>
            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#4E2879] bg-[#E9D9F7] hover:bg-[#d8c0ee] rounded-xl transition-all shrink-0 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 text-[#7040A0]" />
              Falar com a equipe no WhatsApp
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
