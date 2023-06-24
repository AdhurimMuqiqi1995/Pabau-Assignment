import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [total, setTotal] = useState(2);

  const handleSelectOption = (optionId) => {
    setSelectedOption(optionId);
  };
  
  return (
    <AppContext.Provider value={{ step,setStep, total, selectedOption, handleSelectOption }}>
      {children}
    </AppContext.Provider>
  );
};
