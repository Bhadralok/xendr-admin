import { createContext, useState } from "react";

export const CollapseContext = createContext();

export function CollapseProvider({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => setCollapsed(p => !p);

  return (
    <CollapseContext.Provider value={{ collapsed, toggle }}>
      {children}
    </CollapseContext.Provider>
  );
}
