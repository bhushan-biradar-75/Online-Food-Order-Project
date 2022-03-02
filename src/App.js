import React from 'react';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Product from './components/Product';
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<Home/>} />
        <Route path="/Menu" element={<Menu />} />
        <Route path='/Product' element={<Product/>}/>
        <Route path="/Cart" element={<Cart />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;
