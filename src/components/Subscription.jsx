import React, { useState, useCallback, useEffect  } from 'react';
import Button from "./Button";
import Logo from "./Logo";
import Navbar from "./Navbar";
import EditSubscriptionForm from './EditSubscriptionForm';
import abonnementsService from '../../services/abonnements/abonnementsServicesApi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Subscription = () => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const userInfos = useSelector((state) => state.login || {});
  const userStorage = JSON.parse(localStorage.getItem("user")) || {};
  const user = userInfos?.utilisateur || userStorage?.utilisateur || null;
  const token = user?.token || userStorage?.token || null;
  const [abonnement, setAbonnement] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    const fetchAbonnement = async () => {
        try {
            const abonnementDetail = await abonnementsService.getAbonnementByIdService(token, id);
            console.log(abonnementDetail);
            setAbonnement(abonnementDetail);
        } catch (error) {
            console.error("Erreur lors de la récupération de l'abonnement:", error);
        }
    };

    fetchAbonnement();
  }, [token, id]);

  useEffect(() => {
  }, [dispatch]);
  
  const handleSave = (updatedSubscription) => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

 const handleDeleteSubscription = useCallback(async (e) => {
   e.preventDefault();
   dispatch(abonnementsService.deleteAbonnementByIdService(token, abonnement._id));
 }, [dispatch, token, abonnement]);

  const downloadClick = useCallback(() => {
   dispatch(abonnementsService.generatePdfService(token, abonnement.id));
 }, [dispatch, token, abonnement]);

  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="bg-background h-full">
      <div className="w-full flex justify-center p-8 lg:p-0">
        <Logo className="w-24 lg:w-0" />
      </div>
      <Navbar activeItem="home" />
      <div className="p-6"> 
      <h1 className="pb-2.5 text-2xl uppercase font-digitalSansMediumItalic">{abonnement?.nom_service}</h1>
        {isEditing ? (
          <EditSubscriptionForm subscription={abonnement} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          <div className="bg-white w-full rounded-md p-6 flex flex-col gap-2.5">
            <p className="flex flex-row justify-between">Nom de l&apos;abonnement <span className="font-digitalSansMediumItalic text-right">{abonnement?.nom_service}</span></p>
            <p className="flex flex-row justify-between">Adresse <span className="font-digitalSansMediumItalic text-right">{abonnement?.adresse}</span></p>
            <p className="flex flex-row justify-between">Ville <span className="font-digitalSansMediumItalic text-right">{abonnement?.ville}</span></p>
            <p className="flex flex-row justify-between">Code postal <span className="font-digitalSansMediumItalic text-right">{abonnement?.codePostal}</span></p>
            <p className="flex flex-row justify-between">Date de début <span className="font-digitalSansMediumItalic text-right">{abonnement?.date_debut}</span></p>
            <p className="flex flex-row justify-between">Date de fin <span className="font-digitalSansMediumItalic text-right">{abonnement?.date_fin}</span></p>
            <p className="flex flex-row justify-between">Montant <span className="font-digitalSansMediumItalic text-right">{abonnement?.montant} €</span></p>
            <p className="flex flex-row justify-between">Durée (en mois) <span className="font-digitalSansMediumItalic text-right">{abonnement?.duree}</span></p>
            <p className="flex flex-row justify-between">Téléphone <span className="font-digitalSansMediumItalic text-right">{abonnement?.telephone}</span></p>
            <p className="flex flex-row justify-between">Numéro de client <span className="font-digitalSansMediumItalic text-right">{abonnement?.numeroClient}</span></p>
            <p className="flex flex-row justify-between">Statut <span className="font-digitalSansMediumItalic text-right text-green-600">{abonnement?.statut}</span></p>
          </div>
        )}
        {!isEditing && (
          <>
            <div className="flex flex-row justify-between">
              <button onClick={handleDeleteSubscription} className="block mt-2 mb-6 text-right tracking-tighter font-digitalSansMedium text-red-600">Supprimer</button>
              <a onClick={() => setIsEditing(true)} className="block mt-2 mb-6 text-right tracking-tighter font-digitalSansMedium text-slate-400">Modifier</a>
              <button onClick={handleBackClick}>Retour</button>
            </div>
            <a href={abonnement?.contractUrl} target="_blank" download>
              <Button onClick={downloadClick}>Télécharger le contrat</Button>
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Subscription;
