/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Shield } from 'lucide-react';

interface LegalModalProps {
  type: 'termos' | 'privacidade' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isTermos = type === 'termos';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E9D9F7] overflow-hidden max-h-[85vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-b border-[#E9D9F7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#7040A0]" />
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#4E2879]">
              {isTermos ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-[#33243D]/60 hover:text-[#4E2879] hover:bg-[#E9D9F7]/50 transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-[#33243D] leading-relaxed">
          {isTermos ? (
            <>
              <h4 className="font-bold text-[#4E2879]">1. Natureza do Produto</h4>
              <p>
                O produto "Chinelos da Ednice" é estritamente um curso e material didático digital de ensino artesanal. A aquisição de qualquer um dos pacotes concede acesso eletrônico a videoaulas demonstrativas, esquemas visuais e moldes em formato PDF. Nenhum produto físico (chinelos prontos, caixas ou materiais de confecção) está incluído no valor do curso.
              </p>

              <h4 className="font-bold text-[#4E2879]">2. Uso Pessoal e Intransferível</h4>
              <p>
                Os materiais fornecidos destinam-se ao aprendizado pessoal da aluna. É vedada a revenda, compartilhamento não autorizado de arquivos digitais, reprodução comercial das videoaulas ou distribuição em canais públicos.
              </p>

              <h4 className="font-bold text-[#4E2879]">3. Comercialização das Peças Produzidas</h4>
              <p>
                A aluna tem plena liberdade e incentivo para confeccionar e comercializar os chinelos físicos produzidos a partir das técnicas ensinadas, retendo 100% do lucro obtido com suas próprias vendas.
              </p>

              <h4 className="font-bold text-[#4E2879]">4. Atendimento e Suporte</h4>
              <p>
                O esclarecimento de dúvidas sobre a confecção dos modelos ocorre através do canal oficial de WhatsApp, respeitando os horários comerciais e a capacidade de atendimento da equipe artesanal.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-[#4E2879]">1. Coleta de Informações</h4>
              <p>
                Respeitamos a privacidade e a segurança das nossas visitantes. Este site não realiza coleta oculta de dados pessoais, não comercializa informações com terceiros e não utiliza rastreadores invasivos.
              </p>

              <h4 className="font-bold text-[#4E2879]">2. Contato via WhatsApp</h4>
              <p>
                Ao clicar nos botões de contato ou escolha de pacotes, a usuária é direcionada ao aplicativo do WhatsApp. Os dados trocados durante a conversa (como nome e número de telefone) são utilizados exclusivamente para esclarecimento de dúvidas, apresentação das aulas e orientações comerciais solicitadas voluntariamente pela cliente.
              </p>

              <h4 className="font-bold text-[#4E2879]">3. Pagamentos e Chaves Pix</h4>
              <p>
                As orientações de pagamento são transmitidas de forma transparente no canal de atendimento, sem intermediação de formulários de cartão de crédito não autorizados nesta página inicial.
              </p>

              <h4 className="font-bold text-[#4E2879]">4. Direitos da Titular</h4>
              <p>
                A qualquer momento, você poderá solicitar o encerramento do contato no WhatsApp e a exclusão das mensagens trocadas, conforme a Lei Geral de Proteção de Dados (LGPD).
              </p>
            </>
          )}
        </div>

        {/* Rodapé */}
        <div className="px-6 py-4 bg-[#FFF9FC] border-t border-[#E9D9F7] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-bold text-white bg-[#7040A0] hover:bg-[#4E2879] rounded-xl transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
