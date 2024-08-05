import { createContext, useContext, useState } from "react";

// import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [onboardingState, setOnboardingState] = useState(1);

  return (
    <GlobalContext.Provider
      value={{
        onboardingState,
        setOnboardingState,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
