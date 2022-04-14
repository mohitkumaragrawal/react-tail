/**
 * Validators are just a function that takes the input in form of string,
 * and returns null if input is valid else it returns error object in the form
 * of { validationTestName: "validation discriptive message" }
 */

/**
 *
 * @param {string} value
 * @returns {null}
 */
export const noValidator = (value) => null;

export * from "./coreValidator";
export * from "./emailValidator";
export * from "./passwordValidator";
