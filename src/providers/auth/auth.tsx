import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { IUser } from "../../types";
import { fetchUserDetails } from "../../services";

type AuthProviderProps = PropsWithChildren<{}>

type AuthContextType = {
    user: IUser | null,
    loading: boolean,
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
})

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<IUser | null>(null)
    
    useEffect(() => {
        const subscriber = onAuthStateChanged(
            getAuth(),
            async (data) => {
                const userId = data?.uid;
                if (userId) {
                    const result = await fetchUserDetails(userId)
                    setUser(result)
                } else {
                    setUser(null)
                }
                setLoading(false)
            },
        )
        return subscriber;
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };