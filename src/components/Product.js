import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addCart} from '../redux/action/index'
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import '../assets/css/product.css'

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400}/>
                </div>
                <div className="col-md-6" style={{lineHeight:2}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{marginLeft:6}} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <div className='product-detail-wrapper'>
                <div className='product-detail-inner'>
                    <div className="product-detail-img">
                        <img src={product.image} alt={product.title}/>
                    </div>
                    <div className="product-detail-text">
                        <h4 className="product-detail-category">
                            {product.category}
                        </h4>
                        <h1 className="product-detail-title">{product.title}</h1>
                        <p className="product-detail-rating">
                            Rating: {product.rating && product.rating.rate} 
                            <i className="fa fa-star"></i>
                        </p>
                        <p className="product-detail-des">{product.description}</p>
                        <h3 className="product-detail-price">
                            $ {product.price}
                        </h3>
                        <div className='product-detail-control'>
                            <button className="product-detail-btn" onClick={()=>addProduct(product)}>
                                Thêm vào giỏ hàng
                            </button>
                            <NavLink to="/cart" className="product-detail-cart-btn">
                                Đi đến giỏ hàng
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
            <div className="container">                
                    {loading ? <Loading/> : <ShowProduct/>}
            </div>
    );
}

export default Product;
