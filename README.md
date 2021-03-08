# FINN's browserslist config

A shared FINN [browserslist](https://github.com/browserslist/browserslist) config.

### Installation

```
npm install @finn-no/browserslist-config
```

### Usage

Either add the following to your `package.json`:

```json
"browserslist": [
  "extends @finn-no/browserslist-config"
]
```

or add this to your `.browserslistrc`:

```
extends @finn-no/browserslist-config
```

## What browsers do we support?

Modern browsers that [supports ES modules](https://caniuse.com/es6-module).

## Additional reading

[Browserslist integration with @babel/preset-env](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration)
