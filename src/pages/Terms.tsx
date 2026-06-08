import React from 'react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 sm:p-12 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Voltar para a página inicial</Link>
        <h1 className="text-3xl font-bold mb-8">Termos de Uso e Serviço</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Regras de Acesso e Propriedade Intelectual</h2>
            <p>Todo o conteúdo disponibilizado neste site (incluindo mas não se limitando a vídeos, PDFs, textos, áudios, imagens e e-books) é de propriedade exclusiva da Healthy Recipes LTDA e está protegido por leis de direitos autorais. O acesso adquirido a este infoproduto é pessoal e intransferível. É expressamente proibida a cópia, reprodução, distribuição, compartilhamento ou revenda não autorizada de qualquer material disponível.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Aviso de Isenção de Responsabilidade (Disclaimer de Resultados)</h2>
            <p>Os resultados referentes ao uso das nossas receitas e informações variam de pessoa para pessoa. Este conteúdo tem finalidade estritamente informativa e formativa. <strong>Não garantimos emagrecimento rápido, cura de doenças, ou resultados sem esforço.</strong> O sucesso nos resultados depende do comprometimento e das características individuais de cada usuário.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Política de Reembolso e Cancelamento</h2>
            <p>Você tem o direito de solicitar o reembolso integral da sua compra caso não fique satisfeito, dentro do prazo legal de garantia de 7 (sete) dias a partir da data da compra. Para acionar a garantia e solicitar a devolução do dinheiro, envie um e-mail para nossa equipe de suporte com os dados da compra e sua solicitação de estorno.</p>
            <p className="mt-2"><strong>E-mail de suporte:</strong> suporte@company.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
