/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Sparkles, Check, MessageCircle, HelpCircle } from 'lucide-react';
import { ChineloModel } from '../data/chinelosData';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';

interface ModelDetailModalProps {
  model: ChineloModel | null;
  onClose: () => void;
  onSelectPackage?: () => void;
}

export const ModelDetailModal: React.FC<ModelDetailModalProps> = ({
  model,
  onClose,
  onSelectPackage
}) => {
  if (!model) return null;

  const handleWhatsAppInquiry = () => {
    const message = `Olá, Ednice! Vi no site o modelo nº ${model.number} (${model.title}) e gostaria de saber se ele é ensinado nos pacotes.`;
    const url = generateWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header do Modal */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-[#7040A0] tracking-wide uppercase">
              Modelo {model.number} de 15 · {model.categoryLabel}
            </span>
            <h3 id="modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#4E2879]">
              {model.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#33243D]/60 hover:text-[#4E2879] hover:bg-[#E9D9F7]/50 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo Rolável */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Foto Grande sem cortes artificiais */}
          <div className="rounded-2xl overflow-hidden border border-[#E9D9F7] bg-[#FFF9FC]">
            <img
              src={model.image}
              alt={model.title}
              className="w-full h-auto max-h-[360px] object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Destaque & Nível */}
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm">
            <span className="px-3 py-1 rounded-full bg-[#E9D9F7] text-[#4E2879] font-semibold">
              Nível: {model.level}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#FBE7F1] text-[#7040A0] font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#E88DB8]" />
              {model.highlight}
            </span>
          </div>

          {/* Descrição */}
          <div>
            <h4 className="text-sm font-bold text-[#4E2879] uppercase tracking-wider mb-2">
              Sobre a confecção deste modelo:
            </h4>
            <p className="text-base text-[#33243D] leading-relaxed">
              {model.description}
            </p>
          </div>

          {/* Materiais Utilizados */}
          <div className="p-4 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7]">
            <h4 className="text-sm font-bold text-[#4E2879] mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-[#7040A0]" />
              Materiais sugeridos para este par:
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#33243D]">
              {model.materials.map((mat, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E88DB8]" />
                  <span>{mat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Rodapé com Ações */}
        <div className="p-4 sm:p-6 bg-[#FFF9FC] border-t border-[#E9D9F7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] rounded-xl transition-all shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Tirar dúvida sobre este modelo no WhatsApp
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onSelectPackage) onSelectPackage();
            }}
            className="px-4 py-3 text-sm font-semibold text-[#4E2879] hover:bg-[#E9D9F7]/50 rounded-xl transition-colors text-center"
          >
            Ver os 3 pacotes disponíveis
          </button>
        </div>

      </div>
    </div>
  );
};
