import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import PreHome from './pages/PreHome';
import Admin from './pages/Admin';
import PrivateRoute from './pages/context/PrivateRoute'; 
import PrivateRouteAdmin from './pages/context/PrivateRouteAdmin'; 
import AdminHome from './pages/AdminHome';
import Profile from './pages/Profile';
import { UserProvider } from './pages/context/UserContext';
import Dashboard from './pages/Dashboard';
import AdminProfile from './pages/AdminProfile';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false); 

  return (
    <UserProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<PreHome />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/home" 
              element={
                <PrivateRoute 
                  element={Home} 
                  isAuthenticated={isAuthenticated} 
                />
              } 
            />
            <Route 
              path="/admin" 
              element={<Admin setIsUserAuthenticated={setIsUserAuthenticated} />} 
            />
            <Route 
              path="/adminhome" 
              element={
                <PrivateRouteAdmin 
                  element={AdminHome} 
                  isUserAuthenticated={isUserAuthenticated} 
                />
              } 
            />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/adminprofile" element={<AdminProfile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
