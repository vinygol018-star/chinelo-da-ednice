/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Clock, Unlock, AlertTriangle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface DemoCountdownProps {
  onUnlockClick: () => void;
  onExpiryStateChange?: (isExpired: boolean) => void;
}

export const DemoCountdown: React.FC<DemoCountdownProps> = ({
  onUnlockClick,
  onExpiryStateChange
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
    totalMs: number;
    isExpired: boolean;
  }>({
    hours: 11,
    minutes: 59,
    seconds: 59,
    totalMs: SITE_CONFIG.DEMO_DURATION_MS,
    isExpired: false
  });

  useEffect(() => {
    // Chave para persistir horário de expiração no navegador (12 horas reais)
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
          totalMs: 0,
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
        totalMs: diff,
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
    <div className="w-full bg-[#4E2879] text-white py-3.5 px-4 sm:px-6 shadow-md border-b border-[#7040A0]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        
        {/* Mensagem e Timer */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3.5">
          <div className="flex items-center gap-2 text-[#E9D9F7] text-xs sm:text-sm font-medium">
            <Clock className="w-4 h-4 text-[#E88DB8] shrink-0 animate-pulse" />
            <span>
              {timeLeft.isExpired
                ? 'Seu período de demonstração gratuita expirou:'
                : 'Seu acesso gratuito de demonstração termina em:'}
            </span>
          </div>

          {/* Relógio Digital Tabular (Formato 11:59:59) */}
          <div className="inline-flex items-center gap-1 font-mono text-base sm:text-lg font-extrabold tracking-wider bg-black/25 px-3 py-1 rounded-lg border border-[#E9D9F7]/20 text-[#FFF9FC] tabular-nums">
            <span>{padZero(timeLeft.hours)}</span>
            <span className="text-[#E88DB8] animate-pulse">:</span>
            <span>{padZero(timeLeft.minutes)}</span>
            <span className="text-[#E88DB8] animate-pulse">:</span>
            <span>{padZero(timeLeft.seconds)}</span>
          </div>
        </div>

        {/* Botão de Desbloqueio (Min 48px para toque confortável) */}
        <button
          type="button"
          onClick={onUnlockClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-[#4E2879] bg-[#E9D9F7] hover:bg-white active:scale-95 rounded-xl shadow transition-all min-h-[48px] whitespace-nowrap"
        >
          <Unlock className="w-4 h-4 text-[#7040A0] shrink-0" />
          <span>DESBLOQUEAR MEUS MATERIAIS</span>
        </button>

      </div>
    </div>
  );
};
