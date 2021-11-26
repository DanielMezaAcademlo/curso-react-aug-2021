import { firebase, googleProvider } from "../../firebase/firebase.config";
import { loginTypes } from "../types/login.types";

export const handleGoogleLoginAction = () => {
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

export const handleRegisterAction = ({ userName, email, password }) => {
  return async dispatch => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await user.updateProfile({ displayName: userName });

      dispatch(
        handleFillUserInfoAction({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid
        })
      );
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
