import React from "react";

export default class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = { cart: [] };
    }

    render() {
        let newItem = this.props;

        return (
            <div>
                <button
                    onClick={() => {
                        this.props.updateCart(newItem);
                    }}
                >
                    Add to Cart
                </button>
            </div>
        );
    }
}
