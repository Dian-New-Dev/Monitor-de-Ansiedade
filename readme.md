# MONITOR DE ANSIEDADE / ANXIETY TRACKER

## Descrição
* Projeto que objetiva criar uma aplicação web capaz de automatizar a prática de "Registro de Pensamentos Automáticos" (RPA), técnica de psicoterapia no tratamento de ansiedaede.
    - O projeto também objetiva funcionar como aprendizado pessoal no uso das seguintes tecnologias: React, Vite, Typescript, Tailwind, Node.Js, Express.
    - É meu primeiro projeto em React e minha primeira investida em backend.

## Tecnologias usadas:

### npm
    - ferramenta para instalação do Vite e dependências

### Vite
    - tecnologia usada para construção de projetos Front-end;
    - plataforma pela qual instalou-se React, Tailwind e Typescript de forma majoritariamente automática.

### React
    - framework do Javascript para construção de front-end via JSX

### Tailwind
    - postprocessor de CSS para estilização via uso de classes

### Typescript
    - tipagem adicional ao JS para maior controle e verificação de erros

### Enlist
    - 

### Node.Js

### Express

### Git
    - versionamento





## Aprendizado


### Propósito, origem e manuseio de arquivos:

#### Pasta Raíz

##### package-lock.json
    * **propósito**: registra a árvore de pacotes e dependências do projeto;
    * **origem**: instalado e atualizado automaticamente pelo npm durante instalação, remoção ou atualização de pacotes via npm
    * **manuseio**: geralmente não se mexe aqui.

##### package.json
    * **propósito**: principal arquivo de config do npm. Define nome, versão e scripts do projeto, bem como dependencias e ferramentas de desenvolvimento;
    * origem: instalado automaticamente pelo Node.js
    * manuseio: 
        - automático para dependências via npm (executar npm install após). Não é boa prática fazer alterações manuais aqui.
        - manual para scrips
        - manual para algumas ferramentas específicas
        - manual para metadados (versão, autor, descrição)
        - manual para possíveis conflitos de merge

##### postcss.config.js
    * **propósito**: configura o PostCSS, ferammenta que transforma CSS em plugins (neste projeto, Tailwind e autoprefixer)
    * origem: instalado automaticamente na instalação do Vite, via:

```console
        npm install -D tailwindcss postcss autoprefixer
        npx tailwindcss init -p
```
    * manuseio: geralmente não se mexe aqui, a menos para instalar plugins específicos (basta mencionar o nome).

##### tailwind.config.js
    * **propósito**: configura o Tailwind.
    * origem: criado automaticamente e alterado manualmente durante instalação do Vite.
    * Manuseio: manual, bastante comum.
        - adicionar mais arquivos ao content, a serem observados pelo Tailwind;
        - modificar o tema padrão do Tailwind;
        - adicionar plugins ao Tailwind.

##### tsconfig.json
    * **propósito**: principal arquivo de configuração do TS. No meu caso, ele apenas referencia outros dois arquivos (os 2 próximos, abaixo).
    * origem: provavelmente veio da instalação automática do Vite;
    * manuseio: manual apenas se for fazer referência a outros arquivos de configuração para além dos 2 automáticos.

##### tsconfig.app.json
    * **propósito**: configura como o Typescript processa arquivos .ts e .tsx. Configuração Frontend.
    * origem: criado automaticamente na instalação do Vite;
    * manuseio:
        - modifica-se opções neste arquivo para add ou remover biblitecas;
        - adiciona-se ou remove-se pastas verificadas pelo TS em "include" e "exclude";

##### tsconfig.node.json
    * **propósito**: o segundo arquivo referenciado de config do TS, agora para o backend/ ambiente Node.js. No meu caso, ele faz essa configuração ao referenciar um arquivo do vite.
    * Criado automaticamente pelo Vite;
    Manuseio: mesmo do anterior.

##### vite.config.ts
    * **propósito**: configura o Vite.
    * origem: criado automaticamentep por instalação do Vite.
    * manuseio: pode-se adicionar plugins adicionais por aqui, manualmente.