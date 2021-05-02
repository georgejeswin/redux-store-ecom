import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartRounded";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        <h1 className="header__logo">ShopIt</h1>
      </Link>
      <div className="header__right">
        <IconButton>
          <ShoppingCartOutlinedIcon className="icon" />
        </IconButton>
        <IconButton>
          <AccountCircleRoundedIcon className="icon" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
