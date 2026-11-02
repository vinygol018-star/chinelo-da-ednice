/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Estrutura Modular da Área de Conteúdos — Estilo Plataforma
 * Permite editar módulos, aulas e prévias sem inventar videoaulas fictícias.
 * Exibe capas reais e estados de prévia claramente identificados.
 */

export interface LessonItem {
  id: string;
  title: string;
  durationLabel: string;
  type: 'video' | 'pdf' | 'guia';
  summary: string;
}

export interface CourseModule {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  coverImage: string;
  badge: string;
  description: string;
  lessons: LessonItem[];
}

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'modulo-01',
    number: 1,
    title: 'Módulo 1 — Primeiros passos',
    subtitle: 'Lista de materiais, ferramentas e preparação',
    coverImage: '/src/assets/images/hero_chinelos_bordados_1793634256282.jpg',
    badge: 'Fundamentos',
    description: 'Tudo o que você precisa saber antes de dar os primeiros pontos: escolha dos chinelos, numeração correta de agulhas e fios de náilon, alicates e organização da sua mesa de trabalho.',
    lessons: [
      { id: '1-1', title: 'Apresentação do material e ferramentas essenciais', durationLabel: '12 min', type: 'video', summary: 'Conheça cada item sem gastar dinheiro com materiais desnecessários.' },
      { id: '1-2', title: 'Como escolher a sola e soltar as correias sem estragar', durationLabel: '8 min', type: 'video', summary: 'Técnica simples para retirar e recolocar as correias com segurança.' },
      { id: '1-3', title: 'Tipos de fios de náilon e agulhas recomendadas', durationLabel: '10 min', type: 'video', summary: 'Qual espessura usar para não arrebentar e não machucar as mãos.' },
      { id: '1-4', title: 'Guia de bolso: Lista de compras para imprimir ou salvar', durationLabel: 'PDF de apoio', type: 'pdf', summary: 'Lista prática para levar no armarinho da sua cidade.' }
    ]
  },
  {
    id: 'modulo-02',
    number: 2,
    title: 'Módulo 2 — Chinelos com pérolas',
    subtitle: 'Modelos decorados e técnicas de acabamento',
    coverImage: '/src/assets/images/chinelo_trama_perolas_1793634256722.jpg',
    badge: 'Técnica Principal',
    description: 'Aprenda o clássico bordado em pérolas. Técnicas de ponto cruzado, trama reta, renda francesa e costura invisível que não incomoda os pés.',
    lessons: [
      { id: '2-1', title: 'Trama simples de pérolas para correia estreita (Slim)', durationLabel: '15 min', type: 'video', summary: 'O modelo mais pedido e mais rápido para quem está começando.' },
      { id: '2-2', title: 'Trama de pérolas craqueladas e entremeios dourados', durationLabel: '18 min', type: 'video', summary: 'Como intercalar tamanhos e cores para um efeito luxuoso.' },
      { id: '2-3', title: 'Técnica de costura invisível e arremate seguro', durationLabel: '14 min', type: 'video', summary: 'Como esconder o nó para o bordado durar anos sem soltar.' },
      { id: '2-4', title: 'Passo a passo com fotos ampliadas da trama', durationLabel: 'PDF de apoio', type: 'pdf', summary: 'Moldes e esquemas visuais com a contagem exata de contas.' }
    ]
  },
  {
    id: 'modulo-03',
    number: 3,
    title: 'Módulo 3 — Chinelos com flores e laços',
    subtitle: 'Produção de modelos artesanais delicados',
    coverImage: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    badge: 'Artesanato Delicado',
    description: 'Como criar e fixar laços estruturados de fita de cetim e gorgurão, flores de tecido e apliques românticos com acabamento profissional.',
    lessons: [
      { id: '3-1', title: 'Confecção do laço duplo estruturado', durationLabel: '13 min', type: 'video', summary: 'O segredo para o laço ficar firme e simétrico sem amassar.' },
      { id: '3-2', title: 'Aplicação de florzinhas de tecido e miolo em pérolas', durationLabel: '16 min', type: 'video', summary: 'Costura reforçada que aguenta lavagens e uso contínuo.' },
      { id: '3-3', title: 'Combinação de cores suaves: rosa, lavanda e bege', durationLabel: '9 min', type: 'video', summary: 'Harmonização de tons para peças elegantes.' }
    ]
  },
  {
    id: 'modulo-04',
    number: 4,
    title: 'Módulo 4 — Modelos especiais',
    subtitle: 'Ideias modernas e personalizadas',
    coverImage: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    badge: 'Modelos Exclusivos',
    description: 'Modelos temáticos com rendas, cabedais prontos, modelos para noivas e datas comemorativas que agregam alto valor ao seu trabalho.',
    lessons: [
      { id: '4-1', title: 'Chinelo noiva com renda guipir e madrepérola', durationLabel: '20 min', type: 'video', summary: 'Como produzir o modelo mais cobiçado para casamentos e presentes.' },
      { id: '4-2', title: 'Combinação Mãe e Filha (tamanhos adulto e infantil)', durationLabel: '14 min', type: 'video', summary: 'Dicas de adaptação de tamanho e correias menores.' },
      { id: '4-3', title: 'Catálogo de inspirações sazonais (Natal, Dia das Mães)', durationLabel: 'Guia visual', type: 'guia', summary: 'Ideias para faturar alto em datas comemorativas do ano.' }
    ]
  },
  {
    id: 'modulo-05',
    number: 5,
    title: 'Módulo 5 — Acabamento e organização',
    subtitle: 'Cuidados com os detalhes e organização da produção',
    coverImage: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    badge: 'Qualidade & Durabilidade',
    description: 'O acabamento é o que diferencia um chinelo caseiro de uma peça que você vende por valor alto. Como cuidar de cada detalhe com carinho.',
    lessons: [
      { id: '5-1', title: 'Revisão final: teste de resistência da costura', durationLabel: '7 min', type: 'video', summary: 'Checklist para garantir que a cliente receba uma peça impecável.' },
      { id: '5-2', title: 'Dicas para proteger a sola e não manchar as correias', durationLabel: '6 min', type: 'video', summary: 'Higiene e cuidados durante a produção na mesa de casa.' },
      { id: '5-3', title: 'Organização da sua caixa de materiais', durationLabel: '8 min', type: 'video', summary: 'Como separar contas e sobras para economizar tempo.' }
    ]
  },
  {
    id: 'modulo-06',
    number: 6,
    title: 'Módulo 6 — Como apresentar seus chinelos',
    subtitle: 'Prévia de catálogo e apresentação dos modelos',
    coverImage: '/src/assets/images/ednice_artesa_retrato_1793634258803.jpg',
    badge: 'Apresentação & Vendas',
    description: 'Como tirar fotos bonitas dos seus chinelos usando a câmera do seu celular, montar sacolinhas com carinho e encantar as primeiras pessoas que virem seu trabalho.',
    lessons: [
      { id: '6-1', title: 'Como tirar fotos bonitas com a luz da janela', durationLabel: '11 min', type: 'video', summary: 'Dicas fáceis para fotografar com seu próprio celular sem complicação.' },
      { id: '6-2', title: 'Embalagens simples e carinhosas que valorizam a peça', durationLabel: '9 min', type: 'video', summary: 'Saquinhos de organza, tags artesanais e cheirinho para encantar.' },
      { id: '6-3', title: 'Modelo de mensagem para apresentar os chinelos no WhatsApp', durationLabel: 'Guia de texto', type: 'guia', summary: 'Textos gentis e educados para mostrar seu trabalho para amigas.' }
    ]
  }
];
