# dd & dump Function

## dd()

The `dd` function is a debugging helper function that prints each parameter to the console and then stops script execution.

This function accepts any number of parameters of any type. Each parameter is printed to the console with a label indicating the order of the parameter.

After all parameters are printed, this function will stop script execution by calling `process.exit()`. This means that after you call this function, any code that comes after it will not be executed.

## dump()

The `dump` function is a debugging helper function that prints each parameter to the console.

This function accepts any number of parameters of any type. Each parameter is printed to the console with a label indicating the order of the parameter.

Unlike the `dd` function, this function does not stop script execution after printing the parameters. This means that after you call this function, any code that comes after it will still be executed.

@param data The parameters you want to print. You can provide any number of parameters, and each parameter will be printed to the console separately.

# Installation

To install this function, you can import it from the module where it is defined:

### NPM

```bash
npm i dumpndie-nodejs --save-dev
```

### Yarn

```bash
yarn add dumpndie-nodejs --dev
```

## Usage

### ES6

```javascript copy
import {dd} from "dumpndie-nodejs";
// or
import {dump} from "dumpndie-nodejs";
// or
import {dd, dump} from "dumpndie-nodejs";

dump("Hello", { foo: "bar" }, [1, 2, 3]);

dd("Hello", { foo: "bar" }, [1, 2, 3]); // stops script execution
```

### Commonjs

```javascript copy
const {dd} = require("dumpndie-nodejs");
// or
const {dump} = require("dumpndie-nodejs");
// or
const {dd, dump} = require("dumpndie-nodejs");

dump("Hello", { foo: "bar" }, [1, 2, 3]);
dd("Hello", { foo: "bar" }, [1, 2, 3]); // stops script execution
```
