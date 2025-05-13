/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from 'prop-types';

/**
 * Circular progress
 */
const CircularProgress = ({ classes = '', size = '' }) => {
  return (
    <div
      role='progressbar'
      className={`circular-progress ${size} ${classes}`}
    ></div>
  );
};

CircularProgress.propTypes = {
  classes: PropTypes.string,
  size: PropTypes.string,
};

export { CircularProgress };
