const emailSimpleRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const emailValidator = (email) => {
  if (emailSimpleRegex.test(email)) {
    return null;
  }
  return { email: "invalid email provided" };
};
