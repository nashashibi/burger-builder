import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
  const ingredientsList = Object.keys(props.ingredients)
    .map(ing => {
      return (
        <li key={ing}>
          <strong>{ing}:</strong> {props.ingredients[ing]}
        </li>
      )
    });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientsList}
      </ul>
      <p><strong>Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
    </Aux>
  )
};

export default orderSummary;