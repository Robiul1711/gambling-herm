import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const MemberAuthContext = createContext(null);

export const MemberAuthProvider = ({ children }) => {
  const [member, setMember] = useState(() => {
    try {
      const saved = localStorage.getItem("ghuk_member");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("ghuk_member_token") || null;
  });

  const [loading, setLoading] = useState(true);

  const getApiUrl = () => {
    let base = import.meta.env.VITE_API_URL || "http://localhost:5001/api/";
    if (!base.endsWith("/")) base += "/";
    return base;
  };

  // Verify and refresh profile on mount
  useEffect(() => {
    const verifyMemberSession = async () => {
      const currentToken = localStorage.getItem("ghuk_member_token");
      if (!currentToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.get(`${getApiUrl()}member-auth/me`, {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
          timeout: 10000,
        });

        if (res.data?.success && res.data.member) {
          setMember(res.data.member);
          localStorage.setItem("ghuk_member", JSON.stringify(res.data.member));
        } else {
          logout();
        }
      } catch (err) {
        console.warn("Session verification check failed or offline:", err?.response?.data?.message || err.message);
        // Keep cached state if offline, but if 401/403 logout
        if (err?.response?.status === 401 || err?.response?.status === 403) {
          logout();
        }
      } finally {
        setLoading(false);
      }
    };

    verifyMemberSession();
  }, []);

  // Login handler
  const login = async (email, password) => {
    const res = await axios.post(`${getApiUrl()}member-auth/login`, {
      email,
      password,
    });

    if (res.data?.success && res.data.token) {
      setToken(res.data.token);
      setMember(res.data.member);
      localStorage.setItem("ghuk_member_token", res.data.token);
      localStorage.setItem("ghuk_member", JSON.stringify(res.data.member));
      return res.data;
    }
    throw new Error(res.data?.message || "Sign in failed.");
  };

  // Register handler
  const registerMember = async (formData) => {
    const res = await axios.post(`${getApiUrl()}member-auth/register`, formData);
    return res.data;
  };

  // Logout handler
  const logout = () => {
    setMember(null);
    setToken(null);
    localStorage.removeItem("ghuk_member");
    localStorage.removeItem("ghuk_member_token");
  };

  const isAuthenticated = Boolean(token && member && member.status === "approved");

  return (
    <MemberAuthContext.Provider
      value={{
        member,
        token,
        isAuthenticated,
        loading,
        login,
        registerMember,
        logout,
      }}
    >
      {children}
    </MemberAuthContext.Provider>
  );
};

export const useMemberAuth = () => {
  const context = useContext(MemberAuthContext);
  if (!context) {
    throw new Error("useMemberAuth must be used within a MemberAuthProvider");
  }
  return context;
};
