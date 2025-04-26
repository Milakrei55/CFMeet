import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


// atatus.config('ca78859da25e4bb78c7f40a5bff94f87').install();


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <App />
 </React.StrictMode>,
);
serviceWorkerRegistration.register();