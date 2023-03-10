import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsAm from "./pages//i18n/locales/am";
import translationsEn from "./pages/i18n/locales/en";
import translationsRu from "./pages//i18n/locales/ru";


let language = localStorage.getItem("lang");

i18n.use(initReactI18next).init({
  resources: {
    am: { translation: translationsAm },
    en: { translation: translationsEn },
    ru: { translation: translationsRu },
    
  },
  lng: language,
  fallbackLng: "am",
  interpolation: { escapeValue: false },
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
