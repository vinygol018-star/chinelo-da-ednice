/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Seção de Conteúdos Bloqueados: "🔒 Desbloqueie mais modelos e materiais"
 * Reúne todos os módulos e materiais que requerem um pacote pago.
 * Layout com largura máxima no mobile (padding 10-12px) e cards 100% fluidos.
 */

import React, { useState } from 'react';
import { Lock, Unlock, ChevronDown } from 'lucide-react';
import { CourseModuleCategory, COURSE_MODULES_DATA } from '../data/courseData';

interface LockedContentProps {
  modules?: CourseModuleCategory[];
  onUnlockClick: () => void;
}

export const LockedContent: React.FC<LockedContentProps> = ({
  modules,
  onUnlockClick
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Todos os módulos com conteúdos bloqueados (exclui os exclusivamente gratuitos da demo)
  const lockedModules = modules || COURSE_MODULES_DATA.filter((mod) => mod.categoryGroup !== 'comece-aqui');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full px-2.5 sm:px-6 py-4 sm:py-6 box-border">
      <div className="w-full max-w-4xl mx-auto space-y-3 sm:space-y-4">
        
        {/* Cabeçalho da Seção de Conteúdos Bloqueados */}
        <div className="w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#4E2879] to-[#7040A0] text-white p-4 sm:p-6 shadow-sm box-border">
          <div className="flex items-center gap-1.5 text-[#E88DB8] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-1">
            <Lock className="w-3.5 h-3.5 text-[#E88DB8]" />
            <span>Conteúdos dos Pacotes Pagos</span>
          </div>

          <h2 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight leading-snug break-words">
            🔒 Desbloqueie mais modelos e materiais
          </h2>

          <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed mt-1 font-normal break-words">
            Conheça os outros materiais disponíveis para aprender novos modelos e desenvolver seu artesanato.
          </p>
        </div>

        {/* Lista de Módulos Bloqueados Compacta */}
        <div className="space-y-2.5 w-full">
          {lockedModules.map((mod) => {
            const isExpanded = expandedId === mod.id;
            const fileCount = mod.items.length;

            return (
              <div
                key={mod.id}
                className="w-full rounded-xl sm:rounded-2xl border border-[#E5D4F2] bg-white shadow-2xs overflow-hidden transition-all box-border"
              >
                {/* Header do Card com Ícone de Cadeado Compacto */}
                <button
                  type="button"
                  onClick={() => toggleExpand(mod.id)}
                  aria-expanded={isExpanded}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-left flex items-center justify-between gap-3 hover:bg-[#FFF9FC] transition-colors min-h-[56px] sm:min-h-[60px] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF9FC] border border-[#E5D4F2] flex items-center justify-center text-[#7040A0] shrink-0">
                      <Lock className="w-4.5 h-4.5 text-[#7040A0]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded-full bg-[#FBE7F1] text-[#7040A0] flex items-center gap-1">
                          <Lock className="w-2.5 h-2.5" />
                          Bloqueado
                        </span>
                        <span className="text-[12px] text-[#796A86] font-medium">
                          {fileCount} {fileCount === 1 ? 'conteúdo' : 'conteúdos'}
                        </span>
                      </div>

                      <h3 className="text-[14.5px] sm:text-[16px] font-semibold text-[#4E2879] leading-snug break-words">
                        {mod.title}
                      </h3>

                      <p className="text-[12px] text-[#796A86] line-clamp-1 mt-0.5">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center text-[#7040A0] bg-[#FFF9FC] border border-[#E9D9F7] shrink-0 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180 bg-[#E9D9F7]' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Prévia do Módulo com Botão de Desbloqueio */}
                {isExpanded && (
                  <div className="px-2.5 sm:px-3.5 pb-3 pt-1.5 border-t border-[#E9D9F7]/60 space-y-2 bg-[#FFF9FC]/30">
                    <div className="space-y-1.5">
                      {mod.items.map((file) => (
                        <div
                          key={file.id}
                          onClick={onUnlockClick}
                          className="p-2 sm:p-2.5 rounded-lg border border-[#E9D9F7] bg-white hover:bg-[#FBE7F1]/40 flex items-center justify-between gap-2 cursor-pointer transition-colors"
                        >
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <Lock className="w-3.5 h-3.5 text-[#7040A0] shrink-0" />
                            <div className="min-w-0 flex-1">
                              <span className="text-xs sm:text-[13px] font-semibold text-[#4E2879] block break-words leading-tight">
                                {file.title}
                              </span>
                              <span className="text-[10px] sm:text-[11px] text-[#33243D]/60 font-medium mt-0.5 block">
                                {file.formatLabel} · {file.durationOrPages}
                              </span>
                            </div>
                          </div>

                          <span className="text-[11px] sm:text-xs font-semibold text-[#7040A0] underline shrink-0 px-2 py-0.5">
                            Liberar
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={onUnlockClick}
                      className="w-full py-2.5 px-3 rounded-lg text-xs sm:text-[13px] font-semibold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-[0.99] transition-all flex items-center justify-center gap-1.5 shadow-2xs min-h-[36px]"
                    >
                      <Unlock className="w-3.5 h-3.5" />
                      <span>Ver opções para desbloquear {mod.title}</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
