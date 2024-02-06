import React, { useState, useContext, ReactNode } from 'react';

interface StringContextProps {
  value: string;
  setValue: (newValue: string) => void;
}

const StringContext = React.createContext<StringContextProps | undefined>(undefined);

export const useString = () => {
  const context = useContext(StringContext);
  if (!context) {
    throw new Error('useString must be used within a StringProvider');
  }
  return context;
};

export const StringProvider = ({ children }: { children: ReactNode }) => {
  const [value, setValue] = useState<string>('');

  return (
    <StringContext.Provider value={{ value, setValue }}>
      {children}
    </StringContext.Provider>
  );
};
