import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import Categorypage from './pages/Categorypage';
import Notification from './pages/Notification';
import Footer from './components/Footer';
import Product from './components/Product'
import Cart from './pages/Cart'
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category' element={<Categorypage />}/>
            <Route path= '/products/:id' element={<Product />}/>
            <Route path='/noti' element={<Notification />}/>
            <Route path ='/cart' element={<Cart />}/>
            <Route path='/privacy' element={<Privacy />}/>
            <Route path='/term' element={<Terms />} />
        </Routes>
        <Footer/>
      </Router>
    </>
    
  );
}

export default App;
