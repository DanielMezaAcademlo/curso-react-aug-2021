import { firebase, googleProvider } from "../../firebase/firebase.config";
import { loginTypes } from "../types/login.types";

export const handleGithubLoginAction = () => {
  return async dispatch => {
    try {
      const { user } = await firebase.auth().signInWithPopup(googleProvider);
      const { displayName, email, photoURL, uid } = user;
      dispatch(handleFillUserInfoAction({ displayName, email, photoURL, uid }));
    } catch (error) {
      console.log(error);
    }
  };
};

const handleFillUserInfoAction = userInfo => {
  return {
    type: loginTypes.LOGIN_GOOGLE,
    payload: userInfo
  };
};
