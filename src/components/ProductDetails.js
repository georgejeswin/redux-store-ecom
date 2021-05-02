import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";
import { Chip } from "@material-ui/core";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && product !== "") fetchProductDetails();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch]);
  //console.log(product);
  return (
    <>
      {product ? (
        <div className="productDetails">
          <div className="productDetails__left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="productDetails__right">
            <h1 className="productDetail__name">{product.title}</h1>
            {/* <h2 className="productDetail__category">{product.category}</h2> */}
            <Chip label={product.category} />

            <h3 className="productDetail__description">
              {product.description}
            </h3>
            <Button variant="outlined">
              Add to cart
              <ShoppingCartIcon />
            </Button>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default ProductDetails;
