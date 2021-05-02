import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import Product from "./Product";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => console.log(err));
    console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productListing">
      <Product />
    </div>
  );
};

export default ProductListing;
