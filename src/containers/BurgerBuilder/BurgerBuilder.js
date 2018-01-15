import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false
  };

  updatePurchasable(ingredients) {
    ingredients = {
      ...ingredients
    };
    const ingSum = Object.keys(ingredients)
      .reduce((sum, ing) => {
        return sum + ingredients[ing]
      }, 0);
    this.setState({ purchasable: ingSum > 0 });
  };

  updatePurchasing = () => {
    this.setState({ purchasing: true });
  };

  closeModalHandler = () => {
    this.setState({ purchasing: false });
  };

  continuePurchase = () => {
    alert('To be continued...');
  };

  addIngredient = (type) => {
    const oldIngCount = this.state.ingredients[type];
    const updatedIngCount = oldIngCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedIngCount;
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
    this.updatePurchasable(updatedIngredients);
  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const oldIngCount = this.state.ingredients[type];
      const updatedIngCount = oldIngCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedIngCount;
      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedPrice
      });
      this.updatePurchasable(updatedIngredients);
    }
  };

  render() {
    const disabledIngs = {
      ...this.state.ingredients
    };

    for (let key in disabledIngs) {
      disabledIngs[key] = disabledIngs[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            purchaseCancelled={this.closeModalHandler}
            purchaseContinued={this.continuePurchase}
            price={this.state.totalPrice} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIng={this.addIngredient}
          removeIng={this.removeIngredient}
          disabledIngs={disabledIngs}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.updatePurchasing} />
      </Aux>
    );
  }
}

export default BurgerBuilder;