import { Link } from 'react-router-dom';
import '../components.css' 

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-secondary justify-content-center align-items-center p-2 ">
            <div className="container">
                <h2 style={{color:'#fff'}}>Products</h2>
                <ul className="d-flex gap-5 unlist align-items-center mt-3">
                    <li className="list-item"><Link to='/'>Home</Link></li>
                    <li className="list-item"><Link to='/about'>About</Link></li>
                    <li className="list-item"><Link to='/shop'>Shop</Link></li>
                    <li className="list-item"><Link to='/counter'>Counter</Link></li>
                    <li className='list-item'><Link to='/todoapp'>Todo-App</Link></li>
                    <li className='list-item'><Link to='/register'>Register</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;