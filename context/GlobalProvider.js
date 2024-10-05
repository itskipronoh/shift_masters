import {createContext, useContext, useState,useEffect} from 'react';


const GlobalContext = createContext();


export default function GlobalProvider({children}) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState(null);
    const[session, setSession] = useState(null);

    async function fetchUser() {
        try {
            setIsLoaded(true);
            const response = await fetch('/api/user');
            const user = await response.json();
            return user;
        } catch (error) {
            setIsLoaded(false);
            console.error(error);
        } finally{
            setIsLoaded(false);
        }
    }

    async function startSession() {
        try {
            const response = await fetch('/api/session');
            const session = await response.json();
            setSession(session);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoaded(false);
        }
    }

    useEffect(() => {
        fetchUser();
    }, [session]);

    return (
        <GlobalContext.Provider value={{}}>
            {children}
        </GlobalContext.Provider>
    );
}


const useGlobalContext = () => useContext(GlobalContext);