/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG, generateWhatsAppLink } from '../config/siteConfig';

interface HeaderProps {
  onOpenSettings?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSettings }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Modelos', href: '#vitrine' },
    { label: 'Aulas', href: '#aulas' },
    { label: 'Pacotes', href: '#pacotes' },
    { label: 'Sobre a Ednice', href: '#sobre' },
    { label: 'Dúvidas', href: '#duvidas' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9FC]/95 backdrop-blur-md border-b border-[#E9D9F7]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-left"
          aria-label="Chinelos da Ednice - Página inicial"
        >
          <div className="w-10 h-10 rounded-full bg-[#E9D9F7] flex items-center justify-center text-[#7040A0] shadow-sm group-hover:scale-105 transition-transform">
            {/* Artesanal floral needle/thread icon */}
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" opacity="0.2" fill="#7040A0"/>
              <path d="M12 6c-3 0-5 2-5 5 0 3 5 7 5 7s5-4 5-7c0-3-2-5-5-5z" />
              <circle cx="12" cy="11" r="1.5" />
            </svg>
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#4E2879] block leading-none">
              Chinelos da Ednice
            </span>
            <span className="text-[11px] font-medium text-[#7040A0] tracking-wide block mt-1">
              Artesanato & Bordados
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (Clean text with hover state, no pill wrappers) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#33243D]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="hover:text-[#7040A0] transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7040A0] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#aulas"
            onClick={(e) => handleScrollTo(e, '#aulas')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#4E2879] bg-[#E9D9F7] hover:bg-[#d8c0ee] rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            Ver meus materiais
          </a>

          <a
            href="#pacotes"
            onClick={(e) => handleScrollTo(e, '#pacotes')}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] active:scale-95 rounded-xl shadow-sm transition-all whitespace-nowrap shrink-0"
          >
            Escolher meu pacote
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[#4E2879] hover:bg-[#E9D9F7]/60 transition-colors"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E9D9F7] bg-[#FFF9FC] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-4 py-3 text-base font-medium text-[#33243D] hover:bg-[#FBE7F1] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#E9D9F7] flex flex-col gap-2">
              <a
                href="#aulas"
                onClick={(e) => handleScrollTo(e, '#aulas')}
                className="w-full text-center px-4 py-3 text-sm font-semibold text-[#4E2879] bg-[#E9D9F7] rounded-xl"
              >
                Ver meus materiais de aula
              </a>
              <a
                href="#pacotes"
                onClick={(e) => handleScrollTo(e, '#pacotes')}
                className="w-full text-center px-4 py-3 text-sm font-bold text-white bg-[#7040A0] rounded-xl shadow"
              >
                Escolher meu pacote
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
