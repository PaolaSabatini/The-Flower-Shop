import React from "react";

import { HashRouter, Route } from "react-router-dom";
import Products from "./products";
import CartIcon from "./carticon";
import ShoppingCart from "./shoppingcart";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cart: [] };
        this.updateCart = this.updateCart.bind(this);
    }
    updateCart(item) {
        this.setState({ cart: [...this.state.cart, item] });
    }
    render() {
        return (
            <div id="welcome">
                <div id="header">
                    <h1>The Flower Shop</h1>
                    <div id="cart-counter">
                        <CartIcon
                            clickHandler={() =>
                                this.setState({
                                    isCartVisible: true
                                })
                            }
                        />
                    </div>
                </div>
                <div>
                    <HashRouter>
                        <div>
                            <Route
                                exact
                                path="/"
                                render={props => {
                                    return (
                                        <Products
                                            updateCart={this.updateCart}
                                            clickHandler={() =>
                                                this.setState({
                                                    isCartVisible: true
                                                })
                                            }
                                            cart={this.state.cart}
                                        />
                                    );
                                }}
                            />
                        </div>
                    </HashRouter>
                    {this.state.isCartVisible && (
                        <ShoppingCart
                            updateCart={this.updateCart}
                            clickHandler={() =>
                                this.setState({
                                    isCartVisible: false
                                })
                            }
                            cart={this.state.cart}
                        />
                    )}
                </div>
            </div>
        );
    }
}
