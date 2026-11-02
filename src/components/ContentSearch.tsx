/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Search, X } from 'lucide-react';

interface ContentSearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount?: number;
}

export const ContentSearch: React.FC<ContentSearchProps> = ({
  searchQuery,
  onSearchChange,
  resultCount
}) => {
  return (
    <div className="w-full px-3 sm:px-6 py-2 box-border">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <label htmlFor="content-search-input" className="sr-only">
            Buscar aula ou modelo de chinelo
          </label>
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#7040A0]">
            <Search className="w-5 h-5 text-[#7040A0]" />
          </div>

          <input
            id="content-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="🔎 Buscar aula ou modelo de chinelo"
            className="w-full pl-12 pr-10 py-3.5 sm:py-4 text-sm sm:text-base bg-white border border-[#E9D9F7] rounded-2xl shadow-xs text-[#33243D] placeholder-[#33243D]/50 focus:outline-none focus:ring-2 focus:ring-[#7040A0]/30 focus:border-[#7040A0] transition-all min-h-[48px]"
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#33243D]/60 hover:text-[#4E2879] transition-colors"
              aria-label="Limpar busca"
            >
              <div className="w-6 h-6 rounded-full bg-[#E9D9F7] flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[#4E2879]" />
              </div>
            </button>
          )}
        </div>

        {/* Indicador de resultados se a busca estiver ativa */}
        {searchQuery.trim().length > 0 && typeof resultCount === 'number' && (
          <div className="mt-2 text-xs sm:text-sm text-[#7040A0] font-semibold flex items-center justify-between px-2">
            <span>
              {resultCount === 0
                ? 'Nenhum conteúdo encontrado para sua busca'
                : `Encontrado(s) ${resultCount} conteúdo(s)`}
            </span>
            <button
              type="button"
              onClick={() => onSearchChange('')}
              className="text-[#E88DB8] hover:text-[#4E2879] underline underline-offset-2 text-xs"
            >
              Ver todas as aulas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
