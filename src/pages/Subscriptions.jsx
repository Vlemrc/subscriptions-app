import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Subscription from '../components/Subscription'; // Importez le composant Subscription
import abonnementsService from '../../services/abonnements/abonnementsServicesApi';
import { useNavigate } from 'react-router-dom';

const Subscriptions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfos = useSelector((state) => state?.login) || {};
  const userStorage = JSON.parse(localStorage.getItem("user")) || {};

  const user = userInfos?.utilisateur || userStorage?.utilisateur || null;
  const token = userInfos?.token || userStorage?.token || null;

  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const [isVisibleSub, setIsVisibleSub] = useState(false);

  useEffect(() => {
    const fetchAbonnements = async () => {
      if (token && user && user._id) {
        try {
          const result = await dispatch(abonnementsService.getAllAbonnementsByUserIdService(token, user._id));
          localStorage.setItem("abonnements", JSON.stringify(result)); 
          setSubscriptions(result); 
        } catch (error) {
          console.error('Erreur lors de la récupération des abonnements:', error);
        }
      }
    };

    fetchAbonnements();
  }, [dispatch, token, user?._id]);

  const { loading, error } = useSelector((state) => state?.subscriptions || {});

  function findAbonnementById(id) {
    const abonnements = JSON.parse(localStorage.getItem('abonnements') || '[]');
    return abonnements.find(abonnement => abonnement.id === id);
  }
  const [id, setId] = useState("");
  const handleEditClick = (subscription) => {
    console.log('handleEditClick called with:', subscription);
    setId(subscription.id);
    navigate(`/account/abonnements/${subscription.id}`); 
    setSelectedSubscription(subscription);
    setIsVisibleSub(true);
  };
  
  const handleCancel = () => {
    console.log('handleCancel called');
    setIsVisibleSub(false);
  };

  return (
    <div className="bg-background h-full">
      {!isVisibleSub && (
        <>
          <div className="w-full flex justify-center pt-8 pb-4 lg:pt-0 lg:pb-0">
            <Logo className="w-24 lg:w-0" />
          </div>
          <Navbar activeItem="home" />
          <div className="p-6 pb-[100px]">
            <h1 className="pb-2.5 text-2xl font-digitalSansMediumItalic">Mes abonnements</h1>
            <div className="flex flex-col gap-5">
              {subscriptions?.map((item, index) => (
                <div key={index} className="flex-row flex justify-between bg-white p-4 rounded-lg shadow-md">
                  <div className="flex flex-row gap-2.5 items-center">
                    <div className="flex flex-col">
                      <p className="font-digitalSansMediumItalic">{item?.nom_service}</p>
                      <p className="text-xs mt-0.5">{item?.montant} €</p>
                    </div>
                  </div>
                  <div className="w-20 flex items-center justify-center">
                    <Button className="text-xs rounded-md" onClick={() => handleEditClick(item)}>Gérer</Button>
                  </div>
                </div>
              ))}
            </div>
            {loading && <p>Chargement...</p>}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </>
      )}
      {isVisibleSub && selectedSubscription && (
        <Subscription 
          id={id} 
          onCancel={handleCancel} 
        />
      )}
    </div>
  );
};

export default Subscriptions;