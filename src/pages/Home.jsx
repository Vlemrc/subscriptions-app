import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Bienvenue, {user?.email}</h1>
      <Navbar />
      <p>Voici vos abonnements en cours :</p>
      <ul>
        <li>Netflix - 15€/mois</li>
      </ul>
    </div>
  );
};

export default Home;
