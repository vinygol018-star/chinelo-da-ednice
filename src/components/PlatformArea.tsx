/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { COURSE_MODULES, CourseModule } from '../data/modulesData';
import { PlayCircle, BookOpen, Clock, ChevronRight, Laptop, Smartphone } from 'lucide-react';
import { ModuleDetailModal } from './ModuleDetailModal';

export const PlatformArea: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<CourseModule | null>(null);

  const handleScrollToPacotes = () => {
    const target = document.querySelector('#pacotes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="aulas" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFF9FC] via-[#FBE7F1]/30 to-[#FFF9FC] border-t border-[#E9D9F7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Cabeçalho da Área de Aulas */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9D9F7] text-[#4E2879] text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Ambiente de Aulas Práticas
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4E2879] tracking-tight">
            Veja o que você vai aprender
          </h2>
          
          <p className="text-base sm:text-lg text-[#33243D] leading-relaxed">
            Uma organização pensada com paciência e clareza para que você possa assistir no celular ou computador, pausar, voltar e fazer com calma na sua casa.
          </p>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs sm:text-sm text-[#7040A0] font-medium">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-[#E88DB8]" />
              Fácil de abrir no celular
            </span>
            <span aria-hidden="true" className="text-[#E88DB8]">·</span>
            <span className="flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-[#E88DB8]" />
              Acesso pelo computador
            </span>
            <span aria-hidden="true" className="text-[#E88DB8]">·</span>
            <span>Sem aplicativo pesado</span>
          </div>
        </div>

        {/* Grade dos 6 Módulos (Cards de Plataforma de Aulas) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSE_MODULES.map((mod) => (
            <div
              key={mod.id}
              onClick={() => setSelectedModule(mod)}
              className="group cursor-pointer rounded-3xl bg-white border border-[#E9D9F7] overflow-hidden shadow-sm hover:shadow-lg hover:border-[#7040A0]/50 transition-all duration-300 flex flex-col"
            >
              {/* Capa com miniatura e ícone de aula */}
              <div className="relative aspect-[16/9] bg-[#33243D] overflow-hidden">
                <img
                  src={mod.coverImage}
                  alt={mod.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* Overlay de gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Selo do Módulo */}
                <div className="absolute top-3 left-3 bg-[#7040A0]/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                  {mod.badge}
                </div>

                {/* Ícone de Play central estilizado */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#7040A0] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#7040A0] group-hover:text-white transition-all">
                    <PlayCircle className="w-7 h-7" />
                  </div>
                </div>

                {/* Rodapé da Capa: Quantidade de aulas */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-medium text-white/90">
                  <span>{mod.lessons.length} aulas preparadas</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#E88DB8]" />
                    Passo a passo
                  </span>
                </div>
              </div>

              {/* Informações Textuais do Módulo */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4E2879] group-hover:text-[#7040A0] transition-colors leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#7040A0] mt-1">
                    {mod.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#33243D]/85 leading-relaxed mt-2.5 line-clamp-3">
                    {mod.description}
                  </p>
                </div>

                {/* Botão de Ver Conteúdo */}
                <div className="pt-3 border-t border-[#E9D9F7] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#4E2879] group-hover:text-[#7040A0] inline-flex items-center gap-1">
                    Ver aulas deste módulo
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[11px] text-[#7040A0] font-medium px-2 py-0.5 rounded bg-[#FBE7F1]">
                    Prévia liberada
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Explicativo de Tranquilidade */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-[#E9D9F7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#4E2879]">
              Como é o acesso aos materiais?
            </h4>
            <p className="text-sm sm:text-base text-[#33243D] leading-relaxed max-w-2xl">
              Você não precisa se preocupar com logins complicados ou senhas difíceis. Logo que seu pedido é confirmado, você recebe o link direto pelo seu WhatsApp e pode começar a assistir no mesmo instante.
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToPacotes}
            className="w-full md:w-auto px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-95 rounded-xl shadow transition-all whitespace-nowrap shrink-0 text-center"
          >
            Quero escolher meu pacote agora
          </button>
        </div>

      </div>

      {/* Modal de Detalhes do Módulo */}
      <ModuleDetailModal
        module={selectedModule}
        onClose={() => setSelectedModule(null)}
        onGoToPackages={handleScrollToPacotes}
      />
    </section>
  );
};
