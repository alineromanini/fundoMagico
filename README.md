# ✨ Fundo Mágico

O **Fundo Mágico** é uma aplicação web interativa que gera **gradientes de fundo personalizados** a partir de descrições em linguagem natural.  
Basta o usuário escrever como imagina o background, e a aplicação retorna automaticamente o **código HTML e CSS**, além de permitir a visualização do resultado.

O projeto combina **HTML, CSS e JavaScript** no frontend com **Inteligência Artificial**, utilizando o **n8n** para orquestrar o fluxo de geração dos fundos.

---

## 🔗 Demonstração

👉 **Aplicação online:**  
https://alineromanini.github.io/fundoMagico/

👉 **Repositório no GitHub:**  
https://github.com/alineromanini/fundoMagico

---

## 🧠 Como funciona

1. O usuário descreve o fundo desejado  
   *(ex: “um gradiente azul suave do claro para o escuro”)*  
2. A descrição é enviada via **fetch** para um **Webhook do n8n**  
3. O **n8n**, integrado com **IA**, interpreta o texto e gera:
   - Código **HTML**
   - Código **CSS** com gradiente
4. A aplicação exibe:
   - O **preview visual** do fundo
   - O **código HTML e CSS** prontos para uso

---

## 🛠️ Tecnologias utilizadas

- **HTML5** – Estrutura da aplicação  
- **CSS3** – Estilização e layout responsivo  
- **JavaScript (ES6+)** – Interações, requisições HTTP e manipulação do DOM  
- **Inteligência Artificial** – Geração dinâmica de gradientes a partir de texto  
- **n8n** – Orquestração do workflow e integração com IA  
- **GitHub Pages** – Deploy da aplicação  

---

## 📂 Estrutura do projeto

```bash
fundoMagico/
│
├── index.html
├── src/
│   ├── css/
│   │   ├── reset.css
│   │   ├── estilos.css
│   │   └── responsivo.css
│   └── js/
│       └── index.js
└── README.md

---
## 🚀 Como executar localmente

Clone o repositório:

git clone https://github.com/alineromanini/fundoMagico.git

Acesse a pasta do projeto:

cd fundoMagico

Abra o arquivo index.html no navegador ou utilize um servidor local (ex: Live Server).

⚠️ Para o funcionamento completo da IA, é necessário que o Webhook do n8n esteja ativo.

---

## 🔮 Possíveis melhorias futuras

Download do CSS gerado

Histórico de backgrounds criados

Mais opções de customização (ângulo, múltiplas cores, animações)

Preview em tempo real

Modo escuro

---

## 👩‍💻 Autora

Desenvolvido por Aline Romanini 💜
