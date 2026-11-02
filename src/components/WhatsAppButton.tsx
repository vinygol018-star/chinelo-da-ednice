/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { generateWhatsAppLink, SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppButtonProps {
  message?: string;
  customNumber?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = SITE_CONFIG.GENERAL_CONTACT_MESSAGE,
  customNumber,
  className = '',
  children,
  variant = 'primary'
}) => {
  const handleClick = () => {
    const number = customNumber || SITE_CONFIG.WHATSAPP_NUMBER;
    const url = generateWhatsAppLink(message, number);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold transition-all active:scale-95 min-h-[48px]";
  
  const variants = {
    primary: "bg-[#7040A0] hover:bg-[#4E2879] text-white rounded-2xl shadow-sm px-6 py-3.5",
    secondary: "bg-[#25D366] hover:bg-[#20b858] text-white rounded-2xl shadow-sm px-6 py-3.5",
    outline: "bg-white hover:bg-[#FBE7F1] text-[#4E2879] border border-[#E9D9F7] rounded-2xl px-6 py-3.5",
    floating: "bg-[#25D366] hover:bg-[#20b858] text-white rounded-full shadow-lg px-4 py-3"
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span>{children || 'Falar no WhatsApp'}</span>
    </button>
  );
};
