/**
 * @copyright 2025 scovings
 * @license Apache-2.0
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

/**
 * Custom modules
 */
import router from './routes/routes';

/**
 * Components
 */
import SnackbarProvider from './contexts/SnackbarContext';

/**
 * CSS link
 */
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </StrictMode>,
);
