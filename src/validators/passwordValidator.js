import { minLength, maxLength, combineValidators } from "./coreValidator";

/**
 * @param {string} value
 */
export const requireDigit = (value) => {
  if (/^.*[0-9]+.*$/.test(value)) {
    return null;
  }
  return { requireDigit: "at least one digit(0-9) is required" };
};

/**
 * @param {string} value
 */
export const requireLowerAlpha = (value) => {
  if (/^.*[a-z]+.*$/.test(value)) {
    return null;
  }
  return { requireLowerAlpha: "at least one lower case alphabet is required" };
};

/**
 * @param {string} value
 */
export const requireUpperAlpha = (value) => {
  if (/^.*[A-Z]+.*$/.test(value)) {
    return null;
  }
  return { requireUpperAlpha: "at least one upper case alphabet is required" };
};

export const passwordValidator = combineValidators([
  minLength(8),
  requireDigit,
  requireLowerAlpha,
  requireUpperAlpha,
  maxLength(50),
]);
