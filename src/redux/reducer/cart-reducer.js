import { ActionTypes } from "../constants/action-types";


const initialState = {
    numberCart: 0,
    carts: []
}


function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ActionTypes.GET_NUMBER_CART:
            return {
                ...state
            };
        case ActionTypes.ADD_TO_CART:
            if (state.numberCart === 0) {
                let items = {
                    ...payload,
                    quantity: 1
                };
                state.carts.push(items);
            } else {
                let check = false;
                state.carts.map((item, index) => {
                    if (item.id === payload.id) {
                        state.carts[index].quantity++;
                        check = true;
                    };
                });
                if (!check) {
                    let _item = {
                        ...payload,
                        quantity: 1
                    };
                    state.carts.push(_item);
                }
            }

            return {
                ...state,
                numberCart: state.numberCart + 1
            };

        case ActionTypes.INCREASE_QUANTITY:

            state.carts.map((item, index) => {
                
                if (item.id === payload.id) {
                    state.carts[index].quantity++;


                };
            });

            return {
                ...state,
                numberCart: state.numberCart
            };
        case ActionTypes.DECREASE_QUANTITY:


            state.carts.map((item, index) => {

                if (item.quantity > 1) {
                    if (item.id === payload.id) {
                        state.carts[index].quantity--;

                    };
                }
                else{
                    state.carts.splice(state.carts.indexOf(item),1)
                }


            });
            return {
                ...state,
                numberCart: state.numberCart
            };

        case ActionTypes.DELETE_CART:
            state.carts.map((item,index)=>{
               state.carts.splice(state.carts.indexOf(item),1)
            });
            return{
                ...state
            }

        default:
            return state


    }

};

export default cartReducer;