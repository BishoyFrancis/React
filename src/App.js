import './App.css';
import {BrowserRouter , Route , Routes , Switch} from 'react-router-dom';



//imports
import Navbar from './Components/navbar/Navbar';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Counter from './Components/counter/Counter';
import Shop from './Components/Shop/Shop';
import Product from './Components/product/Product';
import Todo from './Components/todo/Todo';
import Register from './Components/register/Register';



function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/todoapp' element={<Todo/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      


  </BrowserRouter>
  )
    
}

export default App;
