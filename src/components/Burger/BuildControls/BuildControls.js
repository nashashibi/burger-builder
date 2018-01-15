import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <h3>Price: {props.price.toFixed(1)}</h3>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIng={() => props.addIng(ctrl.type)}
        removeIng={() => props.removeIng(ctrl.type)}
        disabled={props.disabledIngs[ctrl.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>ORDER NOW</button>
  </div>
);

export default buildControls;