import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSubscriptions } from '../redux/subscriptionSlice';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Logo from '../components/Logo';
import utilisateursService from '../../services/utilisateurs/utilisateursServicesApi';

const Home = () => {
  const dispatch = useDispatch();
  //const subscriptions = useSelector((state) => state.subscriptions.subscriptions);
  //const user = useSelector((state) => state.auth.user); 

  // useEffect(() => {
  //   // Je récupère mes abonnements
  //   const fetchSubscriptions = async () => {

  //   if (user && user.id) {
  //     fetchSubscriptions();
  //   }
  // }, [dispatch, user]);

  return (
    <div className="bg-background h-full">
      <div className="w-full flex justify-center pt-8 pb-4">
        <Logo className="w-24 lg:w-0" />
      </div>
      <div className="w-full flex justify-center pb-4">
        <p className="text-lg font-digitalSansMediumItalic">
          Bienvenue, 
        </p>
      </div>
      <Navbar activeItem="home" />
      <div className="p-6">
        <h1 className="pb-2.5 text-2xl font-digitalSansMediumItalic">Mes abonnements</h1>
        <div className="flex flex-col gap-5">
          {/* {subscriptions.map((item, index) => (
            <div key={index} className="flex-row flex justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex flex-row gap-2.5 items-center">
                <img src={item.logo} alt={item.title} className="bg-black p-3 w-14 h-14 rounded-full" />
                <div className="flex flex-col">
                  <p className="font-digitalSansMediumItalic">{item.name}</p>
                  <p className="text-secondary text-xs">abonnement {item.frequency}</p>
                  <p className="text-xs mt-0.5">{item.price} €</p>
                </div>
              </div>
              <div className="w-20 flex items-center justify-center">
                <Button className="text-xs rounded-md">Gérer</Button>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Home;