import React, { createContext, useContext, useState } from "react";

interface HeroDockContextType {
  isDocked: boolean;
  setIsDocked: (docked: boolean) => void;
}

const HeroDockContext = createContext<HeroDockContextType | undefined>(undefined);

export const useHeroDock = () => {
  const ctx = useContext(HeroDockContext);
  if (!ctx) throw new Error("useHeroDock must be used within HeroDockProvider");
  return ctx;
};

export const HeroDockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDocked, setIsDocked] = useState(false);
  return (
    <HeroDockContext.Provider value={{ isDocked, setIsDocked }}>
      {children}
    </HeroDockContext.Provider>
  );
};
