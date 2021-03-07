const CREDENTIALS = {
  email: "blanka@capcom.com",
  password: "123456",
};

const validateLogin = ({ email, password }) =>
  email === CREDENTIALS.email && password === CREDENTIALS.password
    ? true
    : false;

const validateRecover = ({ email }) =>
  email === CREDENTIALS.email ? true : false;

export const handleLogin = async (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      validateLogin(data)
        ? resolve({ success: true, data: "You are welcome" })
        : resolve({ success: false, data: "Invalid email or password" });
    }, 500);
  });

export const handleRecover = async (data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      validateRecover(data)
        ? resolve({
            success: true,
            data: "Instructions are sent to your email",
          })
        : resolve({ success: false, data: "Invalid email" });
    }, 500);
  });
