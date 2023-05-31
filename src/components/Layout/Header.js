import React from "react";

import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <React.Fragment>
    <header className={classes.header}>
        <h1>Simmer</h1>
        <HeaderCartButton />
    </header>
    <div className={classes['main-img']}>
        <img src={mealsImg} alt='Table of food' />
    </div>
  </React.Fragment>
};

export default Header;
