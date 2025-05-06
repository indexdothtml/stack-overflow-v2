import { useSelector, useDispatch } from "react-redux";

import { login, logout } from "../features/auth/authSlice";
import service from "../services/service";

/* 
HOW TO USE:
Call useAuth hook in your component and extract return values from it as per your need.
return values are as follows:
isAuthenticated (boolean) -> will be used to check user is logged in or not.
userData (User | Null) -> contains the user data of currently logged in user.
dispatchUserLogin (function) -> used to request login and update store.
dispatchUserLogout (function) -> used to request logout and update store.
*/

// useAuth hook will be used to request login and logout to backend and also updates the store.
export function useAuth() {
  const dispatch = useDispatch();

  // This variable returns the boolean value whether the user is logged in or not.
  const isAuthenticated = useSelector(
    (state) => state.authentication.isLoggedIn
  );

  // This variable returns the current userData value which can be null if user is logged out or current user data of currently logged in user.
  const userData = useSelector((state) => state.authentication.userData);

  // This function used to request login to backend server and updates the store values
  const dispatchUserLogin = async (email, password) => {
    const session = await service.userLogin(email, password);
    if (session.response) {
      dispatch(login(session.response));

      return {
        data: session.response,
        message: session.message,
      };
    } else {
      return {
        data: session.response,
        message: session.message,
      };
    }
  };

  // This function used to request logout to backend server and updates the store values
  const dispatchUserLogout = async () => {
    const session = await service.userLogout();
    if (session.response) {
      dispatch(logout());

      return {
        data: session.response,
        message: session.message,
      };
    } else {
      return {
        data: session.response,
        message: session.message,
      };
    }
  };

  return {
    isAuthenticated,
    userData,
    dispatchUserLogin,
    dispatchUserLogout,
  };
}
