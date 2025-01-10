import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Button from '../components/Button';
import abonnementsService from '../../services/abonnements/abonnementsServicesApi';

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [phone, setPhone] = useState('');
  const [clientNumber, setClientNumber] = useState('');
  const [status, setStatus] = useState('actif');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfos = useSelector((state) => state.login || {});
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");

  const { loading, error, success } = useSelector((state) => state.subscriptions || {});

  const resetForm = () => {
    setName('');
    setAddress('');
    setCity('');
    setPostalCode('');
    setStartDate('');
    setEndDate('');
    setPrice('');
    setDuration('');
    setPhone('');
    setClientNumber('');
    setStatus('actif');
  };

  const handleAddSubscription = (e) => {
    e.preventDefault();
    if (!user) {
      console.error('Utilisateur non connecté');
      return;
    }

    const newSubscription = {
      utilisateur_id: user._id,
      nom_service: name,
      adresse: address,
      ville: city,
      codePostal: postalCode,
      date_debut: startDate,
      date_fin: endDate,
      montant: price,
      duree: duration,
      telephone: phone,
      numeroClient: clientNumber,
      statut: status,
    };
    dispatch(abonnementsService.createAbonnementService(token, newSubscription));


    if (success) {
      navigate('/');
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
    <div>
      <div className="w-full flex justify-center p-8 lg:p-0 bg-background"><Logo className="w-24 lg:w-0" /></div>
      <Navbar activeItem="add-subscription" />
      <div className="bg-background">
        <h1 className="pb-2.5 text-2xl lg:pt-8 mx-6 font-digitalSansMediumItalic">Ajouter un abonnement</h1>
        <form onSubmit={handleAddSubscription} className="flex flex-col gap-5 bg-white m-6 mt-0 p-6 rounded-md">
          <label htmlFor="name" className="font-digitalSansMediumItalic text-md">Nom de l&apos;abonnement</label>
          <input
            type="text"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="address" className="font-digitalSansMediumItalic text-md">Adresse</label>
          <input
            type="text"
            placeholder="Adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="city" className="font-digitalSansMediumItalic text-md">Ville</label>
          <input
            type="text"
            placeholder="Ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="postalCode" className="font-digitalSansMediumItalic text-md">Code Postal</label>
          <input
            type="text"
            placeholder="Code Postal"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="startDate" className="font-digitalSansMediumItalic text-md">Date de début</label>
          <input
            type="date"
            placeholder="Date de début"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="endDate" className="font-digitalSansMediumItalic text-md">Date de fin</label>
          <input
            type="date"
            placeholder="Date de fin"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="price" className="font-digitalSansMediumItalic text-md">Prix</label>
          <input
            type="number"
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="duration" className="font-digitalSansMediumItalic text-md">Durée (en mois)</label>
          <input
            type="number"
            placeholder="Durée"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="phone" className="font-digitalSansMediumItalic text-md">Téléphone</label>
          <input
            type="text"
            placeholder="Téléphone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="clientNumber" className="font-digitalSansMediumItalic text-md">Numéro Client</label>
          <input
            type="text"
            placeholder="Numéro Client"
            value={clientNumber}
            onChange={(e) => setClientNumber(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <label htmlFor="status" className="font-digitalSansMediumItalic text-md">Statut</label>
          <input
            type="text"
            placeholder="Statut"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
          />
          <Button type="submit" className="mb-20">Ajouter</Button>
        </form>
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AddSubscription;