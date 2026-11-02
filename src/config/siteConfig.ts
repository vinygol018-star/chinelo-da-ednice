/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Configurações Centrais da Marca — Chinelos da Ednice
 * Permite alterar facilmente o número de WhatsApp, mensagens padrão,
 * preços e benefícios dos três pacotes.
 */

export interface PackageOffer {
  id: 'iniciante' | 'completo' | 'premium';
  name: string;
  badge?: string;
  isFeatured?: boolean;
  priceFormatted: string;
  priceValue: number;
  description: string;
  benefits: string[];
  buttonText: string;
  whatsappMessage: string;
  allowedTiers: ('INICIANTE' | 'COMPLETO' | 'PREMIUM')[];
}

export const SITE_CONFIG = {
  brandName: 'Chinelos da Ednice',
  tagline: 'Área da aluna · Aulas passo a passo e moldes artesanais',
  
  // Duração da demonstração gratuita (em milissegundos: 12 horas reais)
  DEMO_DURATION_HOURS: 12,
  DEMO_DURATION_MS: 12 * 60 * 60 * 1000,

  // NÚMERO DO WHATSAPP DA MARCA:
  // Deixe vazio ou preencha no formato internacional: 55 + DDD + NUMERO (ex: "5511999999999")
  // Enquanto o número real não for configurado, a interface avisará com gentileza no ambiente de dev.
  WHATSAPP_NUMBER: '', 
  
  // MENSAGENS DOS PACOTES CONFORME ESPECIFICAÇÃO
  WHATSAPP_MESSAGE_INICIANTE: 'Olá, Ednice! Quero o pacote Iniciante de R$ 19,90.',
  WHATSAPP_MESSAGE_COMPLETO: 'Olá, Ednice! Quero o pacote Completo de R$ 24,90.',
  WHATSAPP_MESSAGE_PREMIUM: 'Olá, Ednice! Quero o pacote Premium de R$ 37,00.',
  GENERAL_CONTACT_MESSAGE: 'Olá, Ednice! Vim pela área da aluna e gostaria de tirar uma dúvida sobre os materiais.',
};

export const PACKAGES: PackageOffer[] = [
  {
    id: 'iniciante',
    name: 'PACOTE 1 — INICIANTE',
    priceFormatted: 'R$ 19,90',
    priceValue: 19.90,
    description: 'Para quem quer começar a aprender a fazer chinelos artesanais.',
    benefits: [
      'Conteúdos introdutórios',
      'Aulas passo a passo',
      'Modelos básicos',
      'Materiais de apoio'
    ],
    buttonText: 'QUERO O INICIANTE',
    whatsappMessage: SITE_CONFIG.WHATSAPP_MESSAGE_INICIANTE,
    allowedTiers: ['INICIANTE', 'COMPLETO', 'PREMIUM'],
  },
  {
    id: 'completo',
    name: 'PACOTE 2 — COMPLETO',
    badge: '⭐ OPÇÃO EM DESTAQUE',
    isFeatured: true,
    priceFormatted: 'R$ 24,90',
    priceValue: 24.90,
    description: 'Para quem deseja aprender a produzir e conhecer orientações para vender.',
    benefits: [
      'Tudo do Iniciante',
      'Conteúdos adicionais',
      'Guia de vendas',
      'Orientações para encontrar clientes',
      'Materiais complementares'
    ],
    buttonText: 'QUERO O COMPLETO',
    whatsappMessage: SITE_CONFIG.WHATSAPP_MESSAGE_COMPLETO,
    allowedTiers: ['COMPLETO', 'PREMIUM'],
  },
  {
    id: 'premium',
    name: 'PACOTE 3 — PREMIUM',
    priceFormatted: 'R$ 37,00',
    priceValue: 37.00,
    description: 'Para quem deseja conhecer a opção mais completa de materiais.',
    benefits: [
      'Conteúdos dos pacotes anteriores',
      'Módulos complementares configuráveis',
      'Espaço para futuros bônus'
    ],
    buttonText: 'QUERO O PREMIUM',
    whatsappMessage: SITE_CONFIG.WHATSAPP_MESSAGE_PREMIUM,
    allowedTiers: ['PREMIUM'],
  }
];

/**
 * Níveis de permissão de acesso
 */
export type AccessTier = 'DEMO' | 'INICIANTE' | 'COMPLETO' | 'PREMIUM';

/**
 * Gera o link seguro para abertura direta no WhatsApp
 */
export function generateWhatsAppLink(message: string, customNumber?: string): string {
  const number = (customNumber ?? SITE_CONFIG.WHATSAPP_NUMBER).replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  
  if (!number) {
    return `https://wa.me/?text=${encodedText}`;
  }
  
  return `https://wa.me/${number}?text=${encodedText}`;
}
