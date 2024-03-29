import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/index';
import About from './pages/About'
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Erreur from './pages/Error'
import Logements from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Kasa" element={<App />} />
                <Route path="/About" element={<About />} />
                <Route path="/logement/:id" element={<Logements />} />
                <Route path="*" element={<Erreur />} />
                
            </Routes>
            <Footer />
                  </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
