const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

// Init Handlebars
app.engine(
  "hbs",
  exphbs({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);
app.set("view engine", "hbs");

//rendo la cartella statica
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.render("home"));
app.get("/shop", (req, res) => res.render("shop"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
