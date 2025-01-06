import PropTypes from 'prop-types';

const Button = ({ children }) => {
  return <button className="w-full bg-blue hover:opacity-80 text-white mt-8 py-4 rounded-full">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;