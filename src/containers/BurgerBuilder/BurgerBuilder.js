import React,{ Component} from "react";
import Aux from '../../hoc/Auxx';
import Burger from '../../components/Burger/Burger';
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import SummaryOrder from "../../components/Burger/SummaryOrder/SummaryOrder";

const INGREDIENT_PRICES = {
    salad:0.3,
    cheese:0.5,
    meat:1.3,
    bacon:1.1
}

class BurgerBuilder extends Component{
    state ={
        ingredients :{
            bacon:0,
            salad:0,
            cheese:0,
            meat:0,
        },
        purchasable:true,
        price :{
            sum:4.0
        },
        summaryOrder:false
    }
    ///////////////FUNCTIONS///////////////////////////////////////////////////////////////////////FUNCTIONS
    ingredientsMore=(type)=>{  
        const ingredients =  {...this.state.ingredients};
        const price =  {...this.state.price};
        ingredients[type]+=1;
        this.setState({ingredients:ingredients});
        price.sum+=INGREDIENT_PRICES[type];
        this.setState({price:price});   
        this.updatePurchasable(ingredients);    
    }
    ingredientsLess=(type)=>{  
        const ingredients =  {...this.state.ingredients};
        const price =  {...this.state.price};
        if(ingredients[type]>=1){
            ingredients[type]-=1;
            this.setState({ingredients:ingredients});
            price.sum-=INGREDIENT_PRICES[type];
            this.setState({price:price});
            this.updatePurchasable(ingredients);  
        }
    }
    updatePurchasable = (ingredients) =>{
        const sum= Object.keys(ingredients)
        .map(igKey =>{
            return ingredients[igKey];
        })
        .reduce((sum,el) =>{
            return sum+el;
        },0);
        this.setState({purchasable:!sum>0});
     }
    disableButton=(type)=>{
        var buttonBoolean=true;
        const ingredients =  {...this.state.ingredients};
        if(ingredients[type]===0){
           buttonBoolean=true;
           return buttonBoolean;
        }
        else {
            buttonBoolean=false;
            return buttonBoolean;
        }
    }
    showOrder=()=>{
        let summaryOrder = this.state.summaryOrder;
        let purchasable=this.state.purchasable;
        if(!summaryOrder){
            summaryOrder=true; 
            purchasable=true;
        }
        else if(summaryOrder) {
            summaryOrder=false;
            purchasable=false;;
        }
        this.setState({purchasable:purchasable})
        this.setState({summaryOrder:summaryOrder})
    }
    continueOrder=()=>{
        alert("You continue!");
    }
    ///////////////////////RENDER/////////////////////////////////////////////////////RENDER
    render(){
        return (
            <Aux>
              <Burger ingredients={this.state.ingredients}/>
                    <Modal  show={this.state.summaryOrder} 
                            modalClosed={this.showOrder}>
                        <SummaryOrder ingredients={this.state.ingredients} 
                        price={this.state.price.sum}
                        showOrder={this.showOrder} 
                        continueOrder={this.continueOrder}/>
                    </Modal>
                <BuildControls more={this.ingredientsMore} 
                    less={this.ingredientsLess} 
                    price={this.state.price.sum}
                    disabled={this.disableButton}
                    purchasable={this.state.purchasable}
                    showOrder={this.showOrder}
                   />
            </Aux>
        );
    }
}
export default BurgerBuilder;