import PropTypes from 'prop-types';

const Subcard = ({ title, children }) => {
    return (
        <div className="subcard">
        <h2>{title}</h2>
        {children}
        </div>
    );
}

Subcard.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Subcard;