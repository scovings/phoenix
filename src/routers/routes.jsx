/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { createBrowserRouter } from 'react-router-dom';

/**
 * Components
 */
import App from '../App.jsx';
import Register from '../pages/Register.jsx';

/**
 * Actions
 */
import registerAction from './actions/registerAction.js';

/**
 * Router
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  },
]);

export default router;
