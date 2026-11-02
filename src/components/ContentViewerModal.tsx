/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, PlayCircle, PauseCircle, FileText, CheckCircle2, Unlock, MessageCircle, Download, Sparkles, Volume2 } from 'lucide-react';
import { CourseFileItem } from '../data/courseData';
import { generateWhatsAppLink, SITE_CONFIG } from '../config/siteConfig';

interface ContentViewerModalProps {
  file: CourseFileItem | null;
  onClose: () => void;
  onUnlockAll: () => void;
  customWhatsAppNumber?: string;
}

export const ContentViewerModal: React.FC<ContentViewerModalProps> = ({
  file,
  onClose,
  onUnlockAll,
  customWhatsAppNumber
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [downloadNotice, setDownloadNotice] = useState(false);

  if (!file) return null;

  const handleWhatsAppDoubt = () => {
    const number = customWhatsAppNumber || SITE_CONFIG.WHATSAPP_NUMBER;
    const msg = `Olá, Ednice! Assisti à demonstração da "${file.title}" e gostaria de tirar uma dúvida.`;
    const url = generateWhatsAppLink(msg, number);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadPdf = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header do Player */}
        <div className="px-5 sm:px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between gap-3">
          <div className="min-w-0">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#7040A0] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E88DB8]" />
              Amostra Gratuita Liberada · {file.formatLabel} ({file.durationOrPages})
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4E2879] leading-snug truncate">
              {file.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#33243D]/60 hover:text-[#4E2879] hover:bg-[#E9D9F7] transition-colors shrink-0"
            aria-label="Fechar visualizador"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Conteúdo Rolável */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Se for vídeo (MP4) */}
          {file.type === 'video' ? (
            <div className="space-y-4">
              {/* Player Simulado de Alta Fidelidade com Artesanato */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#33243D] shadow-md border border-[#E9D9F7]">
                <img
                  src="/src/assets/images/hero_chinelos_bordados_1793634256282.jpg"
                  alt={file.title}
                  className={`w-full h-full object-cover transition-opacity ${
                    isPlaying ? 'opacity-85' : 'opacity-70'
                  }`}
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
                  {/* Topo do Player */}
                  <div className="flex items-center justify-between text-white text-xs">
                    <span className="bg-[#7040A0]/90 px-2.5 py-1 rounded-lg font-bold">
                      AULA PRÁTICA PASSO A PASSO
                    </span>
                    <span className="flex items-center gap-1 text-white/90">
                      <Volume2 className="w-4 h-4" />
                      Áudio com didática calma
                    </span>
                  </div>

                  {/* Centro: Botão de Reprodução */}
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-white/95 text-[#7040A0] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform"
                      aria-label={isPlaying ? 'Pausar aula' : 'Iniciar reprodução'}
                    >
                      {isPlaying ? (
                        <PauseCircle className="w-10 h-10" />
                      ) : (
                        <PlayCircle className="w-10 h-10 translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Barra de Progresso do Vídeo */}
                  <div className="space-y-1.5 text-white">
                    <div className="w-full bg-white/30 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`bg-[#E88DB8] h-full transition-all duration-300 ${
                          isPlaying ? 'w-2/3 animate-pulse' : 'w-1/4'
                        }`} 
                      />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-white/80">
                      <span>{isPlaying ? '04:12' : '01:30'}</span>
                      <span>{file.durationOrPages}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status de reprodução */}
              {isPlaying && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Reproduzindo prévia demonstrativa da aula de Ednice. Pause ou avance conforme seu ritmo.</span>
                </div>
              )}
            </div>
          ) : (
            /* Se for PDF */
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF9FC] to-[#FBE7F1] border border-[#E9D9F7] text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-white text-[#E88DB8] mx-auto flex items-center justify-center shadow-sm border border-[#E9D9F7]">
                  <FileText className="w-7 h-7 text-[#7040A0]" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#4E2879]">
                    {file.title}
                  </h4>
                  <p className="text-xs text-[#33243D]/70 mt-1">
                    Documento de apoio didático preparado para celular ou impressão em tamanho A4.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#7040A0] hover:bg-[#4E2879] text-white text-xs sm:text-sm font-bold shadow-sm transition-all"
                  >
                    <Download className="w-4 h-4" />
                    <span>Baixar Guia em PDF ({file.durationOrPages})</span>
                  </button>
                </div>

                {downloadNotice && (
                  <p className="text-xs text-emerald-700 font-semibold animate-in fade-in">
                    ✓ Arquivo PDF de demonstração pronto para salvar!
                  </p>
                )}
              </div>
            </div>
          )}

          {/* O que é ensinado neste material */}
          {file.previewData?.steps && (
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7040A0]">
                O que você aprende neste conteúdo:
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#33243D]">
                {file.previewData.steps.map((st, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#7040A0] shrink-0 mt-0.5" />
                    <span className="leading-snug">{st}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Dica da Ednice */}
          {file.previewData?.tips && (
            <div className="p-4 rounded-2xl bg-[#FFF9FC] border border-[#E9D9F7] space-y-1">
              <span className="text-xs font-bold text-[#4E2879] block">
                💡 Dica com carinho da Ednice:
              </span>
              <p className="text-xs sm:text-sm text-[#33243D] italic leading-relaxed">
                "{file.previewData.tips}"
              </p>
            </div>
          )}

        </div>

        {/* Rodapé com Ações */}
        <div className="px-5 sm:px-6 py-4 bg-[#FFF9FC] border-t border-[#E9D9F7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleWhatsAppDoubt}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#4E2879] bg-[#E9D9F7] hover:bg-[#d8c0ee] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#7040A0]" />
            <span>Tirar dúvida com a Ednice</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onUnlockAll();
            }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] shadow-sm transition-all"
          >
            <Unlock className="w-4 h-4" />
            <span>Desbloquear os outros módulos</span>
          </button>
        </div>

      </div>
    </div>
  );
};
