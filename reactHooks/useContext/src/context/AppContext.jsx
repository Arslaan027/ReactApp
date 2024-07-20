import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "9068336703";
  const name = "Arslaan";
  return (
    <AppContext.Provider value={{ phone, name }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
