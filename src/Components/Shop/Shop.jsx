
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './products.css'
const Shop = () =>{

    const [products,setProducts] = useState([]);

    useEffect(() => {
            fetchProducts();
        }, []);
        
        function fetchProducts (){
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
        }
        
    return(
        
        <div className="container"> 
        {products.length > 0 ? 
        <div>
            <div className="text-center my-5">
                <h2>Products List</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                {
                    products.map((item , idx) => {
                        return <Link to={`/products/${item.id}`} key={idx} className='productCard d-flex justify-content-center flex-column align-items-center'>
                            <img src={item.image} className='d-block'/>
                            <span>{item.title}</span>
                            <p>{item.description}</p>
                        </Link>
                    })
                }
            </div>
        </div> : 
        <div className="spinnerLoading">
        <div class="dots-bars-2"></div>
        </div>
        }        
            
        </div>
        


    )
}

export default Shop;