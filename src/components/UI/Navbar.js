import React from "react";
import classes from './Navbar.module.css'
import NavCartBtn from "./NavCartBtn";

const Navbar = () =>{
    return (
        <>
            <div className={classes.header}>
                <h2>Meals Mela</h2>
                <NavCartBtn />
            </div>
        </>
    )
}

export default Navbar;

