import React from 'react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-8 sm:p-12 md:p-24 font-sans">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Voltar para a página inicial</Link>
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">1. Identificação do Controlador</h2>
            <p><strong>Nome da Empresa:</strong> Healthy Recipes LTDA</p>
            <p><strong>CNPJ:</strong> 00.000.000/0001-00</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">2. Dados Coletados de Forma Direta</h2>
            <p>Ao realizar uma compra ou cadastro em nossas páginas, podemos coletar os seguintes dados pessoais:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Dados de pagamento (processados de forma segura por gateways parceiros)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">3. Uso de Tecnologias de Rastreamento</h2>
            <p>Nosso site utiliza Cookies, Web Beacons e Ferramentas de Negócios (como o Pixel da Meta/Facebook e Google Analytics) para entender o comportamento de navegação, melhorar a experiência do usuário, medir o desempenho de campanhas e exibir anúncios personalizados. Ao usar este site, você concorda com o uso dessas tecnologias.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">4. Compartilhamento com Terceiros</h2>
            <p>Para a prestação de nossos serviços, seus dados podem ser compartilhados com plataformas parceiras estritamente para o processamento de pagamentos (como Hotmart, Kiwify, etc.), entrega do produto e serviços de e-mail marketing. Não vendemos suas informações para terceiros.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-gray-900">5. Direitos do Titular (LGPD)</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar o acesso, a correção ou a exclusão imediata de seus dados pessoais armazenados por nós. Para exercer seus direitos, entre em contato através do nosso canal de atendimento.</p>
            <p className="mt-2"><strong>E-mail de contato para privacidade:</strong> privacidade@company.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
