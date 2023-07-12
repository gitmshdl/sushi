import React from "react";
import classes from "./Header.module.css";
import sushiImage from "../../assets/s.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Sushi</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.image}>
        <img src={sushiImage} alt="sushi" />
      </div>
    </React.Fragment>
  );
}
