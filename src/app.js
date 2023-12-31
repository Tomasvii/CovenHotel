const path = require("path");
const express = require("express");
const session = require("express-session");
const cookies = require("cookie-parser");
const mainRouter = require("./routers/mainRouter");
const methodOverride = require("method-override");

const app = express();

app.use(
    session({
        secret: "b77eb802-079d-4709-9396-2b0d61d5680d",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookies());

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use("/", mainRouter);

/*
app.use((req, res) => {
    res.status(404).render("notFound");
}); */

app.listen(3000, () => {
    console.log("Servidor funcionando");
});
