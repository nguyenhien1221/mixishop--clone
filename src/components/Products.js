import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import '../assets/css/products.css'


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
    <>
        <div className="">
            <Skeleton height={350}/>
        </div>
        <div className="">
            <Skeleton height={350}/>
        </div>
        <div className="">
            <Skeleton height={350}/>
        </div>
        <div className="">
            <Skeleton height={350}/>
        </div>
    </>
    );
  };

  const filterProduct = (cat) => {
      const updatedList = data.filter((x)=>x.category === cat);
      setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="category-wrapper">
          <div className="filter">
            <button className="filter-btn" onClick={()=>setFilter(data)}>
              Tất cả
            </button>
            <button className="filter-btn" onClick={()=>filterProduct("men's clothing")}>
              Thời trang nam
              </button>
            <button className="filter-btn" onClick={()=>filterProduct("women's clothing")}>
              Thời trang nữ
            </button>
            <button className="filter-btn" onClick={()=>filterProduct("jewelery")}>
              Trang sức
            </button>
            <button className="filter-btn" onClick={()=>filterProduct("electronics")}>
              Đồ điện tử
            </button>
          </div>
          <div className="cards-wrapper">
            {filter.map((product) => {
              return (
                
                  <div class="card-wrapper" key={product.id}>
                        <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                        <div class="card-body">
                          <h5 class="card-title ">{product.title.substring(0,40)}...</h5>
                          <div className="card-price">
                            <p class="card-text ">
                              $ {product.price}
                            </p>
                              <NavLink to={`/products/${product.id}`} className="card-btn">
                                Mua ngay
                              </NavLink>
                          </div>
                        </div>
                  </div>                               
              );
            })}
          
          </div>
          
        </div>

      </>
    );
  };
  return (
    <div>
        <div className="product-wrapper">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
    </div>
    
  );
};

export default Products;
