import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

const content = {
  pt: {
    nav: { about: 'Sobre Mim', projects: 'Projetos', exp: 'Experiências', contact: 'Contato' },
    hero: {
      title: 'Caio Kfuri',
      subtitle: 'Engenheiro de Software & Estagiário de TI',
      desc: 'Apaixonado por tecnologia desde cedo, encontrei na programação a capacidade de criar soluções e resolver problemas. Tenho 19 anos, curso o 4º período de Engenharia de Software e sou estagiário de infraestrutura na Aliança Energia, unindo a vivência corporativa ao desenvolvimento de software.',
      btnProjects: '+ Ver Projetos',
      btnContact: 'Entrar em Contato'
    },
    projects: {
      title: 'Projetos',
      desc: 'Linha do tempo cronológica com meus trabalhos mais recentes.',
      items: [
        { date: 'Março 2026', name: 'Sistema de Barbearia', desc: 'Projeto de prática full-stack focado no desenvolvimento de uma plataforma de gestão para barbearias, treinando a integração do backend com o frontend.' },
        { date: 'Janeiro 2026', name: 'Portfólio Pessoal', desc: 'Single Page Application (SPA) desenvolvida em React e Vite para apresentação da minha trajetória acadêmica e profissional.' },
        { date: 'Outubro 2025', name: 'MuuFarm', desc: 'Sistema de gestão de gado de corte, desenvolvido como projeto acadêmico em grupo na universidade.' }
      ]
    },
    exp: {
      title: 'Experiências',
      desc: 'Minha trajetória acadêmica e profissional atual.',
      items: [
        { 
          title: 'Estagiário de Suporte de TI | Help Desk', 
          date: 'Jan 2024 - Atual', 
          desc: '• Integração Corporativa: Configuração em massa de máquinas durante a aquisição da empresa.\n• Gestão de Chamados: Atendimento N1 e N2 (SLA), reduzindo o tempo de espera dos usuários.\n• Manutenção & Onboarding: Setup de hardware, impressoras de rede e preparação de equipamentos para novos funcionários.' 
        },
        { 
          title: 'Bacharelado em Engenharia de Software', 
          date: '2024 - 2028', 
          desc: 'Pontifícia Universidade Católica de Minas Gerais (PUC-Minas).' 
        }
      ]
    },
    contact: {
      title: 'Contato',
      desc: 'Buscando novas parcerias ou apenas trocar ideias? Fale Comigo!',
      nameLabel: 'Nome',
      emailLabel: 'E-mail',
      msgLabel: 'Mensagem',
      btnSend: 'Enviar Mensagem',
      formEmptyError: 'Por favor, preencha todos os campos.',
      formEmailError: 'Por favor, insira um e-mail válido.',
      formSuccess: 'Mensagem enviada com sucesso!'
    }
  },
  en: {
    nav: { about: 'About Me', projects: 'Projects', exp: 'Experiences', contact: 'Contact' },
    hero: {
      title: 'Caio Kfuri',
      subtitle: 'Software Engineer & IT Intern',
      desc: 'Passionate about technology since childhood, I found in programming the ability to create solutions and solve problems. I am 19 years old, in my 4th semester of Software Engineering, and currently an infrastructure intern at Aliança Energia, combining corporate experience with software development.',
      btnProjects: '+ View Projects',
      btnContact: 'Get in Touch'
    },
    projects: {
      title: 'Projects',
      desc: 'Chronological timeline featuring my recent work.',
      items: [
        { date: 'March 2026', name: 'Barbershop Management', desc: 'Full-stack practice project focused on building a management platform for barbershops, training frontend and backend integration.' },
        { date: 'January 2026', name: 'Personal Portfolio', desc: 'Single Page Application (SPA) developed with React and Vite to showcase my academic and professional journey.' },
        { date: 'October 2025', name: 'MuuFarm', desc: 'Collaborative cattle management system developed as a group academic project.' }
      ]
    },
    exp: {
      title: 'Experiences',
      desc: 'My academic and current professional background.',
      items: [
        { 
          title: 'IT Support Intern | Help Desk', 
          date: 'Jan 2024 - Present', 
          desc: "• Corporate Integration: Mass workstation configuration during a company acquisition.\n• Ticket Management: Tier 1 and 2 support (SLA), reducing user wait times.\n• Maintenance & Onboarding: Hardware setup, network printers, and equipment preparation for new hires." 
        },
        { 
          title: 'B.S. in Software Engineering', 
          date: '2024 - 2028', 
          desc: 'Pontifícia Universidade Católica de Minas Gerais (PUC-Minas).' 
        }
      ]
    },
    contact: {
      title: 'Contact',
      desc: 'Looking for new partnerships or just want to chat? Get in touch!',
      nameLabel: 'Name',
      emailLabel: 'Email',
      msgLabel: 'Message',
      btnSend: 'Send Message',
      formEmptyError: 'Please fill in all fields.',
      formEmailError: 'Please enter a valid email address.',
      formSuccess: 'Message sent successfully!'
    }
  }
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt');
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleLanguage = () => setLanguage(language === 'pt' ? 'en' : 'pt');

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      setFormError(content[language].formEmptyError);
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('error');
      setFormError(content[language].formEmailError);
      return;
    }

    setFormStatus('sending');

    try {
      const payload = new FormData();
      payload.append("access_key", "00c08109-e838-46fd-8253-1992a3997be1");
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload
      });

      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setFormStatus('error');
        setFormError(language === 'pt' ? 'Erro ao enviar. Tente novamente.' : 'Error sending. Try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormError(language === 'pt' ? 'Erro de conexão.' : 'Connection error.');
    }
    
    setTimeout(() => {
      setFormStatus('idle');
    }, 4000);
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans transition-colors duration-300">
      
      <header className="flex justify-between items-center p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-sm dark:shadow-gray-950 fixed w-full top-0 z-10 transition-colors duration-300">
        <div className="text-xl font-bold">Caio Kfuri</div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#sobre" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.nav.about}</a>
          <a href="#projetos" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.nav.projects}</a>
          <a href="#experiencias" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.nav.exp}</a>
          <a href="#contato" className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">{t.nav.contact}</a>
          
          <div className="flex items-center gap-2 border-l border-gray-300 dark:border-gray-700 pl-4">
            <button onClick={toggleLanguage} className="font-bold text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-28 px-6 md:px-8 max-w-5xl mx-auto space-y-32">
        
        <section id="sobre" className="text-center py-12 md:py-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">{t.hero.title}</h1>
          <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">{t.hero.subtitle}</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#projetos" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all">
              {t.hero.btnProjects}
            </a>
            <a href="#contato" className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold rounded-xl shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-gray-200 dark:border-gray-700">
              {t.hero.btnContact}
            </a>
          </div>
        </section>

        <section id="projetos">
          <h3 className="text-3xl font-bold mb-2">{t.projects.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-10">{t.projects.desc}</p>
          
          <div className="relative border-l-2 border-blue-200 dark:border-blue-900 ml-3 md:ml-6 space-y-12">
            {t.projects.items.map((proj, index) => (
              <div key={index} className="relative pl-8 md:pl-10">
                <div className="absolute w-4 h-4 bg-blue-600 dark:bg-blue-500 rounded-full -left-[9px] top-1.5 shadow-sm"></div>
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">{proj.date}</span>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{proj.name}</h4>
                <p className="text-gray-600 dark:text-gray-400">{proj.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experiencias">
          <h3 className="text-3xl font-bold mb-2">{t.exp.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-10">{t.exp.desc}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.exp.items.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-semibold rounded-full mb-4">
                  {exp.date}
                </span>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-4">{t.contact.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">{t.contact.desc}</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400"><Mail size={24} /></div>
                  <span className="font-medium">caioakfuri@outlook.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                  <div className="p-3 bg-blue-50 dark:bg-gray-700 rounded-full text-blue-600 dark:text-blue-400"><Phone size={24} /></div>
                  <span className="font-medium">+55 (31) 99893-3914</span>
                </div>
                <div className="flex gap-4 pt-4">
                  <a href="https://github.com/caiokfuri" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
                  </a>
                  <a href="https://linkedin.com/in/caiokfuri" target="_blank" rel="noreferrer" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleFormSubmit} className="space-y-5 bg-gray-50 dark:bg-gray-900/50 p-6 md:p-8 rounded-2xl">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.contact.nameLabel}</label>
                <input type="text" name="name" value={formData.name} onChange={handleFormChange} className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.contact.emailLabel}</label>
                <input type="email" name="email" value={formData.email} onChange={handleFormChange} className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t.contact.msgLabel}</label>
                <textarea rows="4" name="message" value={formData.message} onChange={handleFormChange} className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"></textarea>
              </div>
              
              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm font-medium">
                  <AlertCircle size={16} /> {formError}
                </div>
              )}
              {formStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm font-medium">
                  <CheckCircle size={16} /> {t.contact.formSuccess}
                </div>
              )}

              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === 'sending' 
                  ? (language === 'pt' ? 'Enviando...' : 'Sending...') 
                  : t.contact.btnSend}
              </button>
            </form>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 mt-20 text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        <p className="font-medium">© 2026 Caio Kfuri. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}