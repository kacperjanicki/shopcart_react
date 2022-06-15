import React, { useContext } from "react";
import { UserNameContext } from "../App";

const Cart = () => {
    const items = useContext(UserNameContext);
    console.log(items);

    return (
        <div>
            <div>Shopping cart</div>
        </div>
    );
};

export default Cart;
