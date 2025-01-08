import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";
import EditSubscriptionForm from './EditSubscriptionForm';

const Subscription = () => {
  const location = useLocation();
  const { subscription } = location.state;
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedSubscription) => {
    console.log('Updated subscription:', updatedSubscription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("OK")
    setIsEditing(false);
  };

  return (
    <div className="bg-background h-full">
      <div className="w-full flex justify-center p-8 lg:p-0">
        <Logo className="w-24 lg:w-0" />
      </div>
      <Navbar activeItem="home" />
      <div className="p-6">
        <h1 className="pb-2.5 text-2xl font-digitalSansMediumItalic">{subscription.name}</h1>
        {isEditing ? (
          <EditSubscriptionForm subscription={subscription} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div className="bg-white w-full rounded-md p-6 flex flex-col gap-2.5">
            <p className="flex flex-row justify-between">Nom de l&apos;abonnement <span className="font-digitalSansMediumItalic">{subscription.name}</span></p>
            <p className="flex flex-row justify-between">Durée (en mois) <span className="font-digitalSansMediumItalic">{subscription.duration}</span></p>
            <p className="flex flex-row justify-between">Fréquence <span className="font-digitalSansMediumItalic">{subscription.frequency}</span></p>
            <p className="flex flex-row justify-between">Prix de l&apos;abonnement <span className="font-digitalSansMediumItalic">{subscription.price} €</span></p>
            <p className="flex flex-row justify-between">Date de début <span className="font-digitalSansMediumItalic">{subscription.startDate}</span></p>
          </div>
        )}
        {!isEditing && (
          <>
            <a onClick={() => setIsEditing(true)} className="block mt-2 mb-6 text-right tracking-tighter font-digitalSansMedium text-slate-400">Modifier</a>
            <a href={subscription.contractUrl} download>
              <Button>Télécharger le contrat</Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscription;