import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ children, className, type }) => {
  return (
    <button type={type} className={classNames("w-full bg-blue hover:opacity-80 text-white py-4 rounded-full", className)}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;