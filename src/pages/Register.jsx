import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import utilisateursService from '../../services/utilisateurs/utilisateursServicesApi';

const Register = () => {
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [civilite, setCivilite] = useState('--'); 
  const [ville, setVille] = useState('');
  const [codePostal, setCodePostal] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.register || {});

  const resetForm = () => {
    setCivilite('');
    setPrenom('');
    setNom('');
    setEmail('');
    setMotDePasse('');
    setAdresse('');
    setTelephone('');
    setVille('');
    setCodePostal('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
        nom,
        prenom,
        email,
        motDePasse,
        adresse,
        telephone,
        civilite,
        ville,
        codePostal,
    };
    dispatch(utilisateursService.createUserService(userData));
    if (success) {
      navigate('/account');
    }
  };
  
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        dispatch(resetForm());
      }, 3000); 
    }
  }, [success, dispatch]);
  
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-6 overflow-auto">
      <div className="lg:w-1/3 w-full">
        <div className="w-full flex items-center justify-center mb-10">
          <Logo className="w-24" />
        </div>
        <h1 className="text-2xl font-digitalSansMediumItalic">S&apos;inscrire</h1>
        <p className="mb-5 text-slate-400">Entre tes informations personnelles</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <label htmlFor="civility" className="font-digitalSansMediumItalic text-md">Civilité</label>
          <select
            name="civility"
            value={civilite}
            onChange={(e) => setCivilite(e.target.value)}
            className="mb-4 border border-border pl-3 pr-10 rounded-full bg-background text-secondary px-3 py-5 w-full"
          >
            <option value="--">--</option>
            <option value="M.">M.</option>
            <option value="Mme">Mme</option>
            <option value="Mlle">Mlle</option>
          </select>

          <label htmlFor="firstName" className="font-digitalSansMediumItalic text-md">Prénom</label>
          <input
            type="text"
            name="firstName"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="lastName" className="font-digitalSansMediumItalic text-md">Nom</label>
          <input
            type="text"
            name="lastName"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="email" className="font-digitalSansMediumItalic text-md">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="password" className="font-digitalSansMediumItalic text-md">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            value={motDePasse}
            onChange={(e) => setMotDePasse(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="address" className="font-digitalSansMediumItalic text-md">Adresse</label>
          <input
            type="text"
            name="address"
            placeholder="Adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="phone" className="font-digitalSansMediumItalic text-md">Téléphone</label>
          <input
            type="text"
            name="phone"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="city" className="font-digitalSansMediumItalic text-md">Ville</label>
          <input
            type="text"
            name="city"
            placeholder="Ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <label htmlFor="postalCode" className="font-digitalSansMediumItalic text-md">Code Postal</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Code Postal"
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value)}
            required
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <Button>S&apos;inscrire</Button>
        </form>

        {loading && <p>Inscription en cours...</p>}
        {success && <p>Inscription réussie !</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        
        {success && (
          <button onClick={() => dispatch(registerReset())}>Réinitialiser</button>
        )}

        <p className="mt-4 text-center">
          Déjà un compte ? <button onClick={() => navigate('/login')} className="text-blue-500">Se connecter</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
