import './products.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch , useSelector} from "react-redux"
import { getProducts } from '../redux/features/ShopSlice';



const Shop = () =>{

    const [products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const response = useSelector((state)=>state.shop.products)
    const isloading = useSelector((state)=>state.shop.isloading)

    console.log(isloading);
    console.log(response);

    useEffect(() => {
           dispatch(getProducts())
           setProducts(response)
        }, []);
        

        //OLD FETCH
        // function fetchProducts (){
        //     fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>setProducts(json))
        // }
        
    return(
        
        <div className="container"> 
        {!isloading  ? 
        <div>
            <div className="text-center my-5">
                <h2>Products List</h2>
            </div>
            <div className='d-flex flex-wrap justify-content-center gap-5'>
                {
                    response.map((item , idx) => {
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
        <div className="dots-bars-2"></div>
        </div>
        }        
            
        </div>
        


    )
}

export default Shop;