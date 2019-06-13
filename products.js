import React from "react";

import Cart from "./cart";

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    renderProduct(product) {
        const search = this.state;

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
    onchange(e) {
        this.setState({ search: e.target.value });
    }

    render() {
        const { search } = this.state;

        let filteredProducts = products.filter(product => {
            return (
                product.product.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1 ||
                product.description
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) !== -1
            );
        });
        return (
            <div>
                <div className="search">
                    <img id="search-icon" src="/search.png" />
                    <input
                        type="text"
                        value={this.state.search}
                        onChange={this.onchange.bind(this)}
                    />
                    <ul />
                </div>

                <div className="container-products">
                    {filteredProducts.map(product => {
                        return this.renderProduct(product);
                    })}
                </div>
            </div>
        );
    }
}

let products = [
    {
        id: 1,
        product: "African Daisies",
        picture:
            "https://i.pinimg.com/564x/49/fb/80/49fb80cf02c2968881aae690a9ad168a.jpg",
        price: "€ 2",
        description: "Growing African Daisies"
    },
    {
        id: 2,
        product: "Lotus Flower",
        picture:
            "https://i.pinimg.com/564x/5a/27/43/5a2743da81fdd855ddba25c43292f69d.jpg",
        price: "€ 5",
        description: "Lotus Flower from Hong Kong"
    },
    {
        id: 3,
        product: "Schizostylis Coccinea",
        picture:
            "https://i.pinimg.com/564x/2e/cf/06/2ecf067a2069128f44d75d25a32e219e.jpg",
        price: "€ 3",
        description: "Beautiful Schizostylis Coccinea"
    },
    {
        id: 4,
        product: "Plumeria",
        picture:
            "https://i.pinimg.com/564x/12/64/da/1264da4a3f18207dc22592102abae40d.jpg",
        price: "€ 1",
        description: "The sweetly scented flower of the tropics"
    },
    {
        id: 5,
        product: "Dahlia",
        picture:
            "https://i.pinimg.com/564x/b7/ea/45/b7ea45721fd557665a75a10818bfa135.jpg",
        price: "€ 6",
        description: "These are loved by bees"
    },
    {
        id: 6,
        product: "Peony",
        picture:
            "https://i.pinimg.com/564x/41/c0/4f/41c04fb2b1eb280a25f1ddffd08caefa.jpg",
        price: "€ 4",
        description: "Soft clay coral pink peony"
    },
    {
        id: 7,
        product: "Blue Rose",
        picture:
            "https://i.pinimg.com/564x/97/40/2c/97402c6df4f4b03ad98cbe1349709f74.jpg",
        price: "€ 7",
        description: "The world's first blue roses"
    },
    {
        id: 8,
        product: "Cherry Blossom",
        picture:
            "https://i.pinimg.com/564x/c7/01/4f/c7014f0c3f441ec196ec08e4a09f100b.jpg",
        price: "€ 5",
        description: "Cherry Blossoms from Japan"
    }
];
