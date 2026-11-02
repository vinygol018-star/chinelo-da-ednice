/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, PlayCircle, FileText, CheckCircle2, Lock, MessageCircle } from 'lucide-react';
import { CourseModule } from '../data/modulesData';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';

interface ModuleDetailModalProps {
  module: CourseModule | null;
  onClose: () => void;
  onGoToPackages: () => void;
}

export const ModuleDetailModal: React.FC<ModuleDetailModalProps> = ({
  module,
  onClose,
  onGoToPackages
}) => {
  if (!module) return null;

  const handleWhatsAppContact = () => {
    const message = `Olá, Ednice! Gostaria de saber mais sobre as aulas do ${module.title}.`;
    const url = generateWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="module-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Cabeçalho do Modal */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-[#7040A0] uppercase tracking-wide">
              {module.badge} · Conteúdo do Curso
            </span>
            <h3 id="module-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#4E2879]">
              {module.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#33243D]/80">
              {module.subtitle}
            </p>
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
          
          {/* Banner do Módulo com Foto Real */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/7] border border-[#E9D9F7]">
            <img
              src={module.coverImage}
              alt={module.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
              <div className="text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#E9D9F7] block">
                  Prévia da Sala de Aula Digital
                </span>
                <span className="text-base font-serif font-bold">
                  {module.lessons.length} aulas e materiais preparados
                </span>
              </div>
            </div>
          </div>

          {/* Descrição Didática */}
          <p className="text-sm sm:text-base text-[#33243D] leading-relaxed">
            {module.description}
          </p>

          {/* Lista de Aulas e Materiais */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7040A0]">
              Grade de Aulas deste Módulo:
            </h4>

            <div className="divide-y divide-[#E9D9F7]/70 rounded-2xl border border-[#E9D9F7] overflow-hidden bg-[#FFF9FC]">
              {module.lessons.map((lesson, idx) => (
                <div key={lesson.id} className="p-4 flex items-start gap-3.5 hover:bg-white transition-colors">
                  <div className="mt-0.5 text-[#7040A0]">
                    {lesson.type === 'video' ? (
                      <PlayCircle className="w-5 h-5 text-[#7040A0]" />
                    ) : (
                      <FileText className="w-5 h-5 text-[#E88DB8]" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="text-sm font-bold text-[#4E2879]">
                        Aula {idx + 1}: {lesson.title}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-[#E9D9F7] text-[#4E2879]">
                        {lesson.durationLabel}
                      </span>
                    </div>
                    <p className="text-xs text-[#33243D]/80 mt-1 leading-relaxed">
                      {lesson.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aviso Honesto sobre Acesso Digital */}
          <div className="p-4 rounded-2xl bg-[#FBE7F1]/60 border border-[#E88DB8]/40 flex items-start gap-3 text-xs sm:text-sm text-[#33243D]">
            <Lock className="w-5 h-5 text-[#7040A0] shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold text-[#4E2879] block mb-0.5">
                Acesso digital imediato pelo WhatsApp
              </strong>
              Ao escolher um dos nossos pacotes, você recebe o link completo com todas essas videoaulas e arquivos para assistir quantas vezes desejar no celular.
            </div>
          </div>

        </div>

        {/* Rodapé do Modal */}
        <div className="p-4 sm:p-6 bg-[#FFF9FC] border-t border-[#E9D9F7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleWhatsAppContact}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-[#4E2879] bg-[#E9D9F7] hover:bg-[#d8c0ee] rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            Tirar dúvidas deste módulo no WhatsApp
          </button>
          
          <button
            type="button"
            onClick={() => {
              onClose();
              onGoToPackages();
            }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] rounded-xl shadow transition-all"
          >
            Escolher meu pacote de acesso
          </button>
        </div>

      </div>
    </div>
  );
};
