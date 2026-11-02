/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CHINELOS_MODELS, CATEGORIES, ChineloModel } from '../data/chinelosData';
import { Sparkles, Eye, ArrowRight } from 'lucide-react';
import { ModelDetailModal } from './ModelDetailModal';

export const ShowcaseGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedModel, setSelectedModel] = useState<ChineloModel | null>(null);

  const filteredModels = activeCategory === 'all'
    ? CHINELOS_MODELS
    : CHINELOS_MODELS.filter((item) => item.category === activeCategory);

  const handleScrollToPacotes = () => {
    const target = document.querySelector('#pacotes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vitrine" className="py-16 lg:py-24 bg-[#FFF9FC] border-t border-[#E9D9F7]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-bold text-[#7040A0] uppercase tracking-wider block">
            Vitrine dos 15 Modelos Exclusivos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4E2879] tracking-tight">
            Exemplos reais dos chinelos que você vai aprender a fazer
          </h2>
          <p className="text-base sm:text-lg text-[#33243D] leading-relaxed">
            Cada par foi planejado com técnicas simples, delicadas e muito vendáveis. Clique em qualquer foto para ver os detalhes e materiais.
          </p>
        </div>

        {/* Barra de Filtros Segmentados (Interactive controls allowed as functional buttons) */}
        <div className="mb-10 flex items-center justify-start sm:justify-center overflow-x-auto pb-2 scrollbar-none gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#7040A0] text-white shadow-sm'
                    : 'bg-white text-[#33243D] hover:bg-[#FBE7F1] border border-[#E9D9F7]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid de Cards dos Chinelos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredModels.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedModel(item)}
              className="group cursor-pointer rounded-3xl bg-white border border-[#E9D9F7] overflow-hidden shadow-sm hover:shadow-md hover:border-[#7040A0]/40 transition-all duration-300 flex flex-col"
            >
              {/* Foto com fundo original preservado */}
              <div className="relative aspect-[4/3] bg-[#FBE7F1]/20 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Número do Modelo discreto e limpo */}
                <div className="absolute top-3 left-3 bg-[#4E2879]/85 text-white backdrop-blur-sm text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  Modelo {item.number}
                </div>

                {/* Botão de Ver Detalhes que aparece no hover ou em toque */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/95 text-[#4E2879] text-xs font-bold rounded-xl shadow">
                    <Eye className="w-4 h-4 text-[#7040A0]" />
                    Ver detalhes do modelo
                  </span>
                </div>
              </div>

              {/* Informações do Card */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#7040A0] font-medium mb-1">
                    <span>{item.categoryLabel}</span>
                    <span className="font-semibold text-[#4E2879]">Nível {item.level}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#4E2879] group-hover:text-[#7040A0] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#33243D]/85 leading-relaxed mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E9D9F7]/60 flex items-center justify-between text-xs font-medium text-[#7040A0]">
                  <span className="truncate max-w-[190px]">{item.highlight}</span>
                  <span className="inline-flex items-center gap-1 text-[#4E2879] font-bold shrink-0">
                    Ver mais
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chamada para o pacote */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FBE7F1] via-white to-[#E9D9F7] border border-[#E9D9F7] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-serif text-xl font-bold text-[#4E2879]">
              Gostou dos modelos? Todos os 15 estão incluídos nas aulas!
            </h4>
            <p className="text-sm text-[#33243D]">
              Você aprende desde o primeiro ponto até a costura invisível de acabamento.
            </p>
          </div>
          <button
            type="button"
            onClick={handleScrollToPacotes}
            className="px-6 py-3.5 text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-95 rounded-xl shadow transition-all whitespace-nowrap shrink-0"
          >
            Ver valores dos pacotes
          </button>
        </div>

      </div>

      {/* Modal de Detalhes do Chinelo */}
      <ModelDetailModal
        model={selectedModel}
        onClose={() => setSelectedModel(null)}
        onSelectPackage={handleScrollToPacotes}
      />
    </section>
  );
};
