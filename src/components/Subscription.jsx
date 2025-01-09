import { useState } from 'react';
import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";
import EditSubscriptionForm from './EditSubscriptionForm';

const Subscription = ( subscription ) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedSubscription) => {
    console.log('Updated subscription:', updatedSubscription);
    setIsEditing(false);
  };

  const handleCancel = () => {
    console.log("OK")
    setIsEditing(false);
  };
  
  const subscriptionDetails = subscription.subscription;

  return (
    <div className="bg-background h-full">
      <div className="w-full flex justify-center p-8 lg:p-0">
        <Logo className="w-24 lg:w-0" />
      </div>
      <Navbar activeItem="home" />
      <div className="p-6">
        <h1 className="pb-2.5 text-2xl font-digitalSansMediumItalic">{subscriptionDetails.nom_service}</h1>
        {isEditing ? (
          <EditSubscriptionForm subscription={subscription} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div className="bg-white w-full rounded-md p-6 flex flex-col gap-2.5">
            <p className="flex flex-row justify-between">Nom de l&apos;abonnement <span className="font-digitalSansMediumItalic">{subscriptionDetails.nom_service}</span></p>
            <p className="flex flex-row justify-between">Adresse <span className="font-digitalSansMediumItalic">{subscriptionDetails.adresse}</span></p>
            <p className="flex flex-row justify-between">Ville <span className="font-digitalSansMediumItalic">{subscriptionDetails.ville}</span></p>
            <p className="flex flex-row justify-between">Code postal <span className="font-digitalSansMediumItalic">{subscriptionDetails.codePostal}</span></p>
            <p className="flex flex-row justify-between">Date de début <span className="font-digitalSansMediumItalic">{subscriptionDetails.date_debut}</span></p>
            <p className="flex flex-row justify-between">Date de fin <span className="font-digitalSansMediumItalic">{subscriptionDetails.date_fin}</span></p>
            <p className="flex flex-row justify-between">Montant <span className="font-digitalSansMediumItalic">{subscriptionDetails.montant} €</span></p>
            <p className="flex flex-row justify-between">Durée (en mois) <span className="font-digitalSansMediumItalic">{subscriptionDetails.duree}</span></p>
            <p className="flex flex-row justify-between">Téléphone <span className="font-digitalSansMediumItalic">{subscriptionDetails.telephone}</span></p>
            <p className="flex flex-row justify-between">Numéro de client <span className="font-digitalSansMediumItalic">{subscriptionDetails.numeroClient}</span></p>
            <p className="flex flex-row justify-between">Statut <span className="font-digitalSansMediumItalic text-green-600">{subscriptionDetails.statut}</span></p>
          </div>
        )}
        {!isEditing && (
          <>
            <div className="flex flex-row justify-between">
              <a className="block mt-2 mb-6 text-right tracking-tighter font-digitalSansMedium text-red-600">Supprimer</a>
              <a onClick={() => setIsEditing(true)} className="block mt-2 mb-6 text-right tracking-tighter font-digitalSansMedium text-slate-400">Modifier</a>
            </div>
            <a href={subscription.contractUrl} target="_blank" download>
              <Button>Télécharger le contrat</Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscription;