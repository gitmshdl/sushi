import React from "react";
import classes from "./SushiSummary.module.css";

export default function SushiSummary() {
  return (
    <section className={classes.summary}>
      <h2>Delicious Sushi, Delivered To You</h2>
      <p>
        Choose your favorite sushi from our broad selection of menu and enjoy a
        delicious lunch or dinner at home.
      </p>
      <p>
        All our sushis are cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </section>
  );
}
