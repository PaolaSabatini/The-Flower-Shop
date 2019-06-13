import React from "react";
import axios from "./axios";

export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    submit() {
        console.log(this.props);
        axios
            .post("/", {
                cart: this.props.cart,
                email: this.email
            })
            .then(({ data }) => {
                location.replace("/");
            })
            .catch(err => {
                console.log("error in post", err);
            });
    }
    renderProduct(product) {
        console.log("PROPS IN SHOPING CART", this.props);
        return (
            <div className="product" key={product.id}>
                <p className="product-name">
                    {product.product.substring(0, 15)}
                </p>
                <img className="product-picture" src={product.picture} />
                <p>{product.price}</p>
                <p>{product.description}</p>
                <Cart
                    id={product.id}
                    product={product.product}
                    picture={product.picture}
                    price={product.price}
                    description={product.description}
                    clickHandler={this.props.clickHandler}
                    updateCart={this.props.updateCart}
                    cart={this.props.cart}
                />
            </div>
        );
    }
    render() {
        const handleInput = e => {
            this[e.target.name] = e.target.value;
        };
        console.log("PROPS IN CART", this.props);
        return (
            <div id="wrap-cart-container">
                <div id="cart-container">
                    <button id="close" onClick={this.props.clickHandler}>
                        X
                    </button>
                    <p>ITEMS: </p>

                    <div id="items-list">
                        {this.props.cart.map(product => {
                            return (
                                <div className="items-cart" key={product.id}>
                                    <p>{product.product} </p>
                                    <img
                                        className="picture-cart"
                                        src={product.picture}
                                    />
                                    <p>{product.description} </p>
                                    <p>{product.price} </p>
                                </div>
                            );
                        })}
                    </div>

                    <div id="checkout">
                        <p>
                            Please, confirm your e-mail before proceed with your
                            order.
                        </p>
                        <input
                            id="email-checkout"
                            onChange={handleInput}
                            type="email"
                            name="email"
                            placeholder="e-mail"
                        />
                        <button onClick={e => this.submit()}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    }
}
