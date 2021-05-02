import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.allProducts.products[productId]);
  console.log(product);
  return (
    <div className="productDetails">
      <div className="productDetails__left">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="productDetails__right">
        <h1 className="productDetail__name">{product.title}</h1>
        <h2 className="productDetail__category">{product.category}</h2>
        <h3 className="productDetail__description">{product.description}</h3>
        <Button variant="outlined">
          Add to cart
          <ShoppingCartIcon />
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
