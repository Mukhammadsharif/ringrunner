import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const GlobalContext = createContext({});

export function GlobalProvider({children}) {
  const [refresh, setRefresh] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');

  const getLocale = async () => {
    const localName = await AsyncStorage.getItem('name');
    const localPhone = await AsyncStorage.getItem('phone');
    const localEmail = await AsyncStorage.getItem('email');

    if (localName) {
      setName(localName);
    }

    if (localPhone) {
      setPhone(localPhone);
    }

    if (localEmail) {
      setEmail(localEmail);
    }
  };

  useEffect(() => {
    getLocale();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        refresh,
        setRefresh,
        name,
        setName,
        phone,
        setPhone,
        email,
        setEmail,
        category,
        setCategory,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
