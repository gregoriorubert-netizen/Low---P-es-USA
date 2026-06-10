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
          <h3 className="font-bold text-white text-base">Important Legal Notice</h3>
          <p className="leading-relaxed">
            This site is not affiliated with Facebook or any Facebook entity. Once you leave
            Facebook, it is no longer their responsibility but ours. Buying this material does not
            guarantee any kind of result. We make every effort to clearly indicate and show
            all real product proofs and we use actual results from our students. This website does not promote or
            sell products related to unapproved dietary supplements, or any other
            practices that violate Facebook policies or health laws.
            <br /><br />
            <strong>This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</strong>
          </p>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col items-center gap-4">
          <p><strong>Healthy Recipes LTDA - CNPJ: 00.000.000/0001-00</strong></p>
          <div className="flex gap-4 text-brand-orange">
            <Link to="/privacidade" className="hover:underline text-orange-500">Privacy Policy</Link>
            <span>|</span>
            <Link to="/termos" className="hover:underline text-orange-500">Terms of Use</Link>
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
        <Route path="/privacidade" element={<Privacy />} />
        <Route path="/termos" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

