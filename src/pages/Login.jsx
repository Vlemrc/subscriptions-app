import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import utilisateursService from '../../services/utilisateurs/utilisateursServicesApi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, success } = useSelector((state) => state.login || {});

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email,
      motDePasse,
    };
    dispatch(utilisateursService.connexionUserService(userData));
  }
  useEffect(() => {
    if (success) {
      navigate('/'); 
    }
  }, [success, navigate]); 
  
  // console.log(utilisateur) // tu auras les infos comme le token etc tu devras stocké certaines infos car tu en auras besoin

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="lg:w-1/3 w-full">
        <div className="w-full flex items-center justify-center mb-10"><Logo className="w-24" /></div>
        <h1 className="text-2xl font-digitalSansMediumItalic">Connexion</h1>
        <p className="mb-5 text-slate-400">Entre tes informations personnelles</p>
        <form onSubmit={handleLogin} className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="font-digitalSansMediumItalic text-md">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="password" className="font-digitalSansMediumItalic text-md">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <p className="tracking-tighter text-slate-400 text-xs text-right font-digitalSansMedium text-darkgray mb-8">Mot de passe oublié ?</p>
          <Button>Se connecter</Button>
        </form>
        {loading && <p>Connexion en cours...</p>}
        {success && <p>Connexion réussie !</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <p className="mt-4 text-center">
          Pas encore de compte ? <button onClick={() => navigate('/register')} className="text-blue-500">S&apos;inscrire</button>
        </p>
      </div>
    </div>
  );
};

export default Login;