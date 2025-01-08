import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const EditSubscriptionForm = ({ subscription, onSave, onCancel }) => {
  const [name, setName] = useState(subscription.name);
  const [frequency, setFrequency] = useState(subscription.frequency);
  const [duration, setDuration] = useState(subscription.duration);
  const [startDate, setStartDate] = useState(subscription.startDate);
  const [price, setPrice] = useState(subscription.price);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedSubscription = { ...subscription, name, frequency, duration, startDate, price };
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
        <label className="font-digitalSansMediumItalic text-md">Fréquence</label>
        <input
          type="text"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          placeholder="mensuel"
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
          placeholder="12.99"
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
      <div className="flex flex-row justify-between gap-2.5">
        <Button type="button" onClick={onCancel}>Annuler</Button>
        <Button type="submit">Enregistrer</Button>
      </div>
    </form>
  );
};

EditSubscriptionForm.propTypes = {
  subscription: PropTypes.shape({
    name: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    startDate: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    contractUrl: PropTypes.string.isRequired,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditSubscriptionForm;