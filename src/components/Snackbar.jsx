/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

const Snackbar = ({ snackbar }) => {
  return (
    <>
      {snackbar.open && (
        <div className={`snackbar ${snackbar.type}`}>
          <span>{snackbar.message}</span>
        </div>
      )}
    </>
  );
};

Snackbar.propTypes = {
  snackbar: PropTypes.object,
};

export default Snackbar;
