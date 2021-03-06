import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
   
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
           .map(igkey => {
           return (
           <li key={igkey}>
               <span style={{textTransform: 'capitalize'}}>{igkey}</span>: {this.props.ingredients[igkey]}
               </li>);
         } );
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>An awesome Vadapaav with:</p>
                <ul>
                 {ingredientSummary}
                </ul>
        <p><strong>Total Price: ₹ {this.props.price.toFixed(0)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>   
             )

    }
} 

export default OrderSummary;