/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, MessageCircle, Copy, Check, ExternalLink, Settings } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppPendingModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  packageName: string;
  onSaveNumber?: (number: string) => void;
}

export const WhatsAppPendingModal: React.FC<WhatsAppPendingModalProps> = ({
  isOpen,
  onClose,
  message,
  packageName,
  onSaveNumber
}) => {
  const [copied, setCopied] = useState(false);
  const [testNumber, setTestNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenWithNumber = (customNum: string) => {
    const clean = customNum.replace(/\D/g, '');
    if (clean.length < 10) {
      setErrorMsg('Por favor, informe o DDD + número (exemplo: 11999998888).');
      return;
    }
    setErrorMsg('');
    const fullNum = clean.startsWith('55') ? clean : `55${clean}`;
    if (onSaveNumber) {
      onSaveNumber(fullNum);
    }
    const url = `https://wa.me/${fullNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#7040A0]">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <h3 id="wa-modal-title" className="font-serif text-lg sm:text-xl font-bold text-[#4E2879]">
              Atendimento pelo WhatsApp
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#33243D]/60 hover:text-[#4E2879] hover:bg-[#E9D9F7]/50 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo */}
        <div className="p-6 space-y-5">
          <div className="p-4 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7] space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7040A0] block">
              Mensagem para o {packageName}:
            </span>
            <p className="text-sm font-medium text-[#33243D] italic bg-white p-3 rounded-xl border border-[#E9D9F7]">
              "{message}"
            </p>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7040A0] hover:text-[#4E2879] transition-colors pt-1"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Mensagem copiada para a área de transferência!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar texto da mensagem</span>
                </>
              )}
            </button>
          </div>

          {/* Configuração do WhatsApp da Ednice */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#7040A0]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#4E2879]">
                Configuração do Número de WhatsApp
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#33243D]/80 leading-relaxed">
              O número oficial de atendimento pode ser configurado no arquivo <code className="px-1.5 py-0.5 rounded bg-[#E9D9F7] font-mono text-[11px] text-[#4E2879]">siteConfig.ts</code>. Para testar o direcionamento agora, digite o número abaixo:
            </p>

            <div className="space-y-2">
              <label htmlFor="test-phone" className="block text-xs font-semibold text-[#33243D]">
                Número com DDD (exemplo: 11999998888)
              </label>
              <div className="flex gap-2">
                <input
                  id="test-phone"
                  type="tel"
                  placeholder="Ex: 11999998888"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-[#E9D9F7] focus:outline-none focus:ring-2 focus:ring-[#7040A0]/30"
                />
                <button
                  type="button"
                  onClick={() => handleOpenWithNumber(testNumber)}
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center gap-1.5 shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  Abrir WhatsApp
                </button>
              </div>
              {errorMsg && (
                <p className="text-xs text-rose-600 font-medium">{errorMsg}</p>
              )}
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-t border-[#E9D9F7] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-[#4E2879] hover:bg-[#E9D9F7]/50 rounded-xl transition-colors"
          >
            Fechar
          </button>
        </div>

      </div>
    </div>
  );
};
