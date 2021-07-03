module.exports = {
  extends: ['standard', 'standard-jsx'],

  parserOptions: {
    ecmaFeatures: {
      classes: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },

  plugins: ['import', 'jsx-a11y', 'react'],

  root: true,

  rules: {
    'array-bracket-spacing': 'error',
    'array-callback-return': 'error',
    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
        imports: 'always-multiline',
        objects: 'always-multiline',
      },
    ],
    complexity: ['warn', 12],
    'dot-notation': 'error',
    eqeqeq: 'error',
    'guard-for-in': 'warn',
    'id-length': [
      'error',
      {
        exceptions: ['_', 'a', 'b', 'i', 'j', 'k', 'x', 'y', 'z'],
        properties: 'never',
      },
    ],
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/prefer-default-export': 'error',
    indent: 'off',
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'keyword-spacing': 'error',
    'linebreak-style': 'error',
    'max-depth': ['warn', 4],
    'max-len': 'off',
    'max-statements': ['warn', 30],
    'new-cap': 'error',
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3,
      },
    ],
    'no-confusing-arrow': 'off',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-extra-semi': 'error',
    'no-fallthrough': 'off',
    'no-loop-func': 'error',
    'no-mixed-operators': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: 'React',
      },
    ],
    'no-var': 'error',
    'object-property-newline': 'error',
    'object-shorthand': 'error',
    'operator-linebreak': ['error', 'after', {overrides: {':': 'before', '?': 'before'}}],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {array: false, object: false},
        VariableDeclarator: {array: true, object: true},
      },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    radix: 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: true,
      },
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
      },
    ],
    'react/jsx-wrap-multilines': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-string-refs': 'error',
    'react/prefer-es6-class': 'error',
    'react/require-render-return': 'error',
    'require-jsdoc': 'off',
    semi: ['error', 'always'],
    'sort-keys': [
      'error',
      'asc',
      {
        natural: true,
      },
    ],
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        asyncArrow: 'always',
        named: 'never',
      },
    ],
    'space-in-parens': 'error',
    'spaced-comment': 'error',
    'standard/computed-property-even-spacing': 'off',
    'template-curly-spacing': 'error',
    'valid-jsdoc': [
      'warn',
      {
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false,
      },
    ],
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
};
