import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Login.css';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        if (username === 'admin' && password === 'password') {
            login();
            navigate('/users');
        } else {
            alert('Invalid username or password');
        }
    };

return (
    <div className="login-background">
        <div className="login-container">
            <h2><b>Login</b></h2>
            <div className="login-inputs">
                    <div className="input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button onClick={handleLogin} className="login-button">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
