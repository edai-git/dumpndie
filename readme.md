# dd Function

The `dd` function is a debugging helper function that prints each parameter to the console and then stops script execution.

This function accepts any number of parameters of any type. Each parameter is printed to the console with a label indicating the order of the parameter.

After all parameters are printed, this function will stop script execution by calling `process.exit()`. This means that after you call this function, any code that comes after it will not be executed.

## Installation

To install this function, you can import it from the module where it is defined:

### NPM
```bash
npm i dumpndie --save-dev 
```

### Yarn
```bash
yarn add dumpndie --dev
```

## Usage

### ES6
```javascript copy
import dd from 'dumpndie';

dd("Hello", {foo: "bar"}, [1, 2, 3]);

```

### Commonjs
```javascript copy
const dd = require('dumpndie');

dd("Hello", {foo: "bar"}, [1, 2, 3]);

```