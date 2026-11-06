import { createContext } from "react";

export const GlobalStore = createContext();

export default function MainStore({ children }) {
  const values = {};

  return <GlobalStore.Provider value={values}>{children}</GlobalStore.Provider>;
}
