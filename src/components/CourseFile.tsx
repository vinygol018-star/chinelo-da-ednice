/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Componente de Aula/Arquivo — CourseFile
 * Tipografia Poppins moderna, tamanhos legíveis (14 a 16px), sem microtextos.
 * Arquivos reais possuem botão "ABRIR" (15px font-semibold).
 * Placeholders são discretos com "Conteúdo a cadastrar" e etiqueta "Em breve".
 */

import React from 'react';
import { PlayCircle, FileText, Lock, Eye, Clock } from 'lucide-react';
import { CourseFileItem } from '../data/courseData';

interface CourseFileProps {
  file: CourseFileItem;
  isDemoActive: boolean;
  onOpen: (file: CourseFileItem) => void;
  onUnlock: () => void;
}

export const CourseFile: React.FC<CourseFileProps> = ({
  file,
  isDemoActive,
  onOpen,
  onUnlock
}) => {
  // Se for placeholder (conteúdo a cadastrar) - versão compacta
  if (file.isPlaceholder) {
    return (
      <div 
        className="w-full px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl border border-dashed border-[#E5D4F2] bg-white/70 flex items-center justify-between gap-2.5 box-border"
      >
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <div className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-lg flex items-center justify-center shrink-0 bg-[#F5EDFC] text-[#7040A0]/50 border border-[#E5D4F2]/70">
            {file.type === 'video' ? (
              <PlayCircle className="w-4 h-4 text-[#7040A0]/50" />
            ) : (
              <FileText className="w-4 h-4 text-[#E88DB8]/60" />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
              <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600">
                {file.formatLabel}
              </span>
              <span className="text-[12px] font-medium text-neutral-500">
                A cadastrar
              </span>
            </div>

            <h4 className="text-[13px] sm:text-[14px] font-medium text-neutral-600 leading-tight break-words">
              {file.title}
            </h4>
          </div>
        </div>

        <div className="shrink-0 pl-1">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[12px] font-medium text-neutral-500 bg-neutral-100">
            <Clock className="w-3 h-3 text-neutral-400" />
            <span>Em breve</span>
          </span>
        </div>
      </div>
    );
  }

  // Arquivos reais - versão compacta
  const isAccessible = file.isFreeInDemo && isDemoActive;

  const handleClick = () => {
    if (isAccessible) {
      onOpen(file);
    } else {
      onUnlock();
    }
  };

  return (
    <div 
      onClick={handleClick}
      className={`group w-full px-3 py-2.5 sm:px-3.5 sm:py-2.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-2.5 sm:gap-3 cursor-pointer box-border ${
        isAccessible
          ? 'bg-white hover:bg-[#FFF9FC] border-[#E5D4F2] hover:border-[#7040A0]/50 shadow-2xs'
          : 'bg-[#FFF9FC]/90 hover:bg-[#FBE7F1]/50 border-[#E5D4F2]'
      }`}
    >
      {/* Ícone e Nome do Arquivo */}
      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
        
        {/* Ícone do Formato Compacto */}
        <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 ${
          file.type === 'video'
            ? 'bg-[#EBDCF7] text-[#7040A0]'
            : 'bg-[#FBE7F1] text-[#E88DB8]'
        }`}>
          {file.type === 'video' ? (
            <PlayCircle className="w-4.5 h-4.5 text-[#7040A0]" />
          ) : (
            <FileText className="w-4.5 h-4.5 text-[#E88DB8]" />
          )}
        </div>

        {/* Informações Textuais em Poppins legível */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
            {/* Tag do formato (MP4 / PDF) */}
            <span className={`text-[11px] font-semibold px-1.5 py-0.5 rounded tracking-wide ${
              file.formatLabel === 'MP4'
                ? 'bg-[#EBDCF7] text-[#4E2879]'
                : 'bg-[#FBE7F1] text-[#7040A0]'
            }`}>
              {file.formatLabel}
            </span>

            {/* Duração ou Páginas */}
            {file.durationOrPages && (
              <span className="text-[12px] text-[#796A86] font-medium">
                {file.durationOrPages}
              </span>
            )}

            {/* Indicador de Grátis por 12h */}
            {file.isFreeInDemo && isDemoActive && (
              <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-1.5 py-0.5 rounded-full">
                Liberado
              </span>
            )}
          </div>

          <h4 className="text-[13.5px] sm:text-[14.5px] font-semibold text-[#33243D] group-hover:text-[#7040A0] transition-colors leading-snug break-words">
            {file.title}
          </h4>

          {file.summary && (
            <p className="text-[12px] text-[#796A86] mt-0.5 line-clamp-1 hidden md:block">
              {file.summary}
            </p>
          )}
        </div>
      </div>

      {/* Botão de Ação ABRIR (quando real) / DESBLOQUEAR */}
      <div className="shrink-0 pl-1">
        {isAccessible ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(file);
            }}
            className="inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 py-1.5 text-[12px] sm:text-[13px] font-semibold rounded-lg text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-95 transition-all shadow-2xs min-h-[34px] sm:min-h-[36px] whitespace-nowrap cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-white" />
            <span>ABRIR</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onUnlock();
            }}
            className="inline-flex items-center justify-center gap-1 px-2.5 sm:px-3 py-1.5 text-[12px] sm:text-[13px] font-semibold rounded-lg text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-95 transition-all shadow-2xs min-h-[34px] sm:min-h-[36px] whitespace-nowrap cursor-pointer"
          >
            <Lock className="w-3 h-3 text-white" />
            <span>LIBERAR</span>
          </button>
        )}
      </div>

    </div>
  );
};
