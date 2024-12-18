import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import { AuthProvider } from '../context/AuthContext';
import ProtectedRoute from '../components/auth/ProtectedRoute';

const AppRoutes = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default AppRoutes;
