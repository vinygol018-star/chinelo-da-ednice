/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Dados Centralizados das Aulas, Módulos e Materiais — Chinelos da Ednice
 * 10 Módulos Gratuitos Independentes na Área de Demonstração (total de 25 arquivos).
 * Seção Bloqueada com Módulos Comerciais Avançados.
 */

import { AccessTier } from '../config/siteConfig';

export interface CourseFileItem {
  id: string;
  title: string;
  type: 'video' | 'pdf';
  formatLabel: 'MP4' | 'PDF';
  durationOrPages?: string;
  isFreeInDemo: boolean;
  requiredTier: AccessTier;
  summary: string;
  videoUrl?: string; // Espaço para inserir o link de vídeo real
  pdfUrl?: string;   // Espaço para inserir o link de PDF real
  isPlaceholder?: boolean;
  previewData?: {
    steps?: string[];
    materials?: string[];
    tips?: string;
  };
}

export interface CourseModuleCategory {
  id: string;
  numberPrefix?: string;
  title: string;
  subtitle: string;
  badge?: string;
  isDemoFree?: boolean; // Se faz parte da amostra gratuita
  categoryGroup: 'comece-aqui' | 'modelos' | 'bloqueados';
  coverImage?: string;
  requiredTier: AccessTier;
  items: CourseFileItem[];
}

export const COURSE_MODULES_DATA: CourseModuleCategory[] = [
  // =========================================================================
  // 1. SEÇÃO GRATUITA: 10 MÓDULOS INDEPENDENTES ("👋 Comece por aqui")
  // =========================================================================

  // MÓDULO 1 — Primeiros Passos (3 arquivos)
  {
    id: 'demo-mod-1',
    numberPrefix: '1',
    title: '1 — Primeiros Passos',
    subtitle: 'Conhecendo materiais, preparação do chinelo e primeiros pontos.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    coverImage: '/src/assets/images/hero_chinelos_bordados_1793634256282.jpg',
    items: [
      {
        id: 'aula-1',
        title: 'Aula 1 — Conhecendo os materiais',
        type: 'video',
        formatLabel: 'MP4',
        durationOrPages: '12 min',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Apresentação detalhada de agulhas, fios de náilon recomendados, alicates e modelos de chinelos.',
        previewData: {
          steps: [
            'Diferença entre o náilon 0.30mm, 0.35mm e 0.40mm e quando usar cada um.',
            'Como escolher alicates de bico fino sem machucar as correias de borracha.',
            'A numeração correta das agulhas para passar pelas pérolas com facilidade.'
          ],
          materials: ['Agulhas de costura nº 7 ou 8', 'Fio de náilon 0.35mm', 'Alicate meia-cana macio', 'Tesoura de ponta fina'],
          tips: 'Dica da Ednice: Nunca use tesoura cega para cortar o náilon; um corte limpo evita desfiar a ponta na hora de enfiar na agulha.'
        }
      },
      {
        id: 'aula-2',
        title: 'Aula 2 — Como preparar o chinelo',
        type: 'video',
        formatLabel: 'MP4',
        durationOrPages: '9 min',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Técnica fácil para retirar as correias da sola sem rasgar a borracha e preparar a base de costura.',
        previewData: {
          steps: [
            'Como pressionar o encaixe do botão da correia sem esforço nos dedos.',
            'Limpeza e desengorduramento da tira com sabão neutro para maior aderência.',
            'Marcação simétrica dos pontos de início do bordado na correia.'
          ],
          materials: ['Par de chinelos lisos', 'Sabão neutro e pano limpo', 'Caneta de ponta fina ou giz de alfaiate'],
          tips: 'Se o botão do chinelo estiver muito duro, passe um pingo de detergente no furo para deslizar suavemente.'
        }
      },
      {
        id: 'aula-3',
        title: 'Aula 3 — Primeiros pontos do bordado',
        type: 'video',
        formatLabel: 'MP4',
        durationOrPages: '15 min',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'O passo a passo do primeiro nó, posicionamento correto da agulha e tensão certa do fio.',
        previewData: {
          steps: [
            'Como fazer o nó cego escondido na parte interna da correia.',
            'Técnica do ponto cruzado básico para fixação das primeiras pérolas.',
            'Controle de firmeza: nem frouxo a ponto de balançar, nem apertado demais.'
          ],
          materials: ['Fio de náilon 0.35mm', 'Pérolas brancas nº 6', 'Agulha nº 7'],
          tips: 'Borde com a mão relaxada. A cada 3 contas, puxe levemente o fio para acomodar a trama na correia.'
        }
      }
    ]
  },

  // MÓDULO 2 — Chinelos com Pérolas (2 arquivos)
  {
    id: 'demo-mod-2',
    numberPrefix: '2',
    title: '2 — Chinelos com Pérolas',
    subtitle: 'Confecção prática do modelo clássico com pérolas e tramas.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    coverImage: '/src/assets/images/chinelo_trama_perolas_1793634256722.jpg',
    items: [
      {
        id: 'aula-4',
        title: 'Aula 4 — Primeiro modelo com pérolas',
        type: 'video',
        formatLabel: 'MP4',
        durationOrPages: '18 min',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Confecção prática do início ao fim do modelo clássico de pérolas brancas.',
        previewData: {
          steps: [
            'Bordando o lado externo da correia com alinhamento perfeito.',
            'Como fazer a curva central do chinelo sem empavitar as contas.',
            'Finalização do lado interno mantendo a mesma contagem de pérolas.'
          ],
          materials: ['Chinelos tamanho 37/38', 'Pérolas brancas nº 8 e nº 6', 'Fio de náilon 0.35mm'],
          tips: 'Sempre conte quantas fileiras colocou no pé direito para repetir exatamente igual no pé esquerdo.'
        }
      },
      {
        id: 'ph-perolas-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 3 — Chinelos com Flores (4 arquivos)
  {
    id: 'demo-mod-3',
    numberPrefix: '3',
    title: '3 — Chinelos com Flores',
    subtitle: 'Montagem de flores delicadas em tecido e rosetas de cetim.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    coverImage: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    items: [
      {
        id: 'ph-flores-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-flores-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-flores-3',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-flores-4',
        title: 'Conteúdo a cadastrar',
        type: 'pdf',
        formatLabel: 'PDF',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de diagramação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 4 — Chinelos com Laços (2 arquivos)
  {
    id: 'demo-mod-4',
    numberPrefix: '4',
    title: '4 — Chinelos com Laços',
    subtitle: 'Laços clássicos Chanel, laço duplo romântico e apliques.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    coverImage: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    items: [
      {
        id: 'ph-lacos-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-lacos-2',
        title: 'Conteúdo a cadastrar',
        type: 'pdf',
        formatLabel: 'PDF',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de diagramação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 5 — Bordados Delicados (3 arquivos)
  {
    id: 'demo-mod-5',
    numberPrefix: '5',
    title: '5 — Bordados Delicados',
    subtitle: 'Tramas sutis em tons pastéis e combinações de texturas.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    items: [
      {
        id: 'ph-bordados-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-bordados-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-bordados-3',
        title: 'Conteúdo a cadastrar',
        type: 'pdf',
        formatLabel: 'PDF',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de diagramação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 6 — Modelos para Presentear (1 arquivo)
  {
    id: 'demo-mod-6',
    numberPrefix: '6',
    title: '6 — Modelos para Presentear',
    subtitle: 'Chinelos especiais para datas comemorativas e presentes afetivos.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    items: [
      {
        id: 'ph-presentear-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 7 — Chinelos Personalizados (4 arquivos)
  {
    id: 'demo-mod-7',
    numberPrefix: '7',
    title: '7 — Chinelos Personalizados',
    subtitle: 'Chinelos para noivas, kits Mãe e Filha e encomendas exclusivas.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    coverImage: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    items: [
      {
        id: 'ph-pers-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-pers-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-pers-3',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-pers-4',
        title: 'Conteúdo a cadastrar',
        type: 'pdf',
        formatLabel: 'PDF',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de diagramação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 8 — Acabamentos e Detalhes (2 arquivos)
  {
    id: 'demo-mod-8',
    numberPrefix: '8',
    title: '8 — Acabamentos e Detalhes',
    subtitle: 'Costura invisível, arremate seguro e cuidados com o peito do pé.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    items: [
      {
        id: 'guia-2',
        title: 'Guia PDF — Cuidados com o acabamento',
        type: 'pdf',
        formatLabel: 'PDF',
        durationOrPages: '3 páginas',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Manual ilustrado de costura invisível para o chinelo nunca machucar o peito do pé.',
        previewData: {
          steps: [
            'Como dar 3 voltas de segurança antes do corte final do náilon.',
            'Escondendo as sobras de linha por dentro das contas vizinhas.',
            'Dicas para o bordado resistir ao atrito do caminhar diário.'
          ],
          materials: ['Esquemas ilustrados com fotos em alta definição'],
          tips: 'O acabamento limpo é a assinatura de uma artesã caprichosa e garante que sua cliente volte sempre.'
        }
      },
      {
        id: 'ph-acabamentos-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 9 — Materiais e Ferramentas (3 arquivos)
  {
    id: 'demo-mod-9',
    numberPrefix: '9',
    title: '9 — Materiais e Ferramentas',
    subtitle: 'Checklist completo, fornecedores e tabelas de medidas.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    items: [
      {
        id: 'guia-1',
        title: 'Guia PDF — Lista de materiais',
        type: 'pdf',
        formatLabel: 'PDF',
        durationOrPages: '4 páginas',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Checklist completo para imprimir ou salvar no celular antes de ir ao armarinho.',
        previewData: {
          steps: [
            'Tabela com tamanhos e quantidades médias gastas por par de chinelos.',
            'Onde comprar os materiais mais baratos pela internet ou lojas físicas.',
            'Lista de substitutos quando você não encontrar a cor ou numeração exata.'
          ],
          materials: ['PDF pronto para impressão ou leitura em tela cheia'],
          tips: 'Você pode levar esta lista aberta no WhatsApp quando for fazer compras no armarinho do seu bairro.'
        }
      },
      {
        id: 'ph-materiais-2',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      },
      {
        id: 'ph-materiais-3',
        title: 'Conteúdo a cadastrar',
        type: 'pdf',
        formatLabel: 'PDF',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de diagramação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // MÓDULO 10 — Modelos Especiais (1 arquivo)
  {
    id: 'demo-mod-10',
    numberPrefix: '10',
    title: '10 — Modelos Especiais',
    subtitle: 'Demonstração de tramas tridimensionais e acabamentos nobres.',
    badge: 'GRÁTIS POR 12H',
    isDemoFree: true,
    categoryGroup: 'comece-aqui',
    requiredTier: 'DEMO',
    items: [
      {
        id: 'ph-especiais-1',
        title: 'Conteúdo a cadastrar',
        type: 'video',
        formatLabel: 'MP4',
        isFreeInDemo: true,
        requiredTier: 'DEMO',
        summary: 'Conteúdo em fase de gravação e preparação pela artesã Ednice.',
        isPlaceholder: true
      }
    ]
  },

  // =========================================================================
  // 2. SEÇÃO DE CONTEÚDOS BLOQUEADOS DOS PACOTES ("🔒 Desbloqueie mais modelos")
  // =========================================================================
  {
    id: 'mod-perolas',
    title: 'Chinelos com Pérolas',
    subtitle: 'Tramas rendadas, pérolas craqueladas, rendas francesas e variações de cores.',
    categoryGroup: 'modelos',
    requiredTier: 'INICIANTE',
    coverImage: '/src/assets/images/chinelo_trama_perolas_1793634256722.jpg',
    items: [
      { id: 'perola-1', title: 'Aula — Trama Renda Francesa Champagne', type: 'video', formatLabel: 'MP4', durationOrPages: '16 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Técnica sofisticada com pérolas champagne e entremeios dourados delicados.' },
      { id: 'perola-2', title: 'Aula — Pérolas Craqueladas com Manta Lateral', type: 'video', formatLabel: 'MP4', durationOrPages: '14 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Como estruturar o brilho lateral com costura reforçada.' },
      { id: 'perola-3', title: 'Aula — Trama Zig-Zag com Contas Facetadas', type: 'video', formatLabel: 'MP4', durationOrPages: '15 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Padrão em ondas que abraça a correia com elegância.' },
      { id: 'perola-pdf', title: 'Molde em PDF — Gráfico de Contagem das Tramas', type: 'pdf', formatLabel: 'PDF', durationOrPages: '5 páginas', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Esquema gráfico ponto a ponto com a numeração exata de contas.' }
    ]
  },
  {
    id: 'mod-flores',
    title: 'Chinelos com Flores',
    subtitle: 'Florais delicados em tecido, miçangas tecidas e rosetas de cetim.',
    categoryGroup: 'modelos',
    requiredTier: 'INICIANTE',
    coverImage: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    items: [
      { id: 'flor-1', title: 'Aula — Montagem de Flores de Tecido com Miolo em Pérola', type: 'video', formatLabel: 'MP4', durationOrPages: '13 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Como prensar e costurar as pétalas para durarem anos.' },
      { id: 'flor-2', title: 'Aula — Jardim de Margaridas em Miçangas Jablonex', type: 'video', formatLabel: 'MP4', durationOrPages: '17 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Flores tecidas uma a uma no náilon com miolo contrastante.' },
      { id: 'flor-3', title: 'Aula — Rosa Imperial em Cetim com Folhas Bordadas', type: 'video', formatLabel: 'MP4', durationOrPages: '15 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Modelo com flor volumosa central para presentes de Dia das Mães.' },
      { id: 'flor-pdf', title: 'Guia PDF — Passo a Passo dos Moldes de Flores', type: 'pdf', formatLabel: 'PDF', durationOrPages: '4 páginas', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Moldes para recortar e montar suas próprias flores em casa.' }
    ]
  },
  {
    id: 'mod-lacos',
    title: 'Chinelos com Laços',
    subtitle: 'Laços clássicos Chanel, laço duplo romântico e apliques com ponto de luz.',
    categoryGroup: 'modelos',
    requiredTier: 'INICIANTE',
    coverImage: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    items: [
      { id: 'laco-1', title: 'Aula — Laço Chanel Estruturado em Fita de Gorgurão', type: 'video', formatLabel: 'MP4', durationOrPages: '12 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'O segredo para o laço não amassar nem deformar com o uso.' },
      { id: 'laco-2', title: 'Aula — Laço Duplo Romântico em Tons Pastel', type: 'video', formatLabel: 'MP4', durationOrPages: '11 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Harmonia entre lavanda e rosa claro com acabamento em strass.' },
      { id: 'laco-3', title: 'Aula — Aplicação Segura do Broche de Strass no Miolo', type: 'video', formatLabel: 'MP4', durationOrPages: '8 min', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Como travar o aplique de metal para não soltar nem oxidar.' },
      { id: 'laco-pdf', title: 'Guia PDF — Medidas e Dobraduras de Fitas', type: 'pdf', formatLabel: 'PDF', durationOrPages: '3 páginas', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Tabela de comprimentos de fitas para cada numeração de chinelo.' }
    ]
  },
  {
    id: 'mod-pedrarias',
    title: 'Chinelos com Pedrarias',
    subtitle: 'Cabedais nobres, chatons lapidados, strass cristal e brilhos sofisticados.',
    categoryGroup: 'modelos',
    requiredTier: 'COMPLETO',
    coverImage: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    items: [
      { id: 'pedra-1', title: 'Aula — Realeza Esmeralda com Chatons Dourados', type: 'video', formatLabel: 'MP4', durationOrPages: '19 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Alinhamento de pedras lapidadas em verde esmeralda com costura dupla.' },
      { id: 'pedra-2', title: 'Aula — Cascata de Cristais Boreal Furta-Cor', type: 'video', formatLabel: 'MP4', durationOrPages: '16 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Efeito luminoso que brilha ao caminhar em dias ensolarados.' },
      { id: 'pedra-3', title: 'Aula — Cabedal Geométrico Rubi e Dourado', type: 'video', formatLabel: 'MP4', durationOrPages: '15 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Montagem em losangos com visual de alta joalheria artesanal.' },
      { id: 'pedra-pdf', title: 'Guia PDF — Como Conservar e Limpar Pedrarias', type: 'pdf', formatLabel: 'PDF', durationOrPages: '2 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Instruções para enviar para a cliente garantindo a durabilidade do brilho.' }
    ]
  },
  {
    id: 'mod-personalizados',
    title: 'Modelos Personalizados',
    subtitle: 'Chinelos para noivas, debutantes, kits Mãe e Filha e presentes especiais.',
    categoryGroup: 'modelos',
    requiredTier: 'COMPLETO',
    coverImage: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    items: [
      { id: 'pers-1', title: 'Aula — Chinelo Noiva Renda Guipir e Madrepérola', type: 'video', formatLabel: 'MP4', durationOrPages: '21 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'O modelo mais valorizado para casamentos e dia da noiva.' },
      { id: 'pers-2', title: 'Aula — Kit Mãe e Filha: Adaptação Adulto e Infantil', type: 'video', formatLabel: 'MP4', durationOrPages: '14 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Como adaptar a mesma trama para correias menores com total conforto.' },
      { id: 'pers-pdf', title: 'Catálogo de Inspirações para Encomendas Especiais', type: 'pdf', formatLabel: 'PDF', durationOrPages: '6 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Fotos prontas para você mostrar para futuras noivas e clientes.' }
    ]
  },
  {
    id: 'mod-guias',
    title: 'Guias e Materiais',
    subtitle: 'Apostilas complementares, listas de fornecedores e tabelas de medidas.',
    categoryGroup: 'modelos',
    requiredTier: 'INICIANTE',
    coverImage: '/src/assets/images/hero_chinelos_bordados_1793634256282.jpg',
    items: [
      { id: 'guia-geral-1', title: 'Apostila PDF — Dicionário de Contas, Pérolas e Fios', type: 'pdf', formatLabel: 'PDF', durationOrPages: '8 páginas', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Todas as numerações, gramaturas e tipos de peças explicados.' },
      { id: 'guia-geral-2', title: 'Tabela PDF — Numerações de Chinelos e Metragem de Fio', type: 'pdf', formatLabel: 'PDF', durationOrPages: '2 páginas', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: 'Quantos metros cortar de náilon para não faltar na metade da correia.' },
      { id: 'guia-geral-3', title: 'Checklist PDF — Lista de Verificação de Qualidade Final', type: 'pdf', formatLabel: 'PDF', durationOrPages: '1 página', isFreeInDemo: false, requiredTier: 'INICIANTE', summary: '5 pontos para checar antes de entregar o par para a cliente.' }
    ]
  },
  {
    id: 'mod-bloq-especiais',
    title: 'Modelos Especiais',
    subtitle: 'Técnicas com cabedais de luxo banhados e tramas tridimensionais.',
    categoryGroup: 'bloqueados',
    requiredTier: 'COMPLETO',
    items: [
      { id: 'bloq-1', title: 'Aula — Aplicação de Cabedal Luxo com Rebite Oculto', type: 'video', formatLabel: 'MP4', durationOrPages: '18 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Acabamento premium sem machucar os dedos dos pés.' },
      { id: 'bloq-2', title: 'Aula — Ponto Tridimensional com Pérolas Amora', type: 'video', formatLabel: 'MP4', durationOrPages: '16 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Efeito esférico em alto relevo super valorizado.' }
    ]
  },
  {
    id: 'mod-bloq-catalogo',
    title: 'Catálogo de Chinelos',
    subtitle: 'Modelos organizados prontos para envio de prévia a clientes.',
    categoryGroup: 'bloqueados',
    requiredTier: 'COMPLETO',
    items: [
      { id: 'bloq-3', title: 'Catálogo PDF — Mostruário com 15 Modelos Fotografados', type: 'pdf', formatLabel: 'PDF', durationOrPages: '12 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Material para compartilhar no WhatsApp de interessadas.' },
      { id: 'bloq-4', title: 'Guia PDF — Combinações de Cores Campeãs de Pedidos', type: 'pdf', formatLabel: 'PDF', durationOrPages: '4 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'As cores que mais vendem em cada época do ano.' }
    ]
  },
  {
    id: 'mod-bloq-producao',
    title: 'Guia de Produção',
    subtitle: 'Organização do ateliê em casa, velocidade e otimização do tempo.',
    categoryGroup: 'bloqueados',
    requiredTier: 'COMPLETO',
    items: [
      { id: 'bloq-5', title: 'Aula — Como Produzir um Par em Menos de 40 Minutos', type: 'video', formatLabel: 'MP4', durationOrPages: '14 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'O método da esteira artesanal para dobrar sua produtividade.' },
      { id: 'bloq-6', title: 'Guia PDF — Organização de Contas por Divisórias', type: 'pdf', formatLabel: 'PDF', durationOrPages: '3 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Economize tempo organizando suas caixas de artesanato.' }
    ]
  },
  {
    id: 'mod-bloq-vendas',
    title: 'Guia de Vendas e Clientes',
    subtitle: 'Como encontrar suas primeiras clientes, precificar e divulgar sem timidez.',
    categoryGroup: 'bloqueados',
    requiredTier: 'COMPLETO',
    items: [
      { id: 'bloq-7', title: 'Aula — Como Calcular o Preço Justo e Ter Bom Lucro', type: 'video', formatLabel: 'MP4', durationOrPages: '17 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Custo de materiais + valor da sua mão de obra sem medo de cobrar.' },
      { id: 'bloq-8', title: 'Aula — Como Divulgar para Vizinhas, Amigas e no WhatsApp', type: 'video', formatLabel: 'MP4', durationOrPages: '15 min', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Mensagens gentis que geram pedidos sem parecer insistente.' },
      { id: 'bloq-9', title: 'Guia PDF — Modelos Prontos de Mensagens para Clientes', type: 'pdf', formatLabel: 'PDF', durationOrPages: '5 páginas', isFreeInDemo: false, requiredTier: 'COMPLETO', summary: 'Textos fáceis de copiar e colar com toda a delicadeza.' }
    ]
  },
  {
    id: 'mod-bloq-complementares',
    title: 'Materiais Complementares',
    subtitle: 'Atualizações futuras, novos pontos e bônus da comunidade.',
    categoryGroup: 'bloqueados',
    requiredTier: 'PREMIUM',
    items: [
      { id: 'bloq-10', title: 'Apostila PDF — Novas Tramas Exclusivas da Ednice', type: 'pdf', formatLabel: 'PDF', durationOrPages: '10 páginas', isFreeInDemo: false, requiredTier: 'PREMIUM', summary: 'Acesso às criações recentes adicionadas à plataforma.' },
      { id: 'bloq-11', title: 'Canal de Novidades e Lançamentos em Primeira Mão', type: 'pdf', formatLabel: 'PDF', durationOrPages: 'Acesso VIP', isFreeInDemo: false, requiredTier: 'PREMIUM', summary: 'Receba novos moldes assim que forem gravados pela Ednice.' }
    ]
  }
];
