# MONITOR DE ANSIEDADE / ANXIETY TRACKER

## Descrição
* Projeto que objetiva criar uma aplicação web capaz de automatizar a prática de "Registro de Pensamentos Automáticos" (RPA), técnica de psicoterapia no tratamento de ansiedade.

* O projeto também objetiva funcionar como aprendizado pessoal no uso das seguintes tecnologias: React, Vite, Typescript, Tailwind, Node.Js, Express, MongoDB.

* É meu primeiro projeto em React e minha primeira investida em backend.

* Se o projeto der certo, planejo convertê-lo em App mobile no futuro.

## Funcionalidade Pretendida
1) A aplicação fornece um formulário preenchível com todas as informações necessárias para um registro de RPA padrão:
    * Situação: onde e como o episódio de ansiedade se deu;
    * Sensações: o que a pessoa estava pensando;
    * Nível de ansiedade: de 1 a 5, onde 1 é ansiedade fraca e 5 é ataque de pânico;

2) Ao clicar em submeter, o usuário loga um novo registro em um banco de dados.

3) Ao registro, a aplicação automaticamente adiciona dados tais como horário, data, clima, local.

3) Esse novo registro é então renderizado na página da aplicação, onde fica disponível para consulta.

4) Registros posteriores vão sendo renderizados em forma de lista cronológica.

5) O usuário terá opção de deletar registros.

## Funcionalidade atual
1) Prenchimento de formulário.

2) Hora e data, por enquanto, manualmente preenchidos no formulário.

## Tecnologias usadas:

### npm

* Ferramenta para instalação do Vite e dependências.

### Vite

* Tecnologia usada para construção de projetos Front-end;

* Plataforma pela qual instalou-se React, Tailwind e Typescript de forma majoritariamente automática.

### React
* Framework do Javascript para construção de front-end via JSX.

### Tailwind
* Postprocessor de CSS para estilização via uso de classes.

### Typescript
* Tipagem adicional ao JS para maior controle e verificação de erros.

### ESLint
* Ferramenta de linting para JS e TS. Ferramenta de detecção de erros.

### Node.Js
* Criação de servidor para intermédio com Backend.

### Express

### Axios
* Usado para fazer requisição HTTP

### MongoDB
* Banco de dados

### MongoDB Compass
* Interface gráfica para uso do MongoDB.

### Git
* Versionamento do projeto.
* Push ao repositório online.





## Aprendizado Pessoal

### Notas
* O front-end e o back-end precisam de pastas node_modules e arquivos package-lock.json, package.json e tsconfig.json próprios, por isso estes aparecem duas vezes.

* O mesmo deve ser feito para o eslintrc.cjs:
    * frontend: react, tailwind, typescript
    * backend: noje.js e express, typescript

* O processo de debugging travou por horas pois não estava conseguindo fazer submissões do formulário chegarem no MondoBD Compass. Depois de muito tempo, descobri que precisava criar um arquivo chamado .env na pasta raiz, onde especifica-se a url de conexão com o MongoDB


### Propósito, origem e manuseio de arquivos:

#### Pasta Raíz / Frontend

##### eslint.cjs
**propósito**: configura o ESLint;

**origem**: instalado automaticamente por algum pacote de dependências via npm;

**manuseio**: não se mexe aqui, o programa funciona automaticamente se integrado com extensão VSCode.

--

##### package-lock.json
**propósito**: registra a árvore de pacotes e dependências do projeto;

**origem**: instalado e atualizado automaticamente pelo npm durante instalação, remoção ou atualização de pacotes via npm

**manuseio**: geralmente não se mexe aqui.

--

##### package.json
**propósito**: principal arquivo de config do npm. Define nome, versão e scripts do projeto, bem como dependencias e ferramentas de desenvolvimento;

**origem**: instalado automaticamente pelo Node.js:

**manuseio**: 
    * automático para dependências via npm (executar npm install após). Não é boa prática fazer alterações manuais aqui.
    * manual para scrips
    * manual para algumas ferramentas específicas
    * manual para metadados (versão, autor, descrição)
    * manual para possíveis conflitos de merge

--

##### postcss.config.js
**propósito**: configura o PostCSS, ferammenta que transforma CSS em plugins (neste projeto, Tailwind e autoprefixer);

**origem**: instalado automaticamente na instalação do Vite, via:

```console
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
```

**manuseio**: geralmente não se mexe aqui, a menos para instalar plugins específicos (basta mencionar o nome).

--

##### tailwind.config.js
**propósito**: configura o Tailwind;

**origem**: criado automaticamente e alterado manualmente durante instalação do Vite;

**Manuseio**: manual, bastante comum.
        - adicionar mais arquivos ao content, a serem observados pelo Tailwind;
        - modificar o tema padrão do Tailwind;
        - adicionar plugins ao Tailwind.

--

##### tsconfig.json
**propósito**: principal arquivo de configuração do TS. No meu caso, ele apenas referencia outros dois arquivos (os 2 próximos, abaixo);

**origem**: provavelmente veio da instalação automática do Vite;

**manuseio**: manual apenas se for fazer referência a outros arquivos de configuração para além dos 2 automáticos.

--

##### tsconfig.app.json
**propósito**: configura como o Typescript processa arquivos .ts e .tsx. Configuração Frontend;

**origem**: criado automaticamente na instalação do Vite;

**manuseio**:
        - modifica-se opções neste arquivo para add ou remover biblitecas;
        - adiciona-se ou remove-se pastas verificadas pelo TS em "include" e "exclude";

--

##### tsconfig.node.json
**propósito**: o segundo arquivo referenciado de config do TS, agora para o backend/ ambiente Node.js. No meu caso, ele faz essa configuração ao referenciar um arquivo do vite.

**origem**: criado automaticamente pelo Vite;

**manuseio**: mesmo do anterior.

--

##### vite.config.ts
**propósito**: configura o Vite;

**origem**: criado automaticamentep por instalação do Vite;

**manuseio**: pode-se adicionar plugins adicionais por aqui, manualmente.

#### Pasta Backend

##### Pasta models
**propósito**: armazena modelos e dados, necessário para um projeto que usa banco de dados.

##### Entry.ts
**propósito**: lida com o MongoDB e com o banco de dados, ao criar a estrutura de dados via EntrySchema. Faz uso de mongoose

##### Pasta routes
**propósito**: contém definições de endpoints de API para manipular requisições HTTP.

##### entries.ts
**propósito**: define rotas para a API do backend, usando Express. É quem permite operações de CRUD.

###### entryRoutes.ts
**propósito**: cria e armazena novas entradas no banco de dados, bem como a recuperação daquelas ali já armazenadas. Outro arquivo relacionado com CRUD.

##### database.ts
**propósito**: configura e gerencia conexão com o banco de dados

##### index.ts
**propósito**: ponto de entrada principal para o backend. É onde o servidor é iniciado.

##### database.ts
**propósito**: lida com a conexão do aplicativo Node,js e MongoDB

##### index.ts
**propósito**: configura o servidor e seus middlewares

## Atual estrutura de pastas

```markdown

anxiety-tracker
    backend
        node_modules
            (97 itens aqui)
        src
            models
                Entry.ts
            routes
                entries.ts
                entryRoutes.ts
            database.ts
            index.ts
        .eslintrc.cjs
        pacjage.json
        package-lock.jjson
        tsconfig.json
    node_modules
        (221 itens aqui)
    src
        components
            Entry.tsx
            FooterComponent.tsx
            HeaderComponent.tsx
            MainComponent.tsx
        App.tsx
        index.tsx
        main.tsx
        vite-env.d.ts
    .env
    .eslintrc.cjs
    .gitignore
    index.html
    package.json
    package-lock.json
    postcss.config.js
    readme.md
    tailwind.config.js
    tsconfig.app.json
    tsconfig.node.json
    vite.config.ts

```