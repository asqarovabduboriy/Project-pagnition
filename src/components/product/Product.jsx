import React, { useState } from "react";
import "./Product.css";
import { useGetProductsQuery } from "../../context/api/productsApi";
import img from "../../assets/imgs/saot2.svg";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import Loader from "../loader/Loader";

const Product = () => {
  const [page, setPage] = useState(+sessionStorage.getItem("page") || 1);
  const [ limit, setLimit ] = useState( +sessionStorage.getItem("limit") ||  4);

  const { data, isFetching, isLoading, error } = useGetProductsQuery({
    limit: limit,
    page,
  });

  let soni = Math.ceil(data?.data?.count / limit)

  const onchange = (_, value) => {
    setPage(value);
    sessionStorage.setItem("page", value);
  };

  const onsetlimit = () => {
    setLimit(limit + 4);
    sessionStorage.setItem("limit", limit);
  };


  let products = data?.data?.products?.map((product) => (
    <div className="product" key={product.id}>
      <div className="product_img">
        <div className="overlay">
          <button className="btn_cart">
            <FaShoppingCart />
          </button>
          <button className="btn_heart">
            <FaHeart />
          </button>
        </div>
        <img
          src={product.urls[0] || img}
          alt=""
          onError={(e) => (e.target.src = img)}
        />
      </div>
      <div className="product_text">
        <h3>{product.title}</h3>
        <div className="rating">
          {Array(5)
            .fill()
            .map((_, i) => {
              return <FaStar key={i} />;
            })}
        </div>

        <div className="price">
          <p className="old_price">${product.oldPrice}</p>
          <p className="new_price">${product.price}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <h1 className="title_product">Our Latest Products</h1>
        {isFetching ? (
          <Loader count={limit} />
        ) : (
          <>
            <div className="wrapper_product">{products}</div>
            <button disabled={ soni <= page} className="btn_load" onClick={onsetlimit}>View More</button>
          </>
        )}

           <Box sx={{ display: 'flex', justifyContent: 'center',margin:'30px 0' }}>
           <Pagination
          size="small"
          count={soni}
          page={page}
          onChange={onchange}
          color="primary"
        />
           </Box>
      </div>
    </>
  );
};

export default Product;
