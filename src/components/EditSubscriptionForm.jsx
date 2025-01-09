import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const EditSubscriptionForm = ({ subscription, onSave, onCancel }) => {
  console.log('EditSubscriptionForm ok avec:', subscription);

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

  useEffect(() => {
    if (subscription) {
      setName(subscription.name || '');
      setAddress(subscription.address || '');
      setCity(subscription.city || '');
      setPostalCode(subscription.postalCode || '');
      setStartDate(subscription.startDate || '');
      setEndDate(subscription.endDate || '');
      setPrice(subscription.price || '');
      setDuration(subscription.duration || '');
      setPhone(subscription.phone || '');
      setClientNumber(subscription.clientNumber || '');
      setStatus(subscription.status || 'actif');
    }
  }, [subscription]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSubscription = { 
      ...subscription, 
      name, 
      address, 
      city, 
      postalCode, 
      startDate, 
      endDate, 
      price, 
      duration, 
      phone, 
      clientNumber, 
      status 
    };
    onSave(updatedSubscription);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 bg-white mt-0 p-6 pb-20 rounded-md">
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
        <label className="font-digitalSansMediumItalic text-md">Adresse</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Adresse"
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Ville</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ville"
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Code postal</label>
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Code postal"
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
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Date de fin</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Prix de l&apos;abonnement</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Prix"
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
        <label className="font-digitalSansMediumItalic text-md">Téléphone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Téléphone"
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Numéro de client</label>
        <input
          type="text"
          value={clientNumber}
          onChange={(e) => setClientNumber(e.target.value)}
          placeholder="Numéro de client"
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        />
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="font-digitalSansMediumItalic text-md">Statut</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
          className='mb-2 border border-border pl-[25px] rounded-full bg-background text-secondary px-3 py-5 w-full'
        >
          <option value="actif">Actif</option>
          <option value="inactif">Inactif</option>
        </select>
      </div>
      <div className="flex flex-row gap-2.5 justify-end">
        <Button type="button" onClick={onCancel} className="text-xs rounded-md">Annuler</Button>
        <Button type="submit" className="text-xs rounded-md">Enregistrer</Button>
      </div>
    </form>
  );
};

EditSubscriptionForm.propTypes = {
  subscription: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditSubscriptionForm;