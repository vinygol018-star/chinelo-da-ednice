/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faqData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';

interface FaqSectionProps {
  customWhatsAppNumber?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ customWhatsAppNumber }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleWhatsAppHelp = () => {
    const number = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;
    const url = generateWhatsAppLink('Olá, Ednice! Li as perguntas frequentes do site e ainda fiquei com uma dúvida.', number);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="duvidas" className="py-8 sm:py-16 bg-white border-t border-[#E9D9F7] w-full box-border">
      <div className="max-w-4xl mx-auto px-2.5 sm:px-6 w-full">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E9D9F7] text-[#4E2879] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4E2879] tracking-tight">
            Perguntas mais frequentes
          </h2>
          <p className="text-base sm:text-lg text-[#33243D] leading-relaxed">
            Respostas diretas e sem enrolação para as dúvidas mais comuns de quem está chegando agora.
          </p>
        </div>

        {/* Lista de Acordeões Expansíveis */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#E9D9F7] bg-[#FFF9FC] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FBE7F1]/30 transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#4E2879] leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#7040A0] text-white' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#33243D] leading-relaxed border-t border-[#E9D9F7]/60 bg-white">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Caixa de Apoio WhatsApp */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7] text-center space-y-3">
          <p className="text-sm sm:text-base text-[#33243D]">
            Sua dúvida não estava na lista? Não se preocupe!
          </p>
          <button
            type="button"
            onClick={handleWhatsAppHelp}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#4E2879] bg-[#E9D9F7] hover:bg-[#d8c0ee] rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#7040A0]" />
            Perguntar diretamente para a Ednice no WhatsApp
          </button>
        </div>

      </div>
    </section>
  );
};
