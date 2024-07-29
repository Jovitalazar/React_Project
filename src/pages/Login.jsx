import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import backgroundImage from '../assets/hall2.jpg';

const Login = ({ setIsAuthenticated }) => {
    const { setUser } = useContext(UserContext);
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [username, pwd]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const foundUser = existingUsers.find(u => u.username === username && u.password === pwd);

        if (!foundUser) {
            setErrMsg('Invalid credentials');
            return;
        }

        setIsAuthenticated(true); // Update authentication status
        setUser(foundUser); // Set user information in context
        setUsername('');
        setPwd('');
        setSuccess(true);
        navigate('/home'); // Redirect to Home page upon successful login
    };

    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className='login-container'>
                {success ? (
                    <section>
                        <h1>You are logged in!</h1>
                        <p><a href="/home">Go to Home</a></p>
                    </section>
                ) : (
                    <section style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
                        padding: '20px', // Optional: add padding for better spacing
                        borderRadius: '8px', // Optional: rounded corners
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' // Optional: subtle shadow for better visibility
                    }}>
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <h1>Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                required
                            />

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                            />
                            <button>Sign In</button>
                        </form>
                        <p>
                            Need an Account?<br />
                            <span className="line">
                                <Link to="/register">Sign Up</Link>
                            </span>
                        </p>
                    </section>
                )}
            </div>
        </div>
    );
};

export default Login;
