import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Navbar from './Navbar';
import Logo from './Logo';
import BtnArrowBack from './BtnArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

const EditAccount = ({ onSave }) => {
  const location = useLocation();
  const utilisateur = location.state?.utilisateur;

  const [civilite, setCivilite] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  useEffect(() => {
    if (utilisateur) {
      setCivilite(utilisateur.civilite || '');
      setPrenom(utilisateur.prenom || '');
      setNom(utilisateur.nom || '');
      setEmail(utilisateur.email || '');
      setMotDePasse(''); 
    }
  }, [utilisateur]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      civilite,
      prenom,
      nom,
      email,
      motDePasse,
    };
    onSave(updatedUser);
  };

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <>
      <div className="w-full absolute flex justify-center"><Logo className="w-24 mt-8 lg:hidden" /></div>
      <Navbar activeItem='account' />
      <BtnArrowBack />
      <div className="w-full bg-white p-6 mb-20 rounded-md overflow-auto">
        <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-4 w-full">
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
            className="mb-4 border border-border pl-3 rounded-full bg-background text-secondary px-3 py-5 w-full"
          />

          <div className="flex flex-row gap-2.5 justify-end">
            <Button type="button" onClick={handleBackClick} className="text-xs rounded-md">Annuler</Button>
            <Button type="submit" className="text-xs rounded-md">Enregistrer</Button>
          </div>
        </form>
      </div>
    </>
  );
};

EditAccount.propTypes = {
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
};

export default EditAccount;