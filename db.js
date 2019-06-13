var spicedPg = require("spiced-pg");

var dbUrl =
    process.env.DATABASE_URL ||
    "postgres://postgres:postgres:postgres@localhost:5432/onlinestore";

var db = spicedPg(dbUrl);

//(((((((((((((((((((((((((((((((((((((((())))))))))))))))))))))))))))))))))))))))

exports.addOrders = function addOrders(product, price, email) {
    let q =
        "INSERT INTO orders (product, price, email) VALUES ($1, $2, $3) RETURNING *;";
    let params = [product, price, email];
    return db.query(q, params);
};
