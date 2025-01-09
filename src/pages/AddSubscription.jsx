import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Button from '../components/Button';
import abonnementsService from '../../services/abonnements/abonnementsServicesApi';

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('mensuel');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfos = useSelector((state) => state.login || {});
  const user = userInfos.utilisateur.utilisateur;
  console.log(user)

  const { loading, error, success } = useSelector((state) => state.subscriptions || {});

  const resetForm = () => {
    setName('');
    setFrequency('mensuel');
    setPrice('');
    setDuration('');
    setStartDate('');
  };

  const handleAddSubscription = (e) => {
    e.preventDefault();
    if (!user) {
      console.error('Utilisateur non connecté');
      return;
    }

    const newSubscription = {
      utilisateur_id: user.id,
      nom_service: name,
      date_debut: startDate,
      montant: price,
      duree: duration,
      frequence: frequency,
    };

    dispatch(abonnementsService.createAbonnementService(newSubscription));
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
          <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Nom de l&apos;abonnement</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nom de ton nouvel abonnement"
              required
              className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Type d&apos;abonnement</label>
            <div className="relative">
                <select value={frequency} style={{ WebkitAppearance: 'none', MozAppearance: 'none' }} onChange={(e) => setFrequency(e.target.value)} className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'>
                    <option value="mensuel">Mensuel</option>
                    <option value="annuel">Annuel</option>
                </select>
                <div className="h-0.5 w-2 bg-black absolute right-6 top-1/2 -translate-y-1/2 -mt-0.5 rotate-45"></div>
                <div className="h-0.5 w-2 bg-black absolute right-5 top-1/2 -translate-y-1/2 -mt-0.5 -rotate-45"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Prix (en €)</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="19.99"
              required
              className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Durée (en mois)</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="12"
              required
              className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Date de début</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
              className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
            />
          </div>
          <Button type="submit" className="mb-20">Ajouter</Button>
        </form>
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default AddSubscription;