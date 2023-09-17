import React from "react";
import classes from './NavCartBtn.module.css';
import CartIcon from "../Carts/CartIcon";

const NavCartBtn = (props) => {
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                2
            </span>
        </button>
    )
}

export default NavCartBtn;
