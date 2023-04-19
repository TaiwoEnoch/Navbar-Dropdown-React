import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Modal from './modal';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Modal />
  </React.StrictMode>,
);
