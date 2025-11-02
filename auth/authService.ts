const AUTH_KEY = 'xmelagi_admin_auth';

// In a real app, this would be a secure, server-side process.
// For this simulation, we'll use a hardcoded password.
const ADMIN_PASSWORD = 'password123'; 

export const authService = {
  login: (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(AUTH_KEY, 'true');
      return true;
    }
    return false;
  },

  logout: (): void => {
    sessionStorage.removeItem(AUTH_KEY);
  },

  isAuthenticated: (): boolean => {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
  },
};
