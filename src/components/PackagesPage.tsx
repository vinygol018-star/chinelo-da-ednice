/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Página de Ofertas dos Pacotes: /pacotes — Escolha seu pacote
 * Layout limpo sem textos desnecessários, com botão 'X' no canto superior direito para voltar.
 */

import React from 'react';
import { X } from 'lucide-react';
import { PACKAGES, PackageOffer, SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';
import { PackageCard } from './PackageCard';

interface PackagesPageProps {
  onBackToClasses: () => void;
  customWhatsAppNumber?: string;
  onOpenSettings?: () => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({
  onBackToClasses,
  customWhatsAppNumber
}) => {
  const activeNumber = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;

  const handleSelectPackage = (pkg: PackageOffer) => {
    const url = generateWhatsAppLink(pkg.whatsappMessage, activeNumber);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FC] text-[#33243D] selection:bg-[#E9D9F7] selection:text-[#4E2879] overflow-x-hidden">
      
      {/* Barra Superior com 'X' no canto superior direito para voltar */}
      <div className="sticky top-0 z-30 bg-[#FFF9FC]/95 backdrop-blur-md border-b border-[#E9D9F7] px-4 sm:px-6 py-3 box-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <span className="text-xs sm:text-sm font-bold text-[#7040A0]">
            Chinelos da Ednice · Escolha seu pacote
          </span>

          {/* Botão X no canto superior direito */}
          <button
            type="button"
            onClick={onBackToClasses}
            className="p-2 sm:p-2.5 rounded-full bg-white hover:bg-[#FBE7F1] text-[#4E2879] border border-[#E9D9F7] shadow-xs active:scale-95 transition-all cursor-pointer"
            aria-label="Voltar para a página anterior"
            title="Fechar e voltar"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#7040A0]" />
          </button>
        </div>
      </div>

      {/* Conteúdo Principal dos Pacotes */}
      <main className="flex-1 w-full px-2.5 sm:px-6 py-6 sm:py-10 box-border">
        <div className="w-full max-w-4xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Cabeçalho */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h1 className="font-serif text-2xl sm:text-4xl font-extrabold text-[#4E2879] tracking-tight leading-snug">
              💕 Escolha seu pacote
            </h1>
            <p className="text-sm sm:text-lg text-[#33243D] leading-relaxed font-normal">
              Escolha a opção ideal para aprender a fazer seus chinelos artesanais.
            </p>
          </div>

          {/* Cards dos Três Pacotes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-6 items-stretch w-full">
            {PACKAGES.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={handleSelectPackage}
              />
            ))}
          </div>

        </div>
      </main>

    </div>
  );
};
