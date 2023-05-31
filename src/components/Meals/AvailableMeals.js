import React from "react";

import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Noodle Soup",
    description: "Finest chicken and veggies",
    price: 7.99,
  },
  {
    id: "m2",
    name: "Tortilla Soup",
    description: "A mexican specialty!",
    price: 8.99,
  },
  {
    id: "m3",
    name: "Clam Chowder",
    description: "New England Style",
    price: 11.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 9.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
