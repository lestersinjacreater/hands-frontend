import axios from 'axios';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000'
});

// Add request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

export const getTestimonials = async () => {
  const response = await axiosInstance.get('/testimonials');
  return response.data;
};

export const createTestimonial = async (testimonialData: any) => {
  const response = await axiosInstance.post('/testimonials', testimonialData);
  return response.data;
};
