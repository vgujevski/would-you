import React, { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthedUser } from "./authSlice";
import { login, logout } from "./authSlice";

const authContext = createContext();

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function useProvideAuth() {
  const user = useSelector(selectAuthedUser)
  const dispatch = useDispatch()

  const signin = (user, cb) => {
    return fakeAuth.signin(() => {
      dispatch(login(user))
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      dispatch(logout());
      cb();
    });
  }

  return {
    user,
    signin,
    signout
  };
}