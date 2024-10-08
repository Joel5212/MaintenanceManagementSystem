import React from 'react';
import ReactDOM from 'react-dom/client';
import './CSS/assets.css'
import './CSS/categories.css'
import './CSS/global.css'
import './CSS/login.css'
import './CSS/preventiveMaintenance.css'
import './CSS/repairs.css'
import './CSS/users.css'
import './CSS/teams.css'
import './CSS/registration.css'
import './CSS/locations.css'
import './CSS/dashboard.css'
import './CSS/failureDiagnosis.css'
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { PrevRouteContextProvider } from './context/PrevRouteContext';
import { OrgRegisterContextProvider } from './context/OrgRegisterContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <PrevRouteContextProvider>
      <OrgRegisterContextProvider>
        <App />
      </OrgRegisterContextProvider>
    </PrevRouteContextProvider>
  </AuthContextProvider>
)