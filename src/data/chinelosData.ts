/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Galeria dos 15 Modelos Artesanais — Chinelos da Ednice
 * As imagens podem ser facilmente substituídas pelos arquivos reais da marca.
 * Os fundos originais foram mantidos preservando o aspecto autêntico artesanal.
 */

export interface ChineloModel {
  id: string;
  number: number;
  title: string;
  category: 'perolas' | 'flores' | 'lacos' | 'pedrarias' | 'personalizados';
  categoryLabel: string;
  image: string;
  description: string;
  level: 'Iniciante' | 'Intermediário';
  highlight: string;
  materials: string[];
}

export const CHINELOS_MODELS: ChineloModel[] = [
  {
    id: 'modelo-01',
    number: 1,
    title: 'Trama Clássica em Pérolas Brancas',
    category: 'perolas',
    categoryLabel: 'Chinelos com pérolas',
    image: '/src/assets/images/chinelo_trama_perolas_1793634256722.jpg',
    description: 'Bordado em ponto cruzado com pérolas craqueladas e acabamento suave nas correias, ideal para quem está iniciando.',
    level: 'Iniciante',
    highlight: 'Modelo mais vendido para o dia a dia',
    materials: ['Pérolas brancas nº 6 e 8', 'Fio de náilon 0.35mm', 'Agulha nº 7', 'Alicate bico fino']
  },
  {
    id: 'modelo-02',
    number: 2,
    title: 'Floral Delicado com Laço Acetinado',
    category: 'flores',
    categoryLabel: 'Chinelos com flores',
    image: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    description: 'Combinação romântica de florzinhas em tecido modeladas à mão com laço duplo em fita de cetim rosa.',
    level: 'Iniciante',
    highlight: 'Acabamento delicado e feminino',
    materials: ['Flores de tecido prensadas', 'Fita de cetim rosa 15mm', 'Manta de strass cristal', 'Cola de silicone líquida']
  },
  {
    id: 'modelo-03',
    number: 3,
    title: 'Realeza Esmeralda com Strass Dourado',
    category: 'pedrarias',
    categoryLabel: 'Chinelos com pedrarias',
    image: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    description: 'Cabedal luxuoso com pedrarias lapidadas em verde esmeralda e chatons dourados de alto brilho.',
    level: 'Intermediário',
    highlight: 'Modelo de destaque para festas e eventos',
    materials: ['Pedras lapidadas esmeralda', 'Chatons dourados', 'Costura invisível com náilon 0.40mm']
  },
  {
    id: 'modelo-04',
    number: 4,
    title: 'Noiva Renda & Madrepérola',
    category: 'personalizados',
    categoryLabel: 'Modelos personalizados',
    image: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    description: 'Modelo exclusivo para casamentos, dia da noiva e debutantes, com renda guipir e botões de madrepérola.',
    level: 'Intermediário',
    highlight: 'Alta margem de lucro para encomendas',
    materials: ['Renda guipir branca', 'Botões de flor em madrepérola', 'Pérolas gota', 'Fio de seda encerado']
  },
  {
    id: 'modelo-05',
    number: 5,
    title: 'Trama Renda Francesa Champagne',
    category: 'perolas',
    categoryLabel: 'Chinelos com pérolas',
    image: '/src/assets/images/hero_chinelos_bordados_1793634256282.jpg',
    description: 'Ponto sofisticado estilo renda francesa com pérolas em tons champagne e entremeios dourados.',
    level: 'Iniciante',
    highlight: 'Design elegante e atemporal',
    materials: ['Pérolas cor champagne nº 8 e 4', 'Contas douradas', 'Fio de náilon 0.35mm']
  },
  {
    id: 'modelo-06',
    number: 6,
    title: 'Laço Chanel com Ponto de Luz',
    category: 'lacos',
    categoryLabel: 'Chinelos com laços',
    image: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    description: 'Laço estruturado estilo Chanel aplicado centralmente com miolo em strass brilhante.',
    level: 'Iniciante',
    highlight: 'Rápido de fazer e muito procurado',
    materials: ['Fita de gorgurão acetinada', 'Broche de strass', 'Fio de náilon reforçado']
  },
  {
    id: 'modelo-07',
    number: 7,
    title: 'Jardim de Margaridas em Miçangas',
    category: 'flores',
    categoryLabel: 'Chinelos com flores',
    image: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    description: 'Flores tecidas uma a uma com miçangas coloridas e miolo dourado, muito alegre e resistente.',
    level: 'Iniciante',
    highlight: 'Cores alegres e durabilidade',
    materials: ['Miçangas jablonex', 'Pérolas de miolo 4mm', 'Linha de náilon']
  },
  {
    id: 'modelo-08',
    number: 8,
    title: 'Cascata de Cristais Boreal',
    category: 'pedrarias',
    categoryLabel: 'Chinelos com pedrarias',
    image: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    description: 'Fileiras de cristais furta-cor que refletem a luz com elegância ao caminhar.',
    level: 'Intermediário',
    highlight: 'Brilho sofisticado que encanta',
    materials: ['Cristais de vidro furta-cor', 'Manta de strass prata', 'Fio 0.30mm duplo']
  },
  {
    id: 'modelo-09',
    number: 9,
    title: 'Pérolas Craqueladas com Strass Lateral',
    category: 'perolas',
    categoryLabel: 'Chinelos com pérolas',
    image: '/src/assets/images/chinelo_trama_perolas_1793634256722.jpg',
    description: 'Pérolas com efeito craquelado intercaladas com manta de strass ao longo de toda a correia.',
    level: 'Iniciante',
    highlight: 'Confortável e não machuca o peito do pé',
    materials: ['Pérolas craqueladas 10mm', 'Manta de strass ouro', 'Fio de náilon']
  },
  {
    id: 'modelo-10',
    number: 10,
    title: 'Laço Duplo Romântico em Tons Pastel',
    category: 'lacos',
    categoryLabel: 'Chinelos com laços',
    image: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    description: 'Laço duplo de fita suave com aplicação de meia-pérola no nó central.',
    level: 'Iniciante',
    highlight: 'Campeão de presentes para datas comemorativas',
    materials: ['Fita dupla lavanda e rosa', 'Meia-pérola autocolante fixada', 'Fio encerado']
  },
  {
    id: 'modelo-11',
    number: 11,
    title: 'Cabedal Geométrico Rubi e Dourado',
    category: 'pedrarias',
    categoryLabel: 'Chinelos com pedrarias',
    image: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    description: 'Montagem em losangos com pedras rubi facetadas e detalhes dourados.',
    level: 'Intermediário',
    highlight: 'Visual luxuoso de joalheria artesanal',
    materials: ['Pedras acrílicas facetadas rubi', 'Contas douradas banhadas', 'Náilon 0.40mm']
  },
  {
    id: 'modelo-12',
    number: 12,
    title: 'Personalizado Mãe e Filha',
    category: 'personalizados',
    categoryLabel: 'Modelos personalizados',
    image: '/src/assets/images/chinelo_personalizado_noiva_1793634272533.jpg',
    description: 'Adaptação do modelo adulto para par infantil combinando cores e apliques delicados.',
    level: 'Iniciante',
    highlight: 'Ótima oportunidade de vender 2 pares juntos',
    materials: ['Pérolas nº 6', 'Mini laços de cetim', 'Cola artesanal flexível']
  },
  {
    id: 'modelo-13',
    number: 13,
    title: 'Trama Zig-Zag em Pérolas e Cristais',
    category: 'perolas',
    categoryLabel: 'Chinelos com pérolas',
    image: '/src/assets/images/hero_chinelos_bordados_1793634256282.jpg',
    description: 'Bordado contínuo em formato de ondas e zigue-zague com pérolas e cristais nos ápices.',
    level: 'Intermediário',
    highlight: 'Técnica versátil para infinitas combinações',
    materials: ['Pérolas 8mm e 6mm', 'Cristais sextavados 4mm', 'Fio 0.35mm']
  },
  {
    id: 'modelo-14',
    number: 14,
    title: 'Rosa Imperial em Tecido e Pedraria',
    category: 'flores',
    categoryLabel: 'Chinelos com flores',
    image: '/src/assets/images/chinelo_flores_lacos_1793634258253.jpg',
    description: 'Aplique de flor volumosa com pétalas de cetim e folhas bordadas com micro-pérolas.',
    level: 'Intermediário',
    highlight: 'Perfeito para presentear mães e avós',
    materials: ['Flores modeladas em cetim', 'Micro-pérolas verdes', 'Base de feltro']
  },
  {
    id: 'modelo-15',
    number: 15,
    title: 'Brilho Noturno Grafite e Prata',
    category: 'pedrarias',
    categoryLabel: 'Chinelos com pedrarias',
    image: '/src/assets/images/chinelo_pedrarias_cristais_1793634271881.jpg',
    description: 'Chic e moderno com pedrarias fume e grafite em correia preta.',
    level: 'Iniciante',
    highlight: 'Coringa que combina com qualquer look',
    materials: ['Chatons grafite', 'Strass prata', 'Linha de náilon preta']
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'Todos os 15 modelos' },
  { id: 'perolas', label: 'Chinelos com pérolas' },
  { id: 'flores', label: 'Chinelos com flores' },
  { id: 'lacos', label: 'Chinelos com laços' },
  { id: 'pedrarias', label: 'Chinelos com pedrarias' },
  { id: 'personalizados', label: 'Modelos personalizados' },
] as const;
