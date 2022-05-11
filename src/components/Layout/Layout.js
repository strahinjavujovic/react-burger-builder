import React from "react";
import classes from './Layout.css';
import Auxx from '../../hoc/Auxx';
import Toolbar from "../Navigation/Toolbar/Toolbar";
const layout = (props) => (
    <Auxx>
        <Toolbar/>
        <main className={classes.Content}> 
            {props.children}
        </main>
    </Auxx>
);

export default layout;