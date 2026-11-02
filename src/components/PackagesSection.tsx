/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PACKAGES, PackageOffer, SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';
import { PackageCard } from './PackageCard';
import { WhatsAppPendingModal } from './WhatsAppPendingModal';

interface PackagesSectionProps {
  customWhatsAppNumber?: string;
  onSaveWhatsAppNumber?: (num: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  customWhatsAppNumber,
  onSaveWhatsAppNumber
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageOffer>(PACKAGES[1]);

  const activeNumber = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;

  const handleSelectPackage = (pkg: PackageOffer) => {
    setSelectedPackage(pkg);

    if (activeNumber && activeNumber.trim().length >= 10) {
      const url = generateWhatsAppLink(pkg.whatsappMessage, activeNumber);
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section id="pacotes" className="py-16 lg:py-24 bg-[#FFF9FC] border-t border-[#E9D9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Título da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-bold text-[#7040A0] uppercase tracking-wider block">
            Escolha seu pacote de acesso
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4E2879] tracking-tight">
            Três opções simples para você aprender e produzir
          </h2>
          <p className="text-base sm:text-lg text-[#33243D] leading-relaxed">
            Seja para aprender por terapia ou para buscar uma renda extra, escolha a opção ideal para você.
          </p>
        </div>

        {/* Grid dos Três Pacotes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={handleSelectPackage}
            />
          ))}
        </div>

        {/* Aviso de Transparência */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7] text-center max-w-2xl mx-auto space-y-1">
          <p className="text-xs sm:text-sm text-[#33243D]">
            <strong className="text-[#4E2879]">Sem checkout automático ou cobranças surpresa:</strong> você conversa com a equipe da Ednice pelo WhatsApp, tira dúvidas e só faz o Pix após confirmar o material desejado.
          </p>
        </div>

      </div>

      {/* Modal de WhatsApp Pendente / Testador */}
      <WhatsAppPendingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={selectedPackage.whatsappMessage}
        packageName={selectedPackage.name}
        onSaveNumber={onSaveWhatsAppNumber}
      />
    </section>
  );
};
