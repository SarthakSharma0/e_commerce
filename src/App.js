import './App.css';
import Navbar from './components/Navbar';
import Foot from './components/Foot';
import Home from './components/Home';
import Shirts from './components/Shirts';
import Shoes from './components/Shoes';
import Sunglasses from './components/Sunglasses';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Items from './components/Items'
import React from 'react'
import ItemState from './context/items/ItemState';
import{
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <ItemState>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={[<Navbar isActive='home'/>,<Home/>,<Foot/>]}/>
        <Route exact path="/shirts" element={[<Navbar isActive='shop'/>,<Shirts/>,<Foot/>]}/>
        <Route exact path="/shoes" element={[<Navbar isActive='shop'/>,<Shoes/>,<Foot/>]}/>
        <Route exact path="/sunglasses" element={[<Navbar isActive='shop'/>,<Sunglasses/>,<Foot/>]}/>
        <Route exact path="/blog" element={[<Navbar isActive='blog'/>,<Blog/>,<Foot/>]}/>
        <Route exact path="/contact" element={[<Navbar isActive='contact'/>,<Contact/>,<Foot/>]}/>
        <Route exact path="/login" element={[<Navbar isActive='login'/>,<Login/>,<Foot/>]}/>
        <Route exact path="/signup" element={[<Navbar isActive='login'/>,<Signup/>,<Foot/>]}/>
        <Route exact path="/cart" element={[<Navbar isActive='login'/>,<Items/>,<Foot/>]}/>

      </Routes>
    </BrowserRouter>
    </ItemState>
    
  );
}

export default App;
