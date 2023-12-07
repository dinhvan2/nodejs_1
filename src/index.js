const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

const route = require("./routes");

const db = require("./config/db");
db.connect();

const morgan = require("morgan");

const { engine } = require("express-handlebars");

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); //static file
// app.use(morgan('combined'))

app.engine(".hbs", engine({ extname: ".hbs" })); // config .handlebars
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
