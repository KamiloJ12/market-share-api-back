const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const companyRoutes = require("./routes/company.routes");
const productRoutes = require("./routes/product.routes");
const marketShareRoutes = require("./routes/marketShare.routes");
const authRoutes = require("./routes/auth.routes");

initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const PORT = 8000;

db.authenticate()
 .then(() => {
   console.log("Base de datos conectada");
 })
 .catch((error) => console.log(error));

/* db.sync({force: true})
 .then(() => console.log("Base de datos sync"))
 .catch((error) => console.log(error));
   */
app.use(companyRoutes);
app.use(productRoutes);
app.use(marketShareRoutes);
app.use(authRoutes);
 
app.get("/", (req,res) => {
  res.send("welcome to my api");
});

app.listen(PORT,() => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
});