import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Recipes from './pages/Recipes';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function SafePage() {
  return (
    <div className="min-h-screen flex flex-col pt-8 bg-white text-gray-800">
      <div className="flex flex-col items-center justify-center p-8 text-center flex-grow">
        <h1 className="text-4xl font-bold mb-4">Blog de Receitas Saudáveis</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Bem-vindo ao nosso blog! Aqui compartilhamos as melhores receitas para uma vida equilibrada.
          Descubra dicas de nutrição, preparos fáceis e muito mais.
        </p>
      </div>

      <footer className="bg-black py-12 px-6 text-center text-white/70 text-sm mt-auto">
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          <h3 className="font-bold text-white text-base">Aviso Legal Importante</h3>
          <p className="leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair
            do Facebook, a responsabilidade não é deles e sim do nosso site. A compra desse material não
            garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar
            todas as provas do produto e usamos resultados reais de alunos. Este website não promove nem
            vende produtos relacionados a suplementos dietéticos não aprovados, ou quaisquer outras
            práticas que violem as políticas do Facebook ou leis de saúde.
            <br /><br />
            <strong>Este site não faz parte do website do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.</strong>
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col items-center gap-4">
          <p><strong>Healthy Recipes LTDA - CNPJ: 00.000.000/0001-00</strong></p>
          <div className="flex gap-4 text-brand-orange">
            <Link to="/privacidade" className="hover:underline text-orange-500">Política de Privacidade</Link>
            <span>|</span>
            <Link to="/termos" className="hover:underline text-orange-500">Termos de Uso</Link>
          </div>
          <p className="mt-4">© 2026 Healthy Recipes Co. Eat Right, Live Well, Feel Good.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    // Padrões de User Agent do crawler do Facebook/Meta
    const isFacebookBot = /facebookexternalhit|Facebot|facebookcatalog/i.test(userAgent);
    
    if (isFacebookBot) {
      setIsBot(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isBot ? <SafePage /> : <Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recepis" element={<Recipes />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

