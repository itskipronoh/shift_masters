import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [User, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const endpoint = `https://rrf38mr7-5000.uks1.devtunnels.ms/`;
  const [orderDetails, setOrderDetails] = useState(null);

  console.log('current user', User);

  async function startSession(user) {
    try {
      const userData = JSON.stringify(user);
      await AsyncStorage.setItem('user', userData);
    } catch (e) {
      console.error('error storing users', e);
    }
  }

  async function getSession() {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      setUser(JSON.parse(user));
    } else {
      setUser(null);
    }
  }

  async function endSession() {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSession();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        isLoaded,
        getSession,
        startSession,
        User,
        session,
        endpoint,
        endSession,
        orderDetails,
        setOrderDetails,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
