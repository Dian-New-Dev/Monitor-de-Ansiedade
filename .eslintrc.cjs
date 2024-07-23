module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true }, //"node: true" fui eu que coloquei, para indicar ao Eslint que o projeto também roda em Node, não só navagador 
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:node/recommended' //adicionado por mim para node.js
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

// este é um arquivo de configuração do ESLint, ferramenta de linting
// para JS e TS que ajuda a identificar e corrigir problemas de
// estilo e erros de código. É uma ferramenta de detecção de erros.

// provavelmente instalado automaticamente por algum pacote de dependênicas

// instalado desse jeito, o ESLint precisa de uso manual:
  // npm run lint = analisa o código e gera relatórios
  // a correção deverá ser feita manualmente

  // para feedback em tempo real, correções automáticas, ideal instalar
  // extensão VSCode ESLint, o qual faz uso desse aqui.