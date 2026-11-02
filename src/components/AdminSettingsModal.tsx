/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Settings, Check, ExternalLink, MessageCircle, FileCode } from 'lucide-react';
import { SITE_CONFIG, PACKAGES, generateWhatsAppLink } from '../config/siteConfig';

interface AdminSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSaveNumber: (number: string) => void;
}

export const AdminSettingsModal: React.FC<AdminSettingsModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSaveNumber
}) => {
  const [inputVal, setInputVal] = useState(currentNumber || SITE_CONFIG.WHATSAPP_NUMBER);
  const [savedStatus, setSavedStatus] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputVal.replace(/\D/g, '');
    onSaveNumber(clean);
    setSavedStatus(true);
    setTimeout(() => setSavedStatus(false), 2500);
  };

  const handleTestPlan = (message: string) => {
    const url = generateWhatsAppLink(message, inputVal);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="w-5 h-5 text-[#7040A0]" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4E2879]">
              Painel de Configuração da Marca
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#33243D]/60 hover:text-[#4E2879] hover:bg-[#E9D9F7]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Corpo */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Configuração do WhatsApp */}
          <form onSubmit={handleSave} className="p-5 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7] space-y-4">
            <div className="space-y-1">
              <label htmlFor="admin-phone" className="block text-sm font-bold text-[#4E2879]">
                Número de WhatsApp para Atendimento e Vendas:
              </label>
              <p className="text-xs text-[#33243D]/80">
                Formato internacional com código do país e DDD (Exemplo no Brasil: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-[#E9D9F7]">5511999998888</code>).
              </p>
            </div>

            <div className="flex gap-2">
              <input
                id="admin-phone"
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ex: 5511999998888"
                className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-[#E9D9F7] focus:outline-none focus:ring-2 focus:ring-[#7040A0]/30 font-mono"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-[#7040A0] hover:bg-[#4E2879] text-white text-sm font-bold rounded-xl transition-colors shadow-sm"
              >
                Salvar
              </button>
            </div>

            {savedStatus && (
              <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                Número atualizado com sucesso nesta sessão!
              </p>
            )}
          </form>

          {/* Teste dos Pacotes */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7040A0]">
              Testar Redirecionamento de Cada Pacote:
            </h4>
            <div className="space-y-2">
              {PACKAGES.map((pkg) => (
                <div key={pkg.id} className="p-3.5 rounded-xl border border-[#E9D9F7] flex items-center justify-between gap-3 bg-white">
                  <div>
                    <span className="text-xs font-bold text-[#4E2879] block">
                      {pkg.name} ({pkg.priceFormatted})
                    </span>
                    <span className="text-[11px] text-[#33243D]/70 italic truncate block max-w-xs">
                      "{pkg.whatsappMessage}"
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleTestPlan(pkg.whatsappMessage)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-[#25D366] bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors shrink-0"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Testar Link
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Onde editar o código permanentemente */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
            <div className="font-bold flex items-center gap-1.5 text-slate-900">
              <FileCode className="w-4 h-4 text-[#7040A0]" />
              Personalização no Código-Fonte:
            </div>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>
                <strong>Número permanente e textos dos planos:</strong> edite em <code className="font-mono text-slate-800">/src/config/siteConfig.ts</code>.
              </li>
              <li>
                <strong>Fotos e nomes dos chinelos:</strong> edite em <code className="font-mono text-slate-800">/src/data/chinelosData.ts</code>.
              </li>
              <li>
                <strong>Aulas e módulos da plataforma:</strong> edite em <code className="font-mono text-slate-800">/src/data/courseData.ts</code>.
              </li>
            </ul>
          </div>

        </div>

        {/* Rodapé */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-t border-[#E9D9F7] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-semibold text-[#4E2879] hover:bg-[#E9D9F7]/50 rounded-xl transition-colors"
          >
            Concluir
          </button>
        </div>

      </div>
    </div>
  );
};
