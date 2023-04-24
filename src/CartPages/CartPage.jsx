import Navbar from "../Navbar/Navbar";
import CartItems from "./Cartitems/CartItems";


function CartPage(){
    return(
        <div>
            <Navbar></Navbar>
            <br/>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <CartItems></CartItems>
                    </div>
                </div>
                
            </div>

        </div>

    )
}



export default CartPage;