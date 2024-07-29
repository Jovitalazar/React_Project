import { useState, useContext } from 'react';
import AuthContext from './context/AuthProvider'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Admin = ({ setIsUserAuthenticated }) => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const defaultUser = 'Jovita';
  const defaultPwd = '727822Tucs@53';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user !== defaultUser || pwd !== defaultPwd) {
      setErrMsg('Invalid credentials');
      return;
    }

    setAuth({ user });
    setIsUserAuthenticated(true);
    navigate('/adminhome');
  };

  return (
    <section>
      <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
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
        <button type="submit">Sign In</button>
      </form>
    </section>
  );
};

export default Admin;
