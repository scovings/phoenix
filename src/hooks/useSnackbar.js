/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useContext } from 'react';

/**
 * Context
 */
import { SnackbarContext } from '../contexts/SnackbarContext';

export const useSnackbar = () => useContext(SnackbarContext);
