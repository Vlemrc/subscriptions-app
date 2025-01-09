import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Logo from '../components/Logo';
import abonnementsService from '../../services/abonnements/abonnementsServicesApi';

const Home = () => {

  const dispatch = useDispatch();
  const userInfos = useSelector((state) => state.login || {});
  const user = userInfos.utilisateur.utilisateur;
  const token = userInfos.utilisateur.token;

  dispatch(abonnementsService.getAllAbonnementsByUserIdService(token, user._id));

  const { loading, error } = useSelector((state) => state.subscriptions || {});

  const subscriptions = useSelector((state) => state.subscriptions.subscriptions);
  console.log(subscriptions)

  return (
    <div className="bg-background h-full">
      <div className="w-full flex justify-center pt-8 pb-4">
        <Logo className="w-24 lg:w-0" />
      </div>
      <div className="w-full flex justify-center pb-4">
        <p className="text-lg font-digitalSansMediumItalic">
          Bienvenue, {user ? user.nom : ''}
        </p>
      </div>
      <Navbar activeItem="home" />
      <div className="p-6">
        <h1 className="pb-2.5 text-2xl font-digitalSansMediumItalic">Mes abonnements</h1>
        <div className="flex flex-col gap-5">
          {subscriptions.map((item, index) => (
            <div key={index} className="flex-row flex justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-row gap-2.5 items-center">
                <div className="flex flex-col">
                  <p className="font-digitalSansMediumItalic">{item.nom_service}</p>
                  <p className="text-xs mt-0.5">{item.montant} €</p>
                </div>
              </div>
              <div className="w-20 flex items-center justify-center">
                <Button className="text-xs rounded-md">Gérer</Button>
              </div>
            </div>
          ))}
        </div>
        {loading && <p>Chargement...</p>}
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};

export default Home;