import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Efeito para adicionar ou remover a classe 'dark' na tag <html>
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      
      {/* CABEÇALHO E NAVEGAÇÃO */}
      <header className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 shadow-sm dark:shadow-gray-950 fixed w-full top-0 z-10 transition-colors duration-300">
        <div className="text-xl font-bold">Caio Kfuri</div>
        <nav className="flex items-center space-x-6">
          <a href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400">Sobre Mim</a>
          <a href="#projetos" className="hover:text-blue-600 dark:hover:text-blue-400">Projetos</a>
          <a href="#experiencias" className="hover:text-blue-600 dark:hover:text-blue-400">Experiências</a>
          <a href="#contato" className="hover:text-blue-600 dark:hover:text-blue-400">Contato</a>
          <button className="font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">PT/EN</button>
          
          {/* BOTÃO DE TEMA */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
            aria-label="Alternar modo escuro"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
      </header>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="pt-24 px-8 max-w-6xl mx-auto space-y-24">
        
        {/* SEÇÃO: SOBRE MIM */}
        <section id="sobre" className="text-center py-20">
          <h1 className="text-5xl font-extrabold mb-4">Caio Kfuri</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 mb-6">Engenheiro de Software</h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 mb-8">
            Meu resumo...
          </p>
          <div className="space-x-4">
            <a href="#projetos" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
              + Ver Projetos
            </a>
            <a href="#contato" className="px-6 py-3 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors border border-transparent dark:border-gray-700">
              Entrar em Contato
            </a>
          </div>
        </section>

        {/* SEÇÃO: PROJETOS */}
        <section id="projetos" className="py-12">
          <h3 className="text-3xl font-bold mb-2">Projetos</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Linha do tempo cronológica com trabalhos recentes e contribuições técnicas relevantes.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">App 1</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Descrição</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">App 2</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Descrição 2</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
              <h4 className="text-xl font-bold mb-2">App 3</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Descrição 3</p>
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Ver no GitHub</a>
            </div>
          </div>
        </section>

        {/* SEÇÃO: EXPERIÊNCIAS */}
        <section id="experiencias" className="py-12">
          <h3 className="text-3xl font-bold mb-2">Experiências</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Trajetória acadêmica, atuações profissionais e projetos de colaboração aberta.</p>
          
          <div className="space-y-6">
            <div className="flex border-l-4 border-blue-600 dark:border-blue-500 pl-4">
              <div>
                <h4 className="text-xl font-bold">Estágio</h4>
                <span className="text-sm text-gray-400 dark:text-gray-500">Jan 2024 - Atual</span>
              </div>
            </div>
            <div className="flex border-l-4 border-gray-300 dark:border-gray-600 pl-4">
              <div>
                <h4 className="text-xl font-bold">Bacharel</h4>
                <span className="text-sm text-gray-400 dark:text-gray-500">2024 - 2028</span>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO: CONTATO */}
        <section id="contato" className="py-12 bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-100 dark:border-gray-700 transition-colors">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-4">Contato</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Buscando novas parcerias, propostas de emprego ou apenas trocar ideias? Fale Comigo!
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>meuemail@email.com</p>
                <p>+55 (31) 99999-8888</p>
                <p>linkedin.com/in/meulinkedin</p>
                <p>github.com/meugithub</p>
              </div>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome</label>
                <input type="text" placeholder="Digite seu nome completo" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">E-mail</label>
                <input type="email" placeholder="Digite seu email de contato" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem</label>
                <textarea rows="4" placeholder="Escreva sua mensagem" className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* RODAPÉ */}
      <footer className="text-center py-6 mt-12 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 transition-colors">
        <p>© 2026 Caio Kfuri. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}