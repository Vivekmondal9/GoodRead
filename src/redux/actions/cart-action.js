import { ActionTypes } from "../constants/action-types"

export const addToCart=(product)=>{
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product,
    };
};

export const increaseQuantity=(product)=>{
    return{
      type:ActionTypes.INCREASE_QUANTITY,
      payload:product,
    }
  }
 
  
export const decreaseQuantity=(product)=>{
    return{
        type:ActionTypes.DECREASE_QUANTITY,
        payload:product,
    };
}  

export const deleteItem=(product)=>{
    return{
        type:ActionTypes.DELETE_CART,
        payload:product,
    };
}  