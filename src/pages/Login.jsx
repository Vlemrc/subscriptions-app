import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import Button from '../components/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email }));
    navigate('/'); // Redirige vers la home après connexion
  };

  if (isAuthenticated) {
    return <p>Vous êtes déjà connecté.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="lg:w-1/3 w-full">
        <h1 className="text-2xl font-digitalSansMediumItalic">S&apos;inscrire</h1>
        <p className="mb-5 text-slate-400">Entre tes informations personnelles</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-digitalSansMediumItalic text-md">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mb-2 border border-gray-300 pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="password" className="font-digitalSansMediumItalic text-md">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='mb-2 border border-gray-300 pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <p className="tracking-tighter text-slate-400 text-xs text-right font-digitalSansMedium text-darkgray">Mot de passe oublié ?</p>
          <Button>Se connecter</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
