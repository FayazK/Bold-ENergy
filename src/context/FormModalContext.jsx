import { createContext, useContext, useState, useCallback } from 'react';

const FormModalContext = createContext();

export const useFormModal = () => useContext(FormModalContext);

export const FormModalProvider = ({ children }) => {
  const [homeownerOpen, setHomeownerOpen] = useState(false);
  const [dealerOpen, setDealerOpen] = useState(false);

  const openHomeownerForm = useCallback(() => setHomeownerOpen(true), []);
  const closeHomeownerForm = useCallback(() => setHomeownerOpen(false), []);
  const openDealerForm = useCallback(() => setDealerOpen(true), []);
  const closeDealerForm = useCallback(() => setDealerOpen(false), []);

  return (
    <FormModalContext.Provider value={{ homeownerOpen, dealerOpen, openHomeownerForm, closeHomeownerForm, openDealerForm, closeDealerForm }}>
      {children}
    </FormModalContext.Provider>
  );
};
