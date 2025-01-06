import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simule une connexion réussie
    dispatch(login({ email }));
  };

  if (isAuthenticated) {
    return <p>Vous êtes connecté en tant que {email}</p>;
  }

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
