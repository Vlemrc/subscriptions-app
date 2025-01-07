import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/authActions';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, firstName, lastName }));
    navigate('/'); // Redirige vers la home après inscription
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6">
      <div className="lg:w-1/3 w-full">
        <div className="w-full flex items-center justify-center mb-10"><Logo className="w-24" /></div>
        <h1 className="text-2xl font-digitalSansMediumItalic">S&apos;inscrire</h1>
        <p className="mb-5 text-slate-400">Entre tes informations personnelles</p>
        <form onSubmit={handleRegister} className="flex flex-col gap-2 w-full">
          <label htmlFor="firstName" className="font-digitalSansMediumItalic text-md">Prénom</label>
          <input
            type="text"
            placeholder="Prénom"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="lastName" className="font-digitalSansMediumItalic text-md">Nom</label>
          <input
            type="text"
            placeholder="Nom"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <Button>S&apos;inscrire</Button>
        </form>
        <p className="mt-4 text-center">
          Déjà un compte ? <button onClick={() => navigate('/login')} className="text-blue-500">Se connecter</button>
        </p>
      </div>
    </div>
  );
};

export default Register;