/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Check } from 'lucide-react';
import { PackageOffer } from '../config/siteConfig';

interface PackageCardProps {
  pkg: PackageOffer;
  onSelect: (pkg: PackageOffer) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({ pkg, onSelect }) => {
  const isFeatured = pkg.isFeatured;

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between w-full ${
        isFeatured
          ? 'bg-white border-[2.5px] border-[#D4A63A] shadow-[0_10px_25px_-5px_rgba(212,166,58,0.25)] pt-7 sm:pt-8'
          : 'bg-white border border-[#E9D9F7] shadow-sm hover:shadow-md'
      }`}
    >
      {/* Selo Dourado em Destaque */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide uppercase shadow-sm bg-[#D4A63A] text-[#33243D] border border-[#C4952C]/40 whitespace-nowrap">
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Conteúdo do Pacote */}
      <div className="space-y-5 pt-1">
        {/* Identificação do Pacote */}
        <div className="border-b border-[#E9D9F7] pb-4">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4E2879]">
            {pkg.name}
          </h3>

          {/* Preço em Destaque */}
          <div className="mt-3 flex items-baseline gap-1.5">
            <span className="font-serif text-3xl sm:text-4xl font-extrabold text-[#4E2879] tracking-tight">
              {pkg.priceFormatted}
            </span>
          </div>
        </div>

        {/* Lista de Benefícios */}
        <div className="space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#7040A0] block">
            O que está incluído:
          </span>
          <ul className="space-y-2 text-xs sm:text-sm text-[#33243D]">
            {pkg.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isFeatured ? 'text-[#D4A63A]' : 'text-[#7040A0]'
                }`} />
                <span className="leading-snug">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Botão de Ação */}
      <div className="pt-6">
        <button
          type="button"
          onClick={() => onSelect(pkg)}
          className={`w-full py-4 px-4 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center transition-all min-h-[48px] text-center cursor-pointer active:scale-[0.98] ${
            isFeatured
              ? 'bg-[#D4A63A] hover:bg-[#C4952C] text-[#33243D] shadow-sm hover:shadow-[0_4px_14px_rgba(212,166,58,0.4)]'
              : 'bg-[#7040A0] hover:bg-[#4E2879] text-[#FFFFFF] shadow-sm hover:shadow-md'
          }`}
        >
          <span>{pkg.buttonText}</span>
        </button>
      </div>

    </div>
  );
};
