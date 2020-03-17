// npm i -g eslint eslint-plugin-react eslint-plugin-react-hooks babel-eslint

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // common errors
    'for-direction': 'error',
    'getter-return': [ 'error', {
      allowImplicit: true
    } ],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [ 'error', 'always' ],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': [ 'warn', 'all', {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      ignoreJSX: 'all',
      enforceForArrowConditionals: false,
    } ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-negated-in-lhs': 'off',
    'require-atomic-updates': 'off',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': [ 'error', {
      requireStringLiterals: true
    } ],

    // es6
    'arrow-body-style': [ 'error', 'as-needed', {
      requireReturnForObjectLiteral: false,
    } ],
    'arrow-parens': [ 'warn', 'as-needed', {
      'requireForBlockBody': true
    } ],
    'arrow-spacing': [ 'error', {
      before: true,
      after: true
    } ],
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', {
      before: false,
      after: true
    } ],
    'no-class-assign': 'error',
    'no-confusing-arrow': [ 'error', {
      allowParens: true,
    } ],
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-new-symbol': 'error',
    'no-restricted-imports': [ 'off', {
      paths: [],
      patterns: []
    } ],
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [ 'error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    } ],
    'no-var': 'error',
    'object-shorthand': [ 'error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    } ],
    'prefer-arrow-callback': [ 'error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    } ],
    'prefer-const': [ 'error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    } ],
    'prefer-destructuring': [ 'error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
        enforceForRenamedProperties: false,
      } ],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'sort-imports': [ 'warn', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: [ 'none', 'all', 'multiple', 'single' ],
    } ],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': [ 'error', 'after' ],

    // node
    'callback-return': 'off',
    'global-require': 'error',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': [ 'off', false ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // style
    'array-bracket-newline': [ 'off', 'consistent' ],
    'array-element-newline': [ 'warn', {
      multiline: true,
      minItems: 3
    } ],
    'array-bracket-spacing': [ 'error', 'never' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', '1tbs', {
      allowSingleLine: true
    } ],
    camelcase: [ 'error', {
      properties: 'never',
      ignoreDestructuring: false
    } ],
    'capitalized-comments': [ 'off', 'never', {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    } ],
    'comma-dangle': [ 'error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    } ],
    'comma-spacing': [ 'error', {
      before: false,
      after: true
    } ],
    'comma-style': [ 'error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    } ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': 'off',
    'eol-last': [ 'error', 'never' ],
    'func-call-spacing': [ 'error', 'never' ],
    'func-name-matching': [ 'off', 'always', {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    } ],
    'func-names': 'warn',
    'func-style': [ 'off', 'expression' ],
    'function-paren-newline': [ 'error', 'consistent' ],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'implicit-arrow-linebreak': [ 'error', 'beside' ],
    indent: [ 'warn', 4, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1
      },
      FunctionExpression: {
        parameters: 1,
        body: 1
      },
      CallExpression: {
        arguments: 1
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoredNodes: [ 'JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild' ],
      ignoreComments: false
    } ],
    'key-spacing': [ 'error', {
      beforeColon: false,
      afterColon: true
    } ],
    'keyword-spacing': [ 'error', {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true
        },
        throw: {
          after: true
        },
        case: {
          after: true
        }
      }
    } ],
    'line-comment-position': [ 'off', {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    } ],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-between-class-members': [ 'error', 'always', {
      exceptAfterSingleLine: false
    } ],
    'lines-around-comment': 'off',
    'lines-around-directive': [ 'error', {
      before: 'always',
      after: 'always',
    } ],
    'max-depth': [ 'off', 4 ],
    'max-len': [ 'error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    } ],
    'max-lines': [ 'off', {
      max: 300,
      skipBlankLines: true,
      skipComments: true
    } ],
    'max-lines-per-function': [ 'off', {
      max: 30,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    } ],
    'max-nested-callbacks': 'off',
    'max-params': [ 'off', 3 ],
    'max-statements': [ 'off', 10 ],
    'max-statements-per-line': [ 'off', {
      max: 1
    } ],
    'multiline-comment-style': [ 'warn', 'starred-block' ],
    'multiline-ternary': [ 'off', 'never' ],
    'new-cap': [ 'error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [ 'Immutable.Map', 'Immutable.Set', 'Immutable.List' ],
    } ],
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': [ 'warn', {
      ignoreChainWithDepth: 4
    } ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': [ 'error', {
      groups: [
        [ '%', '**' ],
        [ '%', '+' ],
        [ '%', '-' ],
        [ '%', '*' ],
        [ '%', '/' ],
        [ '/', '*' ],
        [ '&', '|', '<<', '>>', '>>>' ],
        [ '==', '!=', '===', '!==' ],
        [ '&&', '||' ],
      ],
      allowSamePrecedence: false
    } ],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': [ 'error' ],
    'no-multiple-empty-lines': [ 'error', {
      max: 2,
      maxBOF: 1,
      maxEOF: 0
    } ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': [ 'error', {
      skipBlankLines: false,
      ignoreComments: false,
    } ],
    'no-underscore-dangle': [ 'error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    } ],
    'no-unneeded-ternary': [ 'error', {
      defaultAssignment: false
    } ],
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [ 'error', 'beside', {
      overrides: {}
    } ],
    'object-curly-spacing': [ 'error', 'never' ],
    'object-curly-newline': [ 'error', {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ObjectPattern: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true
      },
    } ],
    'object-property-newline': [ 'error', {
      allowAllPropertiesOnSameLine: true,
    } ],
    'one-var': [ 'error', 'never' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'before', {
      overrides: {
        '=': 'none'
      }
    } ],
    'padded-blocks': [ 'error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
    }, {
        allowSingleLineBlocks: true,
      } ],
    'padding-line-between-statements': 'off',
    'prefer-object-spread': 'warn',
    'quote-props': [ 'error', 'as-needed', {
      keywords: false,
      unnecessary: true,
      numbers: false
    } ],
    quotes: [ 'error', 'single', {
      avoidEscape: true
    } ],
    'require-jsdoc': 'off',
    semi: [ 'error', 'always' ],
    'semi-spacing': [ 'error', {
      before: false,
      after: true
    } ],
    'semi-style': [ 'error', 'last' ],
    'sort-keys': [ 'off', 'asc', {
      caseSensitive: false,
      natural: true
    } ],
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    } ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': [ 'error', {
      words: true,
      nonwords: false,
      overrides: {},
    } ],
    'spaced-comment': [ 'error', 'always', {
      line: {
        exceptions: [ '-', '+' ],
        markers: [ '=', '!' ], // space here to support sprockets directives
      },
      block: {
        exceptions: [ '-', '+' ],
        markers: [ '=', '!', ':', '::' ], // space here to support sprockets directives and flow comment types
        balanced: true,
      }
    } ],
    'switch-colon-spacing': [ 'error', {
      after: true,
      before: false
    } ],
    'template-tag-spacing': [ 'error', 'never' ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': 'off',

    // variables
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [ 'error', 'isFinite', 'isNaN' ],
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'warn',
    'no-undef-init': 'error',
    'no-undefined': 'warn',
    'no-unused-vars': [ 'error', {
      vars: 'all',
      args: 'after-used',
      ignoreRestSiblings: true
    } ],
    'no-use-before-define': [ 'error', {
      functions: true,
      classes: true,
      variables: true
    } ],

    // best-practices
    'accessor-pairs': 'off',
    'array-callback-return': [ 'error', {
      allowImplicit: true
    } ],
    'block-scoped-var': 'error',
    complexity: [ 'off', 11 ],
    'class-methods-use-this': [ 'error', {
      exceptMethods: [],
    } ],
    'consistent-return': 'error',
    curly: [ 'error', 'multi-line' ],
    'default-case': [ 'error', {
      commentPattern: '^no default$'
    } ],
    'dot-notation': [ 'error', {
      allowKeywords: true
    } ],
    'dot-location': [ 'error', 'property' ],
    eqeqeq: [ 'error', 'always', {
      null: 'ignore'
    } ],
    'guard-for-in': 'error',
    'max-classes-per-file': [ 'error', 1 ],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'off',
    'no-else-return': [ 'error', {
      allowElseIf: false
    } ],
    'no-empty-function': [ 'error', {
      allow: [ 'arrowFunctions', 'functions', 'methods', ]
    } ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': [ 'error', {
      exceptions: []
    } ],
    'no-native-reassign': 'off',
    'no-implicit-coercion': [ 'off', {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    } ],
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': [ 'error', {
      allowLoop: false,
      allowSwitch: false
    } ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [ 'error', {
      ignore: [ -1, 0, 1 ],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    } ],
    'no-multi-spaces': [ 'error', {
      ignoreEOLComments: false,
    } ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [ 'error', {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ]
    } ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [ 'error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      }, {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      }, {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      }, {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      } ],
    'no-return-assign': [ 'error', 'always' ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [ 'error', { props: true, } ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': [ 'error', { allowShortCircuit: false, allowTernary: false, allowTaggedTemplates: false } ],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [ 'off', { terms: [ 'todo', 'fixme', 'xxx' ], location: 'start' } ],
    'no-with': 'error',
    'prefer-promise-reject-errors': [ 'error', { allowEmptyReject: true } ],
    'prefer-named-capture-group': 'off',
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    'wrap-iife': [ 'error', 'outside', { functionPrototypeMethods: false } ],
    yoda: 'error',

    // react
    'jsx-quotes': [ 'warn', 'prefer-double' ],
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': 'off',
    'react/display-name': 'off',
    'react/forbid-component-props': 'error',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-boolean-value': [ 'error', 'always' ],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-curly-newline': 'error',
    'react/jsx-curly-spacing': [ 'error', 'never', { 'allowMultiline': true } ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
    'react/jsx-fragments': [ 'error', 'syntax' ],
    'react/jsx-handler-names': [ 'error', { 'eventHandlerPrefix': 'handle', 'eventHandlerPropPrefix': 'on' } ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': [ 'error', { 'maximum': 3, 'when': 'multiline' } ],
    'react/jsx-no-bind': [ 'error', { 'allowArrowFunctions': false, 'allowBind': false, 'ignoreRefs': true } ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'error',
    'react/jsx-sort-props': 'error',
    'react/jsx-tag-spacing': [ 'error', { 'afterOpening': 'never', 'beforeSelfClosing': 'always', 'closingSlash': 'never' } ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/jsx-wrap-multilines': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-read-only-props': 'warn',
    'react/prefer-stateless-function': [ 'warn', { 'ignorePureComponents': true } ],
    'react/prop-types': [ 'error', { ignore: [ "children" ] } ],
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/state-in-constructor': [ 'error', 'never' ],
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
