import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState(null); // 'admin' or 'customer'
  
  // Check for both admin and customer tokens on mount
  useEffect(() => {
    const verifyAuth = async () => {
      const adminToken = localStorage.getItem('adminToken');
      const customerToken = localStorage.getItem('customerToken');
      
      if (adminToken) {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/auth/admin/verify`, {
            headers: { Authorization: `Bearer ${adminToken}` }
          });
          setUser({ ...response.data, type: 'admin' });
          setUserType('admin');
        } catch (error) {
          console.error('Admin token verification failed:', error);
          localStorage.removeItem('adminToken');
        }
      } else if (customerToken) {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/customers/me`, {
            headers: { Authorization: `Bearer ${customerToken}` }
          });
          setUser({ ...response.data, type: 'customer' });
          setUserType('customer');
        } catch (error) {
          console.error('Customer token verification failed:', error);
          localStorage.removeItem('customerToken');
        }
      }
      setLoading(false);
    };

    verifyAuth();
  }, []);

  // Admin login
  const loginAdmin = async (username, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/auth/admin/login`, {
        username,
        password
      });

      const { token, username: userName, email } = response.data;
      
      localStorage.setItem('adminToken', token);
      setUser({ username: userName, email, type: 'admin' });
      setUserType('admin');
      
      return { success: true };
    } catch (error) {
      console.error('Admin login failed:', error);
      return {
        success: false,
        message: error.response?.data?.detail || 'Login failed. Please try again.'
      };
    }
  };

  // Customer login
  const loginCustomer = async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/customers/login`, {
        email,
        password
      });

      const { access_token, customer } = response.data;
      
      localStorage.setItem('customerToken', access_token);
      setUser({ ...customer, type: 'customer' });
      setUserType('customer');
      
      return { success: true, user: customer };
    } catch (error) {
      console.error('Customer login failed:', error);
      return {
        success: false,
        message: error.response?.data?.detail || 'Login failed. Please try again.'
      };
    }
  };

  // Generic logout
  const logout = async () => {
    try {
      if (userType === 'admin') {
        const token = localStorage.getItem('adminToken');
        if (token) {
          await axios.post(`${API_BASE_URL}/api/auth/admin/logout`, {}, {
            headers: { Authorization: `Bearer ${token}` }
          });
        }
        localStorage.removeItem('adminToken');
      } else if (userType === 'customer') {
        localStorage.removeItem('customerToken');
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setUser(null);
      setUserType(null);
    }
  };

  // Get current token
  const getToken = () => {
    if (userType === 'admin') return localStorage.getItem('adminToken');
    if (userType === 'customer') return localStorage.getItem('customerToken');
    return null;
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userType, 
      loading, 
      loginAdmin, 
      loginCustomer, 
      logout,
      getToken,
      isAuthenticated: !!user,
      isAdmin: userType === 'admin',
      isCustomer: userType === 'customer'
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};