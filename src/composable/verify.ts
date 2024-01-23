const checkEmail = (email: string) => {
  const emailRegex = /\S+@\S+\.\S+/;
  console.log(!emailRegex.test(email));
  return !emailRegex.test(email);
};

const checkPassword = (password: string) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  return !passwordRegex.test(password);
};

const checkDoubleCheck = (password: string, checkPassword: string) => {
  const check = checkPassword && password === checkPassword;
  return !check;
};

const checkRequired = (text: string) => {
  const check = text && text.trim() !== "";
  return !check;
};

const checkCheckbox = (checkbox: boolean) => {
  return !checkbox;
};

export {
  checkEmail,
  checkPassword,
  checkDoubleCheck,
  checkRequired,
  checkCheckbox,
};
