/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Perguntas Frequentes (FAQ) — Chinelos da Ednice
 * Respostas acolhedoras, objetivas e transparentes para mulheres acima de 50 anos.
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '1. Preciso saber bordar para começar?',
    answer: 'Não! O curso foi feito com carinho especialmente para quem está começando do absoluto zero. A Ednice explica cada ponto bem de perto, em velocidade calma, mostrando onde colocar a agulha, como segurar o alicate e como dar o primeiro nó com segurança.'
  },
  {
    id: 'faq-2',
    question: '2. O material é enviado pelo WhatsApp?',
    answer: 'Sim! Logo após a confirmação, você recebe o link de acesso e as orientações direto no seu WhatsApp. Você pode abrir as aulas e os moldes no seu celular, tablet ou computador quando e onde quiser, sem precisar instalar aplicativos pesados.'
  },
  {
    id: 'faq-3',
    question: '3. Vou receber chinelos prontos pelo correio?',
    answer: 'Não. Este é um produto digital de ensino artesanal. Você recebe as videoaulas, os moldes e as orientações para você mesma produzir os seus chinelos em casa. Os chinelos físicos e os pares prontos não estão inclusos.'
  },
  {
    id: 'faq-4',
    question: '4. Como funcionam as videoaulas?',
    answer: 'As aulas são gravadas em vídeo com imagem bem nítida e explicações passo a passo em português simples. Você pode assistir quantas vezes precisar, pausar, voltar e fazer no seu próprio ritmo, sem pressa.'
  },
  {
    id: 'faq-5',
    question: '5. Quais materiais preciso comprar?',
    answer: 'Você vai precisar de chinelos lisos (como Havaianas ou similares), fio de náilon, agulha de costura manual, alicate pequeno de bijuteria e as contas ou pérolas da sua preferência. No primeiro módulo disponibilizamos a lista exata com as numerações certas para você não errar na hora de comprar no armarinho.'
  },
  {
    id: 'faq-6',
    question: '6. Qual é a diferença entre os três pacotes?',
    answer: 'O Pacote Essencial foca no aprendizado dos 15 modelos de chinelos com suas videoaulas e materiais de apoio. O Pacote Aprenda e Venda inclui todo o conteúdo do Essencial mais o guia passo a passo de como divulgar, precificar e vender na sua cidade. Já o Pacote Completo VIP é voltado para quem deseja acompanhar atualizações futuras e ter proximidade com a artesã.'
  },
  {
    id: 'faq-7',
    question: '7. Como faço para tirar minhas dúvidas?',
    answer: 'Você pode enviar suas mensagens diretamente pelo WhatsApp. Ficamos felizes em ajudar você a dar os primeiros passos e responder com toda a paciência e atenção que você merece.'
  },
  {
    id: 'faq-8',
    question: '8. Posso conhecer o material antes de pagar?',
    answer: 'Sim! Respeitamos muito a sua confiança. Antes de realizar o Pix, você pode conversar com a nossa equipe no WhatsApp, conferir a prévia do material, ver os detalhes de como o curso funciona e tirar qualquer dúvida com total calma e segurança.'
  }
];
