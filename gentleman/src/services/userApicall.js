import { Api } from "../utils/Api";

//LOGIN
export const logInHandlerService = async (email, pass) => {
  try {
    const res = await Api.post(
      `${process.env.REACT_APP_API_URL}api/auth/login`,
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
    console.log(`Invalid email or password`, error);
  }
};
//Logout
export const logOutHandlerService = async () => {
  try {
    const res = await Api.get(`${process.env.REACT_APP_API_URL}api/auth/logout`, {
      withCredentials: true,
    });

    return res;
  } catch (error) {
    console.log(`Invalid email or password`, error);
  }
};
//signup
export const signUpHandlerService = async (first, last, email, pass) => {
  try {
    const { data } = await Api.post(
      `${process.env.REACT_APP_API_URL}api/auth/signup`,
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
