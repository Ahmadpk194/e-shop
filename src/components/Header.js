import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useAuth } from "./firebase";
import { flagFn } from "./firebase";

import "./Header.css";

function Header() {
  const currUser = useAuth();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <header className="header">
      <div className="header__logo">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "white", display: "flex" }}
        >
          <StorefrontIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">eSHOP</h2>
        </Link>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <small style={{ fontSize: "10px" }}>logged as :</small>
          <p style={{ fontSize: "13px" }}>{currUser?.email}</p>
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">Hello Guest</span>
            <span className="nav__itemLineTwo">Sign In</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Shop</span>
        </div>
        <div className="nav__itemBasket">
          <Link to="/checkout">
            <span className="nav__itemLineOne">
              <ShoppingBasketIcon
                style={{ textDecoration: "none", color: "white" }}
                className="itemBasket"
              />
            </span>
          </Link>
          <span className="nav__itemLineTwo nav__basketCount">
            {basket.length}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
