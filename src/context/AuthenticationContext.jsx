import React, { createContext, useState } from 'react';

const AuthenticationContext = createContext({
  registerationData: {},
  isLogIn: Boolean,
  setRegisterationData: () => {},
  setIsLogIn: () => {},
});

export const AuthenticationContextProvider = ({ children }) => {
  const [registerationData, setRegisterationData] = useState({});
  const [isLogIn, setIsLogIn] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{
        registerationData,
        isLogIn,
        setIsLogIn,
        setRegisterationData,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationContext;
