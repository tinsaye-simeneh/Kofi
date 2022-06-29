import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/pages/About'
import Contact from './components/pages/Contact'

export default function Kofi(){
  return(
    <>
    <div style={{background:'#103037'}}>
    <Header/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Kofi/>
);

