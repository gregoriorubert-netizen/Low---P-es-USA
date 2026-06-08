import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Recipes from './pages/Recipes';

function SafePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-white text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Blog de Receitas Saudáveis</h1>
      <p className="text-lg text-gray-600 max-w-2xl">
        Bem-vindo ao nosso blog! Aqui compartilhamos as melhores receitas para uma vida equilibrada.
        Descubra dicas de nutrição, preparos fáceis e muito mais.
      </p>
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

  if (isBot) {
    return <SafePage />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recepis" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
  );
}

