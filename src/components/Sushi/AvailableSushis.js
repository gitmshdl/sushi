import React from "react";
import classes from "./AvailableSushis.module.css";
import SushiItem from "./SushiItem/SushiItem";

const loadedSushi = [
  {
    id: 1,
    description:
      "Avocado, cucumber, mixed crab meat with deep fried yam on top (torched)",
    name: "Sun Set",
    price: 14.95,
  },
  {
    id: 2,
    description:
      "Salmon, avocado, cream cheese with smoke salmon on top and sliced halipino",
    name: "Double Philadelpia",
    price: 14.95,
  },
  {
    id: 3,
    description: "Shrimp tempura roll with sliced avocado on top",
    name: "Dragon Roll",
    price: 14.95,
  },
  {
    id: 4,
    description: "Shrimp tempura roll with sliced avocado on top",
    name: "Green Dragon Roll",
    price: 11.5,
  },
  {
    id: 5,
    description: "Shrimp tempura roll with sliced salmon and tobiko on top",
    name: "Red Dragon Roll",
    price: 12.5,
  },
  {
    id: 6,
    description:
      "Shrimp tempura roll with sliced salmon, tuna, shrimp, white fish and tobiko on top",
    name: "Rainbow Dragon Roll",
    price: 13.5,
  },
  {
    id: 7,
    description: "Shrimp tempura roll with sliced unagi, avocado on top",
    name: "Black Dragon Roll",
    price: 17.5,
  },
  {
    id: 8,
    description:
      "Shrimp tempura, avocado and cucumber roll topped with spicy kani(crab) and tobiko",
    name: "Spicy Crab Dragon Roll",
    price: 13.5,
  },
];

export default function AvailableSushis() {
  const sushiList = loadedSushi.map((sushi) => (
    <SushiItem
      id={sushi.id}
      key={sushi.id}
      name={sushi.name}
      description={sushi.description}
      price={sushi.price}
    />
  ));

  return (
    <section className={classes.sushis}>
      <ul>{sushiList}</ul>
    </section>
  );
}
