/**
 * The `dd` function is a debugging helper function that prints each parameter to the console and then stops script execution.
 *
 * This function accepts any number of parameters of any type. Each parameter is printed to the console with a label indicating the order of the parameter.
 *
 * After all parameters are printed, this function will stop script execution by calling `process.exit()`. This means that after you call this function, any code that comes after it will not be executed.
 *
 * @param data The parameters you want to print. You can provide any number of parameters, and each parameter will be printed to the console separately.
 */
export default function dd(...data: any[]): void {
  data.forEach((item, index) => {
    console.log(`------param ${index + 1}-----`);
    console.dir(item, { depth: null, colors: true });
  });
  process.exit();
}

module.exports = dd;
