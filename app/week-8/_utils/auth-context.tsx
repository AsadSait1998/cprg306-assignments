"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithPopup, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const signInWithGitHub = async () => {
    const provider = new GithubAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, signInWithGitHub, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// This is what your page should import
export const useUserAuth = () => useContext(AuthContext);