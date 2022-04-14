/**
 * generate a minWidth validator
 * @param {number} width the minimum width the input should have
 * @returns {(value: string) => (null | {minWidth?: string})}
 */
export const minWidth = (width) => {
  return (value) => {
    if (value && value.length && value.length >= width) {
      return null; // valid;
    }
    return { minWidth: `atleast ${width} characters are requried` };
  };
};

/**
 * generate a maxWidth validator
 * @param {number} width the maximum width the input should have
 * @returns {(value: string) => (null | {maxWidth?: string})}
 */
export const maxWidth = (width) => {
  return (value) => {
    if (value !== null && value.length <= width) {
      return null;
    }
    return { maxWidth: `atmost ${width} characters are allowed` };
  };
};

/**
 * @param {string} value
 * @returns { {required?: string}}
 */
export const required = (value) => {
  if (value && value.length && value.length >= 0) {
    return null;
  }
  return { required: "this field is required" };
};

/**
 * @param {Array<(value: string) => null|any>} validators
 * @returns { (value: string) => {[key: string]: string}}
 */
export const combineValidators = (validators) => {
  /**
   * @param {string} value
   */
  return (value) => {
    let valid = true;
    let validationErrors = {};

    validators.forEach((validator) => {
      const error = validator(value);
      if (error) {
        valid = false;
        validationErrors = { ...validationErrors, ...error };
      }
    });

    if (valid) return null;
    return validationErrors;
  };
};
