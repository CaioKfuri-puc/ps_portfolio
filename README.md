# Portfólio Pessoal - Caio Kfuri e João Heleno

Um portfólio desenvolvido para apresentar nossos projetos, experiências e trajetória na área de Engenharia de Software.

🔗 **[Acessar o Portfólio Online na Nuvem](#)** *[https://caiokfuri-puc.github.io/ps_portfolio/]*  
🎨 **[Visualizar Wireframe Inicial em PDF](images/wireframePortfolio.pdf)**

---

## 🚀 Tecnologias e Dependências Utilizadas

Este projeto foi construído focando em performance e em um fluxo de desenvolvimento ágil:

*   **[React](https://react.dev/)**: Biblioteca base para a construção das interfaces e componentes.
*   **[Vite](https://vitejs.dev/)**: Ferramenta de build, escolhida por sua inicialização rápida e Hot Module Replacement (HMR).
*   **[Tailwind CSS (v4)](https://tailwindcss.com/)**: Framework CSS utilitário para estilização ágil e suporte nativo a Dark Mode.
*   **[Lucide React](https://lucide.dev/)**: Biblioteca utilizada para renderizar os ícones de forma limpa e vetorial.
*   **[Web3Forms](https://web3forms.com/)**: API utilizada para processar o formulário de contato sem necessidade de back-end próprio.

---

## 📂 Estrutura de Diretórios

```text
📁 raiz-do-repositorio/
├── 📁 code/
│   └── 📁 meu-portfolio/            # Raiz do projeto React/Vite
│       ├── 📁 public/
│       │   └── 📁 images/           # Imagens renderizadas no site
│       │       ├── folha.png
│       │       └── muufarm.png
│       ├── 📁 src/
│       │   ├── App.jsx              # Componente principal com dados e controle de estado
│       │   ├── index.css            # Importação do Tailwind e estilos globais
│       │   └── main.jsx             # Ponto de entrada do React
│       ├── .gitignore              
│       ├── eslint.config.js         
│       ├── index.html              
│       ├── package-lock.json        
│       ├── package.json             
│       └── vite.config.js          
├── 📁 images/                       
│   └── wireframePortfolio.pdf       # Wireframe exigido no laboratório
├── .DS_Store
└── README.md                        # Documentação principal
```

---

## ⚙️ Como Instalar e Executar Localmente

**Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

1. Clone este repositório para a sua máquina local:
```bash
git clone <URL_DO_REPOSITORIO_AQUI>
```

2. Navegue até a pasta raiz da aplicação React:
```bash
cd code/meu-portfolio
```

3. Instale todas as dependências necessárias listadas no `package.json`:
```bash
npm install
```

4. Inicie o servidor de desenvolvimento do Vite:
```bash
npm run dev
```

5. O terminal exibirá um link local. Segure `Ctrl` (ou `Cmd` no Mac) e clique no link (geralmente `http://localhost:5173`) para abrir o portfólio no seu navegador.
