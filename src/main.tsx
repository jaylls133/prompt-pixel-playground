
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// For local development, you might want to start the API server
// In production, this would be handled by your hosting platform
if (process.env.NODE_ENV === 'development') {
  import('./server/api').then(({ setupApiHandler }) => {
    setupApiHandler();
  }).catch(err => {
    console.error('Failed to setup API handler:', err);
  });
}

createRoot(document.getElementById("root")!).render(<App />);
