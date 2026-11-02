/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, MessageCircle, Settings, ShieldCheck, Mail } from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';
import { LegalModal } from './LegalModal';

interface FooterProps {
  customWhatsAppNumber?: string;
  onOpenSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  customWhatsAppNumber,
  onOpenSettings
}) => {
  const [legalType, setLegalType] = useState<'termos' | 'privacidade' | null>(null);

  const activeNumber = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;

  const handleGeneralContact = () => {
    const url = generateWhatsAppLink(SITE_CONFIG.GENERAL_CONTACT_MESSAGE, activeNumber);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-[#33243D] text-[#FFF9FC] pt-14 pb-12 border-t border-[#4E2879]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Coluna 1: Marca & Propósito */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#4E2879] font-bold">
                E
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Chinelos da Ednice
              </span>
            </div>

            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Produto digital de ensino artesanal. Ensinamos mulheres a bordar chinelos decorados do zero e a conquistar uma renda extra com carinho e dignidade.
            </p>

            <div className="text-xs text-white/60 space-y-1">
              <p>• Produto 100% digital com videoaulas e moldes em PDF</p>
              <p>• Chinelos e materiais físicos não inclusos</p>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E88DB8] block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#comece-aqui" className="hover:text-white transition-colors">
                  Aulas de Demonstração
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Ednice
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Atendimento e Contato */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E88DB8] block">
              Canal de Atendimento
            </span>
            
            <p className="text-sm text-white/80 leading-relaxed">
              Atendimento com carinho e paciência pelo WhatsApp para tirar dúvidas antes e depois da sua inscrição.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleGeneralContact}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Falar no WhatsApp da Ednice
              </button>
            </div>

            {/* Espaço reservado para identificação comercial futura */}
            <div className="pt-2 text-[11px] text-white/50 leading-normal">
              Informações de identificação comercial e suporte estarão disponíveis no atendimento oficial.
            </div>
          </div>

        </div>

        {/* Barra Inferior de Direitos e Legais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Chinelos da Ednice. Todos os direitos reservados.</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setLegalType('termos')}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Termos de Uso
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setLegalType('privacidade')}
              className="hover:text-white underline underline-offset-2 transition-colors"
            >
              Política de Privacidade
            </button>
            
            {onOpenSettings && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={onOpenSettings}
                  className="inline-flex items-center gap-1 text-[#E88DB8] hover:text-white transition-colors"
                >
                  <Settings className="w-3.5 h-3.5" />
                  <span>Configurar WhatsApp</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Modal Legal */}
      <LegalModal
        type={legalType}
        onClose={() => setLegalType(null)}
      />
    </footer>
  );
};
