import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 295,
    minHeight: 390,
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
          <Link to={`/product/${product.id}`} className="product__link">
            <Card className={classes.root} key={product.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="250"
                  margin="30"
                  image={product.image}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {product.description}
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
