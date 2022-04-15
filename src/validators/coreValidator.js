/**
 * generate a minWidth validator
 * @param {number} width the minimum width the input should have
 * @returns {(value: string) => (null | {minWidth?: string})}
 */
export const minLength = (length) => {
  return (value) => {
    if (value && value.length && value.length >= length) {
      return null; // valid;
    }
    return { minLength: `atleast ${length} characters are requried` };
  };
};

/**
 * generate a maxWidth validator
 * @param {number} width the maximum width the input should have
 * @returns {(value: string) => (null | {maxWidth?: string})}
 */
export const maxLength = (length) => {
  return (value) => {
    if (value !== null && value.length <= length) {
      return null;
    }
    return { maxLength: `atmost ${length} characters are allowed` };
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
