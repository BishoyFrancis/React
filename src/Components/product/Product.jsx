import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import './product.css'

const Product = () =>{
    const urlParams = useParams();

    const [product,setProduct] = useState({})

    useEffect(() => {
        fetchProducts(urlParams.id);
        console.log(product.length)
    }, []);

    function fetchProducts (id){
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }

    return (
        <div className="container mb-1">
            {
            product.id ?
            <div className="row productDetail">
                <div className="col-4">
                    <img src={product.image} />
                </div>
                <div className="col-5 productInfo">
                    <div className="roundedLine"></div>
                    <h2>{product.title}</h2>
                    <span className="d-block">{product.price}$</span>
                    <p>{product.description}</p>
                    <button className="btn btn-success">Add To Cart</button>
                </div>
            </div>
            :
            <div className="spinnerLoading">
            <div class="dots-bars-2"></div>
            </div>
            }
        </div>
    )
}

export default Product