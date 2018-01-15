import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  // const ingredients = Object.keys(props.ingredients)
  //   .map(ing => {
  //   return [...Array(props.ingredients[ing])].map((_, i) => {
  //     return <Ingredient key={ing + i} type={ing} />;
  //   });
  // });
  let ingredients = Object.keys(props.ingredients)
    .reduce((ingArr, ing) => {
      for (let i = 1; i <= props.ingredients[ing]; i++) {
        ingArr.push(<Ingredient key={ing + i} type={ing} />);
      }
      return ingArr
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <Ingredient key='breadTop' type='bread-top' />
      {ingredients}
      <Ingredient key='breadBottom' type='bread-bottom' />
    </div>
  );
};

export default burger;