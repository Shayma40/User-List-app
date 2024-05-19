import NavBar from './Components/NavBar';
import './App.css';
import React from 'react';
import UsersList from './Components/UsersList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import { AuthProvider } from './Components/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route 
          path="/Users" 
          element={
            <ProtectedRoute>
            <UsersList/>
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
