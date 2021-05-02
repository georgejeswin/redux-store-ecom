import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 295,
    minHeight: 420,
    maxHeight: 420,
    padding: "10px",
    marginBottom: "10px",
    textDecoration: "none",
  },
});

const Product = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  return (
    <div className="product">
      {products.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <Link to={`/product/${product.id}`} className="link">
            <Card className={classes.root} key={product.id}>
              <CardActionArea>
                <div className="productImg__container">
                  <img className="product__image" src={product.image} alt="" />
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {product.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        ))
      )}
    </div>
  );
};

export default Product;
