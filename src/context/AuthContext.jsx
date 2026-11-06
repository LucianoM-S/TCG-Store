import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

import { auth } from "../firebase/config.js";

const AuthContext = createContext(null);

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error(
            "useAuth debe utilizarse dentro de AuthProvider."
        );
    }

    return context;
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (firebaseUser) => {
                setUser(firebaseUser);
                setLoading(false);
            },
            (error) => {
                console.error(
                    "Error al comprobar la sesión:",
                    error
                );
                setUser(null);
                setLoading(false);
            }
        );

        return unsubscribe;
    }, []);

    async function register(email, password, displayName) {
        const credential = await createUserWithEmailAndPassword(
            auth,
            email.trim(),
            password
        );

        if (displayName.trim()) {
            await updateProfile(credential.user, {
                displayName: displayName.trim(),
            });
        }

        return credential.user;
    }

    async function login(email, password) {
        const credential = await signInWithEmailAndPassword(
            auth,
            email.trim(),
            password
        );

        return credential.user;
    }

    async function logout() {
        await signOut(auth);
    }

    const value = {
        user,
        loading,
        register,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}