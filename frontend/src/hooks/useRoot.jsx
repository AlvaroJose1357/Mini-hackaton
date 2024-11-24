import { useContext } from "react";
import { Contextapp } from "../context/Contextapp";

export const useRoot = () => {
  const context = useContext(Contextapp);
  if (!context) {
    throw new Error("useRoot debe estar dentro del proveedor Contextapp");
  }
  return context;
};
