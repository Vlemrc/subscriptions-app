import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { logout } from '../redux/authSlice';
import Logo from '../components/Logo';

const Account = () => {
  const userInfos = useSelector((state) => state.login || {});
  const utilisateur = userInfos.utilisateur
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div className="bg-background h-full">
      <div className="w-full absolute"><Logo className="w-24 mt-6 ml-6 lg:hidden" /></div>
      <Navbar activeItem='account' />
      <div className="p-6 flex flex-col items-center justify-center -translate-y-[5%] h-full">
        <svg className="rounded-full" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="65" cy="64" r="105" fill="#BEC6E8"/>
            <path d="M119.028 140.506V120.228C119.028 106.827 108.124 95.9228 94.7229 95.9228H36.1788C22.7672 95.9228 11.858 106.832 11.858 120.244V140.756V141.006H12.108H118.778V140.761H119.028V140.756V140.506ZM111.351 120.223V133.329H19.5357V120.238C19.5357 111.061 27.0013 103.595 36.1788 103.595H94.7229C103.89 103.595 111.351 111.056 111.351 120.223Z" fill="white" stroke="white" strokeWidth="0.5"/>
            <path d="M36.9286 58.2595C36.9286 73.8999 49.584 86.6383 65.1932 86.773V86.7792H65.4432C81.167 86.7792 93.9578 73.9884 93.9578 58.2646C93.9578 42.5408 81.167 29.75 65.4432 29.75C49.7194 29.75 36.9286 42.5356 36.9286 58.2595ZM44.6062 58.2646C44.6062 46.7749 53.9534 37.4277 65.4432 37.4277C76.9329 37.4277 86.2801 46.7749 86.2801 58.2646C86.2801 69.7543 76.9329 79.1015 65.4432 79.1015C53.9534 79.1015 44.6062 69.7543 44.6062 58.2646Z" fill="white" stroke="white" strokeWidth="0.5"/>
        </svg>
        <h1 className="text-2xl font-digitalSansMediumItalic mt-4 mb-8"><span className="uppercase mr-2">{utilisateur.utilisateur?.nom}</span>{utilisateur.utilisateur?.prenom}</h1>
        <h6 className="font-digitalSansMediumItalic w-full">Mes informations</h6>
        <div className="mt-4 bg-white w-full rounded-md p-6 flex flex-col gap-2.5">
          <p className="flex flex-row justify-between">Nom Prénom <span className="font-digitalSansMediumItalic">{utilisateur.utilisateur?.nom} {utilisateur.utilisateur?.prenom}</span></p>
          <p className="flex flex-row justify-between">Email <span className="font-digitalSansMediumItalic">{utilisateur.utilisateur?.email}</span></p>
        </div>
        <div className="mt-3 flex flex-row justify-between w-full">
            <button onClick={handleLogout} className="font-digitalSansMediumItalic text-red-600">Me déconnecter</button>
          <a onClick={() => navigate('/edit-account')} className="tracking-tighter font-digitalSansMedium text-slate-400">Modifier</a>
        </div>
      </div>
    </div>
  );
};

export default Account;