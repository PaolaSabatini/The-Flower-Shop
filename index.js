const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./db");
const chalkAnimation = require("chalk-animation");
const bodyParser = require("body-parser");
var path = require("path");
const config = require("./config");
const server = require("http").Server(app);
const io = require("socket.io")(server, { origins: "localhost:8080" });

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

app.use(bodyParser.json());
app.use(express.static("./public"));

//-------------       WELCOME     ------------//

app.get("/welcome", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
    const { email, cart } = req.body;

    let promises = [];

    for (let i = 0; i < cart.length; i++) {
        promises.push(db.addOrders(cart[i].product, cart[i].price, email));
    }

    Promise.all(promises).then(() => {
        res.redirect("/");
    });
});

//-----------     *     --------------//

app.get("*", (req, res) => {
    if (req.url != "/welcome") {
        res.redirect("/welcome");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

//---------------------------------------//

server.listen(8080, function() {
    chalkAnimation.rainbow("L I S T E N I N G . . .");
});
