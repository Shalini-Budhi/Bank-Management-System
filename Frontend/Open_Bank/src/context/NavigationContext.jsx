import React, { createContext, useContext, useState, useEffect } from "react";

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  const [activeNavTab, setActiveNavTab] = useState("home");

  // User / session state (shared globally so child pages can read it)
  const [userName, setUserName] = useState("Mannem Vamsi Krishna");
  const [userInitials, setUserInitials] = useState("MK");
  const [lastLoginTime] = useState("13/08/26, 07:55 PM");

  useEffect(() => {
    const storedUser = localStorage.getItem("userName");
    if (storedUser) {
      const cleanName = storedUser.includes("@")
        ? storedUser.split("@")[0].replace(/[^a-zA-Z0-9 ]/g, " ")
        : storedUser;

      if (cleanName.trim()) {
        setUserName(cleanName);
        const parts = cleanName.trim().split(" ");
        setUserInitials(
          parts.length >= 2
            ? (parts[0][0] + parts[1][0]).toUpperCase()
            : cleanName.substring(0, 2).toUpperCase()
        );
      }
    }
  }, []);

  const navigateTo = (tabId) => setActiveNavTab(tabId);

  return (
    <NavigationContext.Provider
      value={{
        activeNavTab,
        navigateTo,
        userName,
        userInitials,
        lastLoginTime,
        setUserName,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

/* Hook — use anywhere: const { activeNavTab, navigateTo } = useNavigation(); */
export function useNavigation() {
  const ctx = useContext(NavigationContext);
  if (!ctx) {
    throw new Error("useNavigation must be used inside <NavigationProvider>");
  }
  return ctx;
}

export default NavigationContext;
