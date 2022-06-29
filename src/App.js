import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'


//imports
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Counter from './Components/counter/Counter';
import Shop from './Components/Shop/Shop';
import Product from './Components/product/Product';

function App() {
  return (
  <BrowserRouter>
    <Navbar/>

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/counter' element={<Counter/>}/>
    <Route path='/products/:id' element={<Product/>}></Route>
    </Routes>

  {/* <Counter/> */}

  </BrowserRouter>
  )
    
}

export default App;
