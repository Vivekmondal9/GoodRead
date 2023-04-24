import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, deleteItem } from "../../redux/actions/cart-action";

function CartItems() {

    let dispatch = useDispatch();

    const { carts, numberCart } = useSelector((state) => state);

    function onClickHandler(e) {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].id == e.target.id) {
                console.log(carts[i])
                dispatch(increaseQuantity(carts[i]))
            }
        }

    }

    function decreasequantity(e) {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].id == e.target.id) {
                console.log(carts[i])
                dispatch(decreaseQuantity(carts[i]))
            }
        }

    }
    function deteContent(e) {
        for (let i = 0; i < carts.length; i++) {
            if (carts[i].id == e.target.id) {
                console.log(carts[i])
                dispatch(deleteItem(carts[i]))
            }
        }

    }



    return (
        <div style={{ backgroundColor: "#fff", padding: "20px" }}>
            <h2 className="text-center">Your Cart {numberCart} items</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="2">Items</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {carts.map((item, index) => (

                        <tr>
                            <td>
                                <img src={item.image} style={{ height: "20vh", width: "10vw" }} alt="Load Image" className="img-thumbnail" />
                            </td>
                            <td>
                                <h3>{item.title}</h3>
                                <p>{item.author}</p>
                            </td>
                            <td>
                                <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                                    <button type="button" className="btn btn-info" id={item.id} onClick={decreasequantity}>-</button>
                                    <h3>{item.quantity}</h3>
                                    <button onClick={onClickHandler} type="button" id={item.id} className="btn btn-info" >+</button>
                                    <button onClick={deteContent} className="btn btn-light fa fa-trash-o" id={item.id}></button>
                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )



}


export default CartItems;