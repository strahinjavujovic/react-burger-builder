import React from "react";
import Aux from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";
const summaryOrder  =(props)=>{

    const ingredientsOrder=Object.keys(props.ingredients)
        .map(igKey=>{
            return <li key={igKey}>{igKey}:  {props.ingredients[igKey]} </li>
        });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>{ingredientsOrder}</ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}$</strong></p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.showOrder}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continueOrder}>CONTINUE</Button>
        </Aux>
    );
}
export default summaryOrder;