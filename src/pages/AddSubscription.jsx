import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubscription } from '../redux/subscriptionSlice';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Logo from '../components/Logo';

const AddSubscription = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [duration, setDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [frequency, setFrequency] = useState('mensuel');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
    dispatch(addSubscription({ name, price: parseFloat(price), frequency }));
    alert('Abonnement ajouté avec succès.');
    setName('');
    setPrice('');
    setFrequency('mensuel');
  };

  return (
    <div>
      <div className="w-full flex justify-center p-8 bg-background"><Logo className="w-24 lg:w-0" /></div>
      <Navbar activeItem="add-subscription" />
      <div className="bg-background">
        <h1 className="pb-2.5 text-2xl mx-6 font-digitalSansMediumItalic">Ajouter un abonnement</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white m-6 mt-0 p-6 rounded-md">
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
            <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'>
                <option value="mensuel">Mensuel</option>
                <option value="annuel">Annuel</option>
            </select>
            </div>
            <div className="flex flex-col gap-2.5">
            <label className="font-digitalSansMediumItalic text-md">Prix (€)</label>
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
            <label className="font-digitalSansMediumItalic text-md">Durée</label>
            <input
                type="string"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="12 mois"
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
      </div>
    </div>
  );
};

export default AddSubscription;
