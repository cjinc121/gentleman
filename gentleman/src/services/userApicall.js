import axios from "axios";

//LOGIN
export const logInHandlerService = async (email, pass) => {
  try {
    const res = await axios.post(
      'http://localhost:3001/api/auth/login',
      {
        email: email,
        password: pass,
      },
      {
        withCredentials: true,
      }
    );

    return res;
  } catch (error) {
    console.log('Invalid email or password', error);
  }
};
//Logout
export const logOutHandlerService = async () => {
  try {
    const res = await axios.get('http://localhost:3001/api/auth/logout', {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log('Invalid email or password', error);
  }
};
//signup
export const signUpHandlerService = async (first, last, email, pass) => {
  try {
    const { data } = await axios.post(
      `http://localhost:3001/api/auth/signup`,
      {
        firstName: first,
        lastName: last,
        email: email,
        password: pass,
      },
      {
        withCredentials: true,
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
