# OverPedia

Projeto acadêmico desenvolvido como desafio final do processo seletivo / formação da Fábrica de Software 2026.2. A aplicação foi criada para explorar a construção de uma interface web de consulta de heróis do universo Overwatch, consumindo dados de uma API pública e apresentando os personagens em uma experiência visual inspirada no estilo do jogo.

## Visão geral

O OverPedia é uma aplicação web que permite:

- visualizar uma grade de heróis;
- acessar informações detalhadas de cada personagem;
- consultar atributos, habilidades, perks, poderes e histórias;
- navegar entre páginas com roteamento dinâmico em Next.js.

O projeto foi pensado como uma demonstração prática de front-end moderno, integrando consumo de API, renderização de componentes, organização de pastas e usabilidade em páginas de conteúdo.

## Contexto acadêmico

Este projeto foi desenvolvido em um ambiente educacional com foco em:

- aprendizado de desenvolvimento web com React e Next.js;
- organização de projetos em arquitetura de componentes;
- consumo de APIs REST com Axios;
- criação de interfaces responsivas e estilização com Tailwind CSS;
- aplicação de conceitos de trabalho em equipe, documentação e apresentação de protótipos.

Dessa forma, o app funciona como um projeto didático e de portfólio, sendo voltado para estudo, validação de conceitos e apresentação do aprendizado adquirido durante a formação.

## Stack tecnológica

A aplicação foi construída com as seguintes tecnologias e bibliotecas:

- Next.js 16.3.3
- React 19.2.8
- React DOM 19.2.8
- TypeScript 5
- Tailwind CSS 4
- Axios 1.20.0
- React Icons 5.7.0
- ESLint 9
- Geist e Geist Mono (fontes do Next.js via next/font/google)

### API utilizada

Os dados dos personagens são obtidos por meio da API pública Overfast:

- https://overfast-api.tekrop.fr

A API fornece informações sobre os heróis, incluindo nome, função, descrição, habilidades, perks, imagens e dados de narrativa.

## Estrutura do projeto

A estrutura principal do repositório está organizada da seguinte forma:

```text
wsFrontend-Fabrica26.2/
├── README.md
├── LICENSE
└── overpedia/
    ├── package.json
    ├── next.config.ts
    ├── tsconfig.json
    ├── eslint.config.mjs
    ├── postcss.config.mjs
    ├── next-env.d.ts
    ├── public/
    │   ├── Overwatch_Icon.png
    │   └── Overpedia_hero_image.png
    └── src/
        ├── app/
        │   ├── globals.css
        │   ├── layout.tsx
        │   ├── page.tsx
        │   └── hero/
        │       └── [key]/
        │           └── page.tsx
        ├── components/
        │   ├── apiUtilitaries/
        │   │   ├── heroesCount.tsx
        │   │   └── heroesGrid.tsx
        │   ├── footer/
        │   │   └── Footer.tsx
        │   ├── header/
        │   │   ├── Header.tsx
        │   │   └── searchBar/
        │   │       └── SearchBar.tsx
        │   ├── hero/
        │   │   └── Hero.tsx
        │   └── heroes/
        │       └── hero/
        │           ├── TitleHeroSection.tsx
        │           └── hitPoints/
        │               └── HitPoints.tsx
        └── services/
            ├── getHero.ts
            ├── getHeroes.ts
            └── overfastApi.ts
```

## Organização funcional

### 1. Camada de serviços

Na pasta `src/services`, a comunicação com a API acontece por meio de módulos dedicados:

- `overfastApi.ts`: instância central do cliente Axios;
- `getHeroes.ts`: busca a lista completa de heróis;
- `getHero.ts`: busca os detalhes de um personagem específico pelo identificador `key`.

### 2. Rotas da aplicação

Dentro de `src/app`:

- `page.tsx`: página inicial com o banner inicial e a grade de heróis;
- `layout.tsx`: estrutura global da aplicação, com `Header`, `Footer` e estilos base;
- `hero/[key]/page.tsx`: rota dinâmica para mostrar a ficha completa do herói.

### 3. Componentes reutilizáveis

Os componentes são separados por responsabilidade:

- `Header`: navegação principal do site;
- `Footer`: rodapé da aplicação;
- `Hero`: seção introdutória da home;
- `HeroesGrid`: renderiza os cards dos heróis;
- `HitPoints`: mostra as estatísticas do personagem;
- `TitleHeroSection`: titulação de seções do perfil do herói.

### 4. Estilo e apresentação

A estilização foi feita com Tailwind CSS, com uso de classes responsivas e visual em tema escuro, tendo como referência a identidade visual de Overwatch e a apresentação de grandes informações em interfaces dinâmicas.

## Funcionalidades implementadas

- listagem dos heróis em grid responsiva;
- navegação por página de detalhes do personagem;
- carregamento de dados em tempo real da API externa;
- apresentação de atributos e descrições dos heróis;
- exibição de habilidades, perks, poderes e história;
- uso de imagens, vídeos e backgrounds para enriquecer a apresentação.

## Como executar o projeto

1. Acesse a pasta do projeto:

```bash
cd overpedia
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra o navegador em:

```text
http://localhost:3000
```

## Scripts disponíveis

No arquivo `package.json`, o projeto inclui os seguintes comandos:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Observações sobre o desenvolvimento

Este é um projeto acadêmico e experimental, portanto sua estrutura reflete um processo de estudo e prototipação. Há componentes que demonstram o uso da arquitetura de aplicações modernas com Next.js, mas também deixam espaço para evoluções futuras, como:

- refinamento do campo de busca;
- otimização de carregamento de imagens e vídeos;
- ajustes de acessibilidade e UX;
- melhor organização de tipagens e validações de dados;
- expansão do conteúdo e melhorias visuais.

## Conclusão

O OverPedia representa uma aplicação front-end funcional e visualmente orientada ao universo de Overwatch, com foco em consumo de dados, organização de componentes e criação de experiências de navegação. Como projeto acadêmico, ele evidencia os conceitos aprendidos durante a formação e serve como base para futuras melhorias e adaptações em contextos profissionais.

---

