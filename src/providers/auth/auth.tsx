import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

type AuthProviderProps = PropsWithChildren<{}>

type AuthContextType = {
    user: FirebaseAuthTypes.User | null,
    loading: boolean,
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
})

const AuthProvider = ({ children }: AuthProviderProps) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscriber = onAuthStateChanged(
            getAuth(),
            (data) => {
                setUser(data)
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