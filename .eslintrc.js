module.exports = {
   root: true,
   env: {
      node: true,
      browser: true,
      es2020: true,
   },
   extends: ['eslint:recommended', '@vue/typescript/recommended'],
   parserOptions: {
      ecmaVersion: 2020,
   },
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
   },
};
