import React from "react";
import classes from './BuildControls.css';

import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];
const buildControls = (props) =>(

    <div className={classes.BuildControls}>
         <p>Price is: {props.price.toFixed(2)}</p>
        {controls.map(ctrl =>( 
            <BuildControl key={ctrl.label} 
                label={ctrl.label} 
                more={()=>props.more(ctrl.type)} 
                less={()=>props.less(ctrl.type)} 
                disabled={props.disabled(ctrl.type)}/>
        ))}
        <button className={classes.OrderButton}
        disabled={props.purchasable}
        onClick={props.showOrder}>ORDER NOW</button>
    </div>
);

export default buildControls;