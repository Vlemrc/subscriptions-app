import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './Logo';

const Navbar = ({ activeItem }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar flex items-center justify-center fixed bottom-0 left-0 w-full h-[80px] px-6 bg-white shadow-md lg:relative lg:justify-between">
      <Logo className="w-0 lg:w-24" />
      <ul className="flex flex-row justify-center items-center gap-3 lg:gap-8">
        <li className={classNames("h-12 w-12 flex items-center justify-center rounded-full lg:h-auto lg:w-auto", { "bg-blue text-white": activeItem === 'home' })}>
          <button onClick={() => navigate('/')} className="w-6 h-6 -mt-0.5 lg:h-auto lg:w-auto">
            <svg className="lg:hidden" width="24" height="24" viewBox="0 0 24 24" fill={activeItem === 'home' ? "#fff" : "#94A3B8"} xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_146)">
                <path d="M20.5214 24H3.468C3.44172 23.9862 3.41606 23.9637 3.38852 23.9593C1.38257 23.6069 0.00188026 21.9703 0.00125438 19.9424C0.000628495 17.0609 0.0037579 14.1793 2.61513e-06 11.2971C-0.00124915 10.0954 0.446881 9.09779 1.33125 8.29416C3.96057 5.90455 6.59115 3.51744 9.22172 1.12971C10.8878 -0.38242 13.1222 -0.373657 14.7833 1.13909C17.4157 3.53622 20.0526 5.92833 22.6907 8.31919C23.2245 8.803 23.6019 9.38131 23.811 10.0692C23.878 10.2901 23.9299 10.5154 23.9887 10.7388V20.3449C23.9718 20.4031 23.9506 20.46 23.9393 20.5188C23.6539 22.0429 22.8622 23.172 21.3913 23.7578C21.1134 23.8686 20.8124 23.9205 20.5214 24ZM11.9224 21.6974C14.5217 21.6974 17.1216 21.6974 19.7209 21.6974C20.8043 21.6974 21.4608 21.0446 21.4608 19.9693C21.4608 17.1428 21.4583 14.3164 21.4627 11.4899C21.4639 10.8734 21.2292 10.3621 20.7849 9.95775C18.2175 7.61821 15.6433 5.28492 13.0696 2.95227C12.3755 2.32326 11.4755 2.33828 10.777 2.97167C8.12393 5.37943 5.46581 7.78219 2.81772 10.1956C2.67001 10.3301 2.5561 10.5311 2.49539 10.7226C2.42404 10.9485 2.40401 11.1982 2.40338 11.4373C2.39775 14.287 2.39838 17.1372 2.40276 19.9868C2.40276 20.164 2.42216 20.3474 2.46973 20.5176C2.67501 21.2543 3.28963 21.6955 4.09952 21.6961C6.70693 21.6974 9.31435 21.6961 11.9218 21.6961L11.9224 21.6974Z" fill={activeItem === 'home' ? "#fff" : "#94A3B8"}/>
                </g>
                <defs>
                <clipPath id="clip0_3_146">
                <rect width="23.9887" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <p className="hidden lg:block">Mes abonnements</p>
          </button>
        </li>
        <li className={classNames("h-12 w-12 flex items-center justify-center rounded-full lg:h-auto lg:w-auto", { "bg-blue text-white": activeItem === 'add-subscription' })}>
          <button onClick={() => navigate('/add-subscription')} className="w-6 h-6 lg:h-auto lg:w-auto">
            <div className="flex flex-col items-center justify-center lg:hidden">
                <div className={classNames("h-0.5 bg-secondary w-5 rotate-90 hover:rotate-45 rounded-full", {"!bg-white": activeItem === "add-subscription"}, )}></div>
                <div className={classNames("h-0.5 bg-secondary w-5 -mt-0.5 hover:-rotate-45 rounded-full", {"!bg-white": activeItem === "add-subscription"}, )}></div>
            </div>
            <p className="hidden lg:block">Ajouter un abonnement</p>
          </button>
        </li>
        <li className={classNames("h-12 w-12 flex items-center justify-center rounded-full lg:h-auto lg:w-auto", { "bg-blue text-white": activeItem === 'account' })}>
          <button onClick={() => navigate('/account')} className="w-6 h-6 -mt-0.5 lg:h-auto lg:w-auto">
            <svg className="lg:hidden" width="25" height="26" viewBox="0 0 25 26" fill={activeItem === 'account' ? "#fff" : "#94A3B8"} xmlns="http://www.w3.org/2000/svg">
                <path d="M24.3635 24.7489V20.5508C24.3635 17.5388 21.9131 15.0884 18.9011 15.0884H6.2157C3.2015 15.0884 0.75 17.5399 0.75 20.5541V24.9989V25.2489H1H24.1135V25H24.3635V24.9989V24.7489ZM22.3082 20.5497V23.1936H2.80527V20.553C2.80527 18.6726 4.33526 17.1426 6.2157 17.1426H18.9011C20.7794 17.1426 22.3082 18.6715 22.3082 20.5497Z" fill={activeItem === 'account' ? "#fff" : "#94A3B8"} stroke={activeItem === 'account' ? "#fff" : "#94A3B8"} strokeWidth="0.5"/>
                <path d="M6.18237 7.12331C6.18237 10.5548 8.90701 13.3612 12.3068 13.4929V13.4989H12.5568C16.072 13.4989 18.9312 10.6397 18.9312 7.12443C18.9312 3.6092 16.072 0.75 12.5568 0.75C9.04163 0.75 6.18237 3.60803 6.18237 7.12331ZM8.23764 7.12443C8.23764 4.74296 10.1753 2.80527 12.5568 2.80527C14.9383 2.80527 16.876 4.74296 16.876 7.12443C16.876 9.50589 14.9383 11.4436 12.5568 11.4436C10.1753 11.4436 8.23764 9.50589 8.23764 7.12443Z" fill={activeItem === 'account' ? "#fff" : "#94A3B8"} stroke={activeItem === 'account' ? "#fff" : "#94A3B8"} strokeWidth="0.5"/>
            </svg>
            <p className="hidden lg:block">Mon compte</p>
          </button>
        </li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  activeItem: PropTypes.string.isRequired,
};

export default Navbar;