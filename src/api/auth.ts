import apiClient from './axiosInstance';

interface RegisterData {
  username: string;
  password: string;
  name: string;
  email: string;
  phone: string;
}

export const register = async (userData: RegisterData) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const login = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/auth/login', {
      email,
      password
    });
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      // Update authorization header
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    }
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
