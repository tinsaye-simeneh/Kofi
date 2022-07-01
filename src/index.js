import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/header';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'

const coffeeData = [
  {
    name: "Kaldis Coffee",
    price: 76,
    category: "Arabica",
    telegram: "kaldisCoffee",
    phone: "+251900000000",
  },
  {
    name: "Starbucks",
    price: 25,
    category: "Espresso",
    telegram: "StarBucks",
    phone: "+251900000000",
  },
  {
    name: "Tomoka",
    price: 50,
    category: "Latte",
    telegram: "TomokaCoffee",
    phone: "+251900000000",
  },
  {
    name: "Karavan",
    price: 45,
    category: "Macchiato",
    telegram: "Karavan",
    phone: "+251900000000",
  },
];
export default function Kofi() {
  
   const [coffee, setCoffee] = useState(coffeeData);
  return(
    <>
     <div style={{background:'#103037'}}>
    <Header setCoffee={setCoffee} coffee={coffee} />
  
  <Router>
    <Routes>
    <Route path="/" element={<Home coffee={coffee}/>}/>
    <Route path="/Home" element={<Home coffee={coffee}/>} />
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </Router>   
      
    <Footer/>
    </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Kofi/>
);

