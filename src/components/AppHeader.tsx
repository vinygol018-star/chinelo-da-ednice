/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Cabeçalho no Estilo do Print de Referência — Chinelos da Ednice
 * Enquadramento definitivo para mobile (320px a 430px) e desktop.
 * Tipografia Poppins moderna, logotipo em squircle dourado 3D,
 * título "Chinelos da Ednice", subtítulo "Área da aluna"
 * e card de contagem regressiva com botão verde "Liberar 🔒".
 */

import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AppHeaderProps {
  onOpenPackages: () => void;
  onExpiryStateChange?: (isExpired: boolean) => void;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onOpenPackages,
  onExpiryStateChange
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({
    hours: 11,
    minutes: 59,
    seconds: 54,
    isExpired: false
  });

  useEffect(() => {
    const STORAGE_KEY = 'ednice_demo_expiry_timestamp';
    const now = Date.now();
    let expiryTimestamp: number;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && !isNaN(Number(saved))) {
      expiryTimestamp = Number(saved);
    } else {
      expiryTimestamp = now + SITE_CONFIG.DEMO_DURATION_MS;
      localStorage.setItem(STORAGE_KEY, String(expiryTimestamp));
    }

    const calculateTime = () => {
      const current = Date.now();
      const diff = expiryTimestamp - current;

      if (diff <= 0) {
        setTimeLeft({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        if (onExpiryStateChange) onExpiryStateChange(true);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours,
        minutes,
        seconds,
        isExpired: false
      });
      if (onExpiryStateChange) onExpiryStateChange(false);
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [onExpiryStateChange]);

  const padZero = (n: number) => n.toString().padStart(2, '0');

  return (
    <header className="w-full bg-[#7040A0] text-white border-b border-[#4E2879] shadow-md box-border">
      <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-3 sm:py-4 box-border">
        
        {/* Linha Superior: Ícone em Squircle Dourado + Nome da Oferta + Subtítulo */}
        <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
          {/* Ícone Squircle Dourado 3D (48x48px no mobile, 52x52px no desktop) */}
          <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-gradient-to-b from-[#FDE047] via-[#FBBF24] to-[#F59E0B] shadow-[0_3px_0_#D97706] flex items-center justify-center shrink-0">
            {/* Ícone delicado de chinelo artesanal bordado */}
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 text-[#78350F] drop-shadow-xs" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M7 3C5 5 4 9 4 14c0 4.5 2.5 7 5.5 7s5.5-2.5 5.5-7c0-5-1-9-3-11" fill="#FEF3C7" stroke="currentColor"/>
              <path d="M6 10.5l3.5 2 3.5-2" stroke="#78350F" strokeWidth="2.6" />
              <circle cx="9.5" cy="12.5" r="1.5" fill="#D97706" />
              <circle cx="15.5" cy="8.5" r="1.2" fill="#F59E0B" />
            </svg>
          </div>

          {/* Informações da Marca: Nome da Oferta (20-22px) e Subtítulo (13-14px) */}
          <div className="min-w-0 flex-1">
            <h1 className="text-[20px] sm:text-[23px] font-bold text-white tracking-tight leading-tight break-words">
              Chinelos da Ednice
            </h1>
            <p className="text-[13px] sm:text-[14px] text-[#E9D9F7] font-medium leading-tight mt-0.5">
              Área da aluna
            </p>
          </div>
        </div>

        {/* Linha Inferior: Card Escuro de Contagem Regressiva e Botão Verde Liberar 🔒 */}
        <div className="mt-3 rounded-2xl sm:rounded-[20px] bg-[#3E1A63] border border-[#582A88] p-3 sm:px-4 sm:py-3 flex items-center justify-between gap-2.5 sm:gap-4 shadow-inner box-border w-full">
          
          {/* Informações do Tempo: Aviso + Cronômetro */}
          <div className="min-w-0 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-[#FBE7F1] text-[12px] sm:text-[13px] font-medium leading-tight">
              <span className="text-sm shrink-0">⏳</span>
              <span className="truncate">
                {timeLeft.isExpired
                  ? 'Acesso expirado'
                  : 'Seu acesso expira em:'}
              </span>
            </div>

            {/* Cronômetro Digital no estilo 11:59:54 com números tabulares */}
            <div className="font-mono text-white font-bold text-[20px] sm:text-[24px] tracking-wide leading-none mt-1 tabular-nums">
              {padZero(timeLeft.hours)}:{padZero(timeLeft.minutes)}:{padZero(timeLeft.seconds)}
            </div>
          </div>

          {/* Botão Verde com Cadeado: Liberar 🔒 */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenPackages}
              className="px-4 sm:px-6 py-2.5 rounded-xl bg-[#22C55E] hover:bg-[#16A34A] active:scale-95 text-[#032612] font-bold text-[14px] sm:text-[15px] shadow-sm flex items-center justify-center gap-1.5 transition-all min-h-[44px] cursor-pointer"
            >
              <span>Liberar</span>
              <span className="text-sm">🔒</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
};
