import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ onClick, className, children, type }) => {
  return (
    <button onClick={onClick} type={type} className={classNames("w-full bg-blue hover:opacity-80 text-white py-4 rounded-full", className)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;