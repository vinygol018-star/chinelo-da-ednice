/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Mockup Modal de Ofertas dos Pacotes — Chinelos da Ednice
 * Sobe suavemente em formato de mockup deslizante (slide-up) quando a lead clica em qualquer botão de oferta.
 * Possui um botão "X" no canto superior direito para fechar e voltar à página anterior.
 */

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { PACKAGES, PackageOffer, SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';
import { PackageCard } from './PackageCard';

interface PackagesMockupModalProps {
  isOpen: boolean;
  onClose: () => void;
  customWhatsAppNumber?: string;
}

export const PackagesMockupModal: React.FC<PackagesMockupModalProps> = ({
  isOpen,
  onClose,
  customWhatsAppNumber
}) => {
  const activeNumber = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;

  // Trava scroll do body quando o mockup está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectPackage = (pkg: PackageOffer) => {
    const url = generateWhatsAppLink(pkg.whatsappMessage, activeNumber);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="packages-mockup-title"
    >
      {/* Container do Mockup (Sobe da parte inferior no mobile / modal centralizado no desktop) */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#FFF9FC] rounded-t-3xl sm:rounded-3xl shadow-2xl border border-[#E9D9F7] max-h-[92vh] sm:max-h-[90vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300 transition-all box-border"
      >
        {/* Barra superior com 'X' no canto superior direito */}
        <div className="relative sticky top-0 z-20 bg-[#FFF9FC]/95 backdrop-blur-md px-4 sm:px-6 py-3 border-b border-[#E9D9F7]/80 flex items-center justify-between">
          {/* Alça visual no topo para mobile */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E9D9F7] rounded-full sm:hidden" />

          <div className="pt-1 sm:pt-0">
            <span className="text-[11px] sm:text-xs font-bold text-[#7040A0] uppercase tracking-wider">
              Ofertas Especiais
            </span>
          </div>

          {/* Botão X no Canto Superior Direito para Voltar */}
          <button
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#FBE7F1] text-[#4E2879] border border-[#E9D9F7] shadow-xs hover:shadow-sm active:scale-90 transition-all cursor-pointer"
            aria-label="Fechar e voltar para a página anterior"
            title="Fechar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#7040A0]" />
          </button>
        </div>

        {/* Conteúdo rolável do Mockup */}
        <div className="flex-1 overflow-y-auto px-2.5 sm:px-6 py-5 sm:py-7 space-y-6 box-border">
          
          {/* Título e Subtítulo */}
          <div className="text-center max-w-xl mx-auto space-y-1.5 px-2">
            <h2 
              id="packages-mockup-title"
              className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4E2879] tracking-tight leading-snug"
            >
              💕 Escolha seu pacote
            </h2>
            <p className="text-xs sm:text-base text-[#33243D] leading-relaxed font-normal">
              Escolha a opção ideal para aprender a fazer seus chinelos artesanais.
            </p>
          </div>

          {/* Grid dos Três Pacotes em Cards (largura 100% no celular, 3 colunas no desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch w-full pb-3">
            {PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
