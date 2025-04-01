
import { createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = sessionStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email) => {
    const role = email === "admin@example.com" ? "admin" : "user";
    const userData = { email, role };
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData)); // Persist during session
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user"); // Clear on logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
