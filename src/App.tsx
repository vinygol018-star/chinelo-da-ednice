/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Aplicação Principal — Chinelos da Ednice
 * Navegação por páginas internas:
 *   /         -> Página 1: Área da aluna (demonstração gratuita 12h, aulas, busca, módulos bloqueados)
 *   /pacotes  -> Página 2: Escolha seu pacote (os 3 planos em cards fluidos e botão de voltar)
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { AppHeader } from './components/AppHeader';
import { WelcomeCard } from './components/WelcomeCard';
import { ContentSearch } from './components/ContentSearch';
import { CourseCategory } from './components/CourseCategory';
import { CourseFile } from './components/CourseFile';
import { LockedContent } from './components/LockedContent';
import { PackagesMockupModal } from './components/PackagesMockupModal';
import { ContentViewerModal } from './components/ContentViewerModal';
import { AdminSettingsModal } from './components/AdminSettingsModal';
import { COURSE_MODULES_DATA, CourseFileItem } from './data/courseData';
import { SITE_CONFIG, generateWhatsAppLink } from './config/siteConfig';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Estado do Mockup deslizante de ofertas
  const [isPackagesMockupOpen, setIsPackagesMockupOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const hash = window.location.hash;
      return path.includes('/pacotes') || hash === '#oferta' || hash === '#pacotes';
    }
    return false;
  });

  const [isDemoExpired, setIsDemoExpired] = useState(false);
  const [activeViewerFile, setActiveViewerFile] = useState<CourseFileItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [customWhatsAppNumber, setCustomWhatsAppNumber] = useState<string>(() => {
    return localStorage.getItem('ednice_custom_whatsapp') || SITE_CONFIG.WHATSAPP_NUMBER;
  });

  const [settingsOpen, setSettingsOpen] = useState(false);

  // Monitora botão Voltar/Avançar do navegador nativo para fechar/abrir o mockup
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== 'undefined') {
        const path = window.location.pathname;
        const hash = window.location.hash;
        const isOffer = path.includes('/pacotes') || hash === '#oferta' || hash === '#pacotes';
        setIsPackagesMockupOpen(isOffer);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenOffers = () => {
    setIsPackagesMockupOpen(true);
    if (typeof window !== 'undefined') {
      window.history.pushState({ modal: 'pacotes' }, '', '#oferta');
    }
  };

  const handleCloseOffers = () => {
    setIsPackagesMockupOpen(false);
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#oferta' || window.location.hash === '#pacotes' || window.location.pathname.includes('/pacotes')) {
        window.history.replaceState(null, '', '/');
      }
    }
  };

  const handleSaveNumber = (num: string) => {
    setCustomWhatsAppNumber(num);
    localStorage.setItem('ednice_custom_whatsapp', num);
  };

  // Módulos com aulas gratuitas da demonstração (10 módulos independentes)
  const freeDemoModules = useMemo(() => {
    return COURSE_MODULES_DATA.filter((mod) => mod.categoryGroup === 'comece-aqui');
  }, []);

  // Módulos bloqueados/pagos
  const lockedModules = useMemo(() => {
    return COURSE_MODULES_DATA.filter((mod) => mod.categoryGroup !== 'comece-aqui');
  }, []);

  // Busca instantânea em todos os arquivos e módulos reais
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    const matches: { file: CourseFileItem; categoryTitle: string }[] = [];

    COURSE_MODULES_DATA.forEach((cat) => {
      cat.items.forEach((item) => {
        if (item.isPlaceholder) return;
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesCategory = cat.title.toLowerCase().includes(q);
        const matchesFormat = item.formatLabel.toLowerCase().includes(q);

        if (matchesTitle || matchesSummary || matchesCategory || matchesFormat) {
          matches.push({ file: item, categoryTitle: cat.title });
        }
      });
    });

    return matches;
  }, [searchQuery]);

  const handleOpenFile = (file: CourseFileItem) => {
    setActiveViewerFile(file);
  };

  const handleFloatingWhatsApp = () => {
    const url = generateWhatsAppLink(
      'Olá, Ednice! Estou navegando na área da aluna e gostaria de tirar uma dúvida sobre os materiais.',
      customWhatsAppNumber
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9FC] text-[#33243D] selection:bg-[#E9D9F7] selection:text-[#4E2879] overflow-x-hidden">
      
      {/* 1. Cabeçalho no Estilo do Print (Identificação da Marca + Contador + Botão Liberar) */}
      <AppHeader
        onOpenPackages={handleOpenOffers}
        onExpiryStateChange={setIsDemoExpired}
      />

      {/* Conteúdo Central da Plataforma (Margens laterais de 10-12px no celular) */}
      <main className="flex-1 pb-16 w-full box-border">
        
        {/* 2. Card Principal de Boas-Vindas */}
        <WelcomeCard onUnlockClick={handleOpenOffers} />

        {/* 3. Barra de Busca Instantânea */}
        <ContentSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          resultCount={searchQuery.trim().length > 0 ? searchResults.length : undefined}
        />

        {/* Renderização Condicional: Resultados da Busca OU Navegação da Área da Aluna */}
        {searchQuery.trim().length > 0 ? (
          /* RESULTADOS DA BUSCA */
          <section className="w-full px-2.5 sm:px-6 py-4 box-border">
            <div className="w-full max-w-4xl mx-auto space-y-3">
              <h3 className="text-[20px] sm:text-[22px] font-bold text-[#4E2879] break-words">
                Resultados para "{searchQuery}"
              </h3>

              {searchResults.length === 0 ? (
                <div className="p-6 rounded-2xl bg-white border border-[#E9D9F7] text-center space-y-3">
                  <p className="text-sm sm:text-base text-[#33243D]">
                    Não encontramos nenhuma aula ou guia com esse termo.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-[#7040A0] bg-[#E9D9F7] hover:bg-[#d8c0ee]"
                  >
                    Limpar pesquisa e ver todas as aulas
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5 w-full">
                  {searchResults.map(({ file, categoryTitle }) => (
                    <div key={file.id} className="space-y-1 w-full">
                      <span className="text-[11px] font-bold text-[#7040A0] px-1 block truncate">
                        Módulo: {categoryTitle}
                      </span>
                      <CourseFile
                        file={file}
                        isDemoActive={!isDemoExpired}
                        onOpen={handleOpenFile}
                        onUnlock={handleOpenOffers}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ) : (
          /* NAVEGAÇÃO COMPLETA DA PLATAFORMA */
          <>
            {/* 4. SEÇÃO: "👋 Comece por aqui" (10 Módulos Gratuitos Independentes) */}
            <section id="comece-aqui" className="w-full px-3 sm:px-6 py-3 sm:py-5 box-border">
              <div className="w-full max-w-4xl mx-auto space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h2 className="text-[22px] sm:text-[24px] font-bold text-[#4E2879] flex items-center gap-1.5 break-words">
                      <span>👋 Comece por aqui</span>
                    </h2>
                    <p className="text-[14px] sm:text-[15px] text-[#796A86] mt-0.5 break-words">
                      Conheça as primeiras aulas e descubra como fazer seus chinelos artesanais.
                    </p>
                  </div>
                  <span className="shrink-0 px-3 py-1.5 rounded-full text-[12px] sm:text-[13px] font-semibold bg-[#EBDCF7] text-[#4E2879]">
                    GRÁTIS POR 12H
                  </span>
                </div>

                {/* Lista de todos os módulos liberados mais compacta e elegante */}
                <div className="space-y-2.5 w-full">
                  {freeDemoModules.map((cat) => (
                    <CourseCategory
                      key={cat.id}
                      category={cat}
                      isDemoActive={!isDemoExpired}
                      defaultExpanded={false}
                      onOpenFile={handleOpenFile}
                      onUnlockModule={handleOpenOffers}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. SEÇÃO: "🔒 Desbloqueie mais modelos e materiais" (Todos os Materiais Bloqueados/Pagos) */}
            <LockedContent
              modules={lockedModules}
              onUnlockClick={handleOpenOffers}
            />
          </>
        )}

      </main>

      {/* Botão Flutuante de WhatsApp (Discreto, acessível, max 15% altura) */}
      <div className="fixed bottom-5 right-3 sm:right-6 z-40">
        <button
          type="button"
          onClick={handleFloatingWhatsApp}
          className="group flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 min-h-[46px]"
          aria-label="Tirar dúvida no WhatsApp com a Ednice"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
          <span className="font-bold text-xs sm:text-sm tracking-wide">
            Dúvidas no WhatsApp
          </span>
        </button>
      </div>

      {/* Modal: Visualizador Real de Demonstração (Videoaula ou PDF) */}
      <ContentViewerModal
        file={activeViewerFile}
        onClose={() => setActiveViewerFile(null)}
        onUnlockAll={() => {
          setActiveViewerFile(null);
          handleOpenOffers();
        }}
        customWhatsAppNumber={customWhatsAppNumber}
      />

      {/* Mockup Deslizante de Oferta com 'X' no canto superior direito para voltar */}
      <PackagesMockupModal
        isOpen={isPackagesMockupOpen}
        onClose={handleCloseOffers}
        customWhatsAppNumber={customWhatsAppNumber}
      />

      {/* Modal: Painel de Configurações do WhatsApp para o Proprietário */}
      <AdminSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        currentNumber={customWhatsAppNumber}
        onSaveNumber={handleSaveNumber}
      />

    </div>
  );
}
