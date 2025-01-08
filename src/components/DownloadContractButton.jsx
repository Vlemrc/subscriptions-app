import PropTypes from 'prop-types';

const DownloadContractButton = ({ contractUrl }) => {
  return (
    <a href={contractUrl} download>
      <button>Télécharger le contrat</button>
    </a>
  );
};

DownloadContractButton.propTypes = {
  contractUrl: PropTypes.string,
};


export default DownloadContractButton;