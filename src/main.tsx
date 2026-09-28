import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { initAnalyticsListeners } from './lib/analytics';
import { loadTrustpilotWhenAllowed, syncGoogleConsentMode } from './lib/consent';
import './styles/site.css';

initAnalyticsListeners();
syncGoogleConsentMode();
loadTrustpilotWhenAllowed();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
