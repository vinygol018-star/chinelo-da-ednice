/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Componente de Card de Módulo — CourseCategory
 * Design limpo e moderno estilo plataforma de cursos:
 * [ ÍCONE ]  1 — Primeiros Passos          [ SETA ]
 *            3 arquivos
 * 
 * Fundo: #F5EDFC | Borda: #E5D4F2 | Texto: #33243D | Subtexto: #796A86
 * Altura mínima ~94px, border-radius 22px, padding interno 18-20px.
 */

import React, { useState } from 'react';
import { ChevronDown, FolderOpen, Folder } from 'lucide-react';
import { CourseModuleCategory, CourseFileItem } from '../data/courseData';
import { CourseFile } from './CourseFile';

interface CourseCategoryProps {
  category: CourseModuleCategory;
  isDemoActive: boolean;
  defaultExpanded?: boolean;
  onOpenFile: (file: CourseFileItem) => void;
  onUnlockModule: () => void;
}

export const CourseCategory: React.FC<CourseCategoryProps> = ({
  category,
  isDemoActive,
  defaultExpanded = false,
  onOpenFile,
  onUnlockModule
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const totalFiles = category.items.length;

  return (
    <div 
      className="w-full rounded-xl sm:rounded-2xl border border-[#E5D4F2] bg-[#F5EDFC] shadow-[0_1px_4px_rgba(112,64,160,0.04)] overflow-hidden transition-all duration-200 box-border"
    >
      {/* Cabeçalho do Card Compacto: Ícone + Título + Quantidade de Arquivos + Seta */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        className="w-full px-3 py-2.5 sm:px-4 sm:py-3 flex items-center justify-between gap-3 focus:outline-none hover:bg-[#EFE3F8] active:bg-[#EADBF5] transition-colors min-h-[56px] sm:min-h-[60px] cursor-pointer text-left select-none"
      >
        {/* À esquerda: Ícone mais compacto (38x38px no mobile, 40x40px no desktop) */}
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/95 border border-[#E5D4F2] flex items-center justify-center shrink-0 shadow-2xs">
          {isExpanded ? (
            <FolderOpen className="w-5 h-5 text-[#7040A0]" strokeWidth={2.2} />
          ) : (
            <Folder className="w-5 h-5 text-[#7040A0]" strokeWidth={2.2} />
          )}
        </div>

        {/* No centro: Nome do módulo + Quantidade de arquivos */}
        <div className="min-w-0 flex-1">
          <h3 className="text-[14.5px] sm:text-[16px] font-semibold text-[#33243D] leading-snug break-words">
            {category.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] font-medium text-[#796A86] mt-0.5 leading-none">
            {totalFiles} {totalFiles === 1 ? 'arquivo' : 'arquivos'}
          </p>
        </div>

        {/* À direita: Seta de expansão compacta */}
        <div className="w-5 h-5 flex items-center justify-center shrink-0 text-[#7040A0]">
          <ChevronDown 
            className={`w-4.5 h-4.5 transition-transform duration-200 ${
              isExpanded ? 'rotate-180 text-[#4E2879]' : 'text-[#7040A0]'
            }`} 
            strokeWidth={2.4}
          />
        </div>
      </button>

      {/* Lista de Aulas e Arquivos (Exibida suavemente quando expandido) */}
      {isExpanded && (
        <div className="px-2.5 sm:px-3.5 pb-2.5 pt-2 border-t border-[#E5D4F2] space-y-2 bg-white/60">
          {category.items.map((file) => (
            <CourseFile
              key={file.id}
              file={file}
              isDemoActive={isDemoActive}
              onOpen={onOpenFile}
              onUnlock={onUnlockModule}
            />
          ))}
        </div>
      )}

    </div>
  );
};
