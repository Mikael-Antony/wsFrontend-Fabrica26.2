# 🎮 OverPedia

> Uma enciclopédia interativa de heróis de **Overwatch**, desenvolvida com Next.js e integrada à OverFast API.

O **OverPedia** é um projeto acadêmico desenvolvido como desafio final do processo seletivo e formação da **Fábrica de Software 2026.2**.

A aplicação foi criada com o objetivo de praticar conceitos de desenvolvimento Front-End moderno, como **React, Next.js, TypeScript, consumo de APIs REST, componentização, arquitetura de projetos e desenvolvimento de interfaces responsivas**.

---

## ✨ Sobre o projeto

O OverPedia permite explorar informações dos heróis do universo de Overwatch através de uma interface inspirada na identidade visual do jogo.

Entre as principais funcionalidades estão:

* 🦸 Listagem dos heróis em uma grade responsiva;
* 🔎 Consulta de informações individuais dos personagens;
* 📄 Página de detalhes para cada herói;
* ❤️ Exibição de atributos e pontos de vida;
* ⚡ Informações sobre habilidades, perks e poderes;
* 📖 Descrições e informações narrativas;
* 🖼️ Utilização de imagens e elementos visuais dos personagens;
* 🔗 Navegação através de rotas dinâmicas do Next.js;
* 🌐 Consumo de dados em tempo real através de uma API externa.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia         | Utilização                            |
| ------------------ | ------------------------------------- |
| **Next.js 16**     | Framework principal da aplicação      |
| **React 19**       | Construção da interface e componentes |
| **TypeScript**     | Tipagem estática                      |
| **Tailwind CSS 4** | Estilização e responsividade          |
| **Axios**          | Comunicação com a API                 |
| **React Icons**    | Ícones da interface                   |
| **ESLint**         | Padronização e análise do código      |
| **Geist**          | Tipografia da aplicação               |

---

## 🌐 API

Os dados dos personagens são obtidos através da **OverFast API**, uma API pública que disponibiliza informações relacionadas aos heróis de Overwatch.

**API utilizada:**

[OverFast API](https://overfast-api.tekrop.fr?utm_source=chatgpt.com)

Entre os dados utilizados pela aplicação estão:

* Nome;
* Função;
* Descrição;
* Imagens;
* Habilidades;
* Perks;
* Poderes;
* Informações narrativas;
* Atributos dos personagens.

---

## 🏗️ Arquitetura

O projeto utiliza uma organização baseada na separação de responsabilidades entre **páginas, componentes e serviços**.

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── hero/
│       └── [key]/
│           └── page.tsx
│
├── components/
│   ├── apiUtilitaries/
│   │   ├── heroesCount.tsx
│   │   └── heroesGrid.tsx
│   │
│   ├── footer/
│   │   └── Footer.tsx
│   │
│   ├── header/
│   │   ├── Header.tsx
│   │   └── searchBar/
│   │       └── SearchBar.tsx
│   │
│   ├── hero/
│   │   └── Hero.tsx
│   │
│   └── heroes/
│       └── hero/
│           ├── TitleHeroSection.tsx
│           └── hitPoints/
│               └── HitPoints.tsx
│
└── services/
    ├── getHero.ts
    ├── getHeroes.ts
    └── overfastApi.ts
```

### Services

A comunicação com a API é centralizada na pasta `services`.

* `overfastApi.ts` — configuração da instância Axios;
* `getHeroes.ts` — consulta a lista de heróis;
* `getHero.ts` — consulta os dados de um herói específico.

Essa separação evita concentrar a lógica de comunicação HTTP diretamente nos componentes da interface.

---

## 📁 Principais componentes

### `Header`

Responsável pela navegação principal da aplicação e pelo campo de pesquisa.

### `Hero`

Componente responsável pela apresentação inicial da página principal.

### `HeroesGrid`

Renderiza os personagens retornados pela API em uma grade responsiva.

### `HitPoints`

Apresenta informações relacionadas aos pontos de vida do personagem.

### `TitleHeroSection`

Componente reutilizável para padronizar os títulos das diferentes seções da página de detalhes.

### `[key]`

Rota dinâmica responsável por gerar a página individual de cada herói.

Exemplo:

```text
/hero/tracer
/hero/reinhardt
/hero/genji
```

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone <URL_DO_REPOSITORIO>
```

### 2. Entre na pasta do projeto

```bash
cd wsFrontend-Fabrica26.2/overpedia
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse a aplicação

```text
http://localhost:3000
```

---

## 📜 Scripts disponíveis

```bash
npm run dev
```

Executa a aplicação em ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção da aplicação.

```bash
npm run start
```

Executa a aplicação em ambiente de produção.

```bash
npm run lint
```

Executa a análise estática do código utilizando ESLint.

---

## 🎓 Contexto acadêmico

O projeto foi desenvolvido durante a formação da **Fábrica de Software 2026.2**, com foco na aplicação prática de conceitos de desenvolvimento Front-End.

Durante o desenvolvimento foram trabalhados conceitos como:

* HTML, CSS e JavaScript;
* React;
* Next.js;
* TypeScript;
* Tailwind CSS;
* Consumo de APIs REST;
* Axios;
* Componentização;
* Organização e arquitetura de projetos;
* Clean Code;
* Git semântico;
* Documentação de software.

A utilização de bibliotecas e tecnologias adicionais foi realizada buscando compreender seu funcionamento e sua aplicação dentro do projeto.

---

## 🧹 Princípios de desenvolvimento

O projeto segue algumas práticas recomendadas durante a formação:

**Código limpo**

Busca por código legível, organizado e com responsabilidades bem definidas.

**Separação de responsabilidades**

A comunicação com a API é mantida separada da camada de apresentação através da pasta `services`.

**Componentização**

A interface é dividida em componentes reutilizáveis e organizados por responsabilidade.

**Git semântico**

O desenvolvimento utiliza commits com mensagens padronizadas e descritivas.

---

## 🔮 Próximos passos

Algumas melhorias podem ser implementadas futuramente:

* [ ] Refinar o sistema de pesquisa;
* [ ] Melhorar o tratamento de erros da API;
* [ ] Adicionar estados de carregamento;
* [ ] Aprimorar acessibilidade;
* [ ] Otimizar carregamento de imagens e vídeos;
* [ ] Melhorar tipagens e validações dos dados recebidos;
* [ ] Expandir o conteúdo das páginas dos heróis;
* [ ] Refinar a experiência de navegação e UX.

---

## 📄 Licença

Este projeto está disponível sob a licença definida no arquivo [`LICENSE`](./LICENSE).

---

## 👨‍💻 Projeto

**OverPedia**
Projeto acadêmico — Fábrica de Software 2026.2

Desenvolvido com React, Next.js, TypeScript e OverFast API.
