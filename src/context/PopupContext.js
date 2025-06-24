// context/PopupContext.js
import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [popup, setPopup] = useState({ show: false, message: '' });
  const [dsaPopup, setDsaPopup] = useState({ show: false, message: "" });

  const triggerPopup = (message) => {
    setPopup({ show: true, message });
  };

  const closePopup = () => {
    setPopup({ show: false, message: '' });
  };

  const triggerDsaPopup = (message) => {
    setDsaPopup({ show: true, message });
  };

  const closeDsaPopup = () => {
    setDsaPopup({ show: false, message: "" });
  };

  return (
    <PopupContext.Provider value={{ popup, triggerPopup, closePopup, dsaPopup, triggerDsaPopup, closeDsaPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

