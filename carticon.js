import React from "react";

export default function CartIcon(props) {
    return (
        <img
            id="cart-icon"
            onClick={props.clickHandler}
            src="/shoppingcart.png"
        />
    );
}
