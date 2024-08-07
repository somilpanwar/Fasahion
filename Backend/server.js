const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const e = require("express");
const app = express();


//express jo hai na wo server handling kar sakti hai
//express ko server ke liye use karna hai
//express ki properties ko humne app mai transfer/ assign kar diya
//jisse hum http protocol ka use kar payenge jisme http methods ka access kar sakenge eg. get post put patch delete

dotenv.config();

connectDB();
app.use(express.json())

const PORT =  2000;

app.get("/", rootroute);

app.use("/product",async(req,res)=>{
  const data  = await Product.find();
  const ans = data.map((e)=>{
    return [
      e.name,
      e.description

    ]
  });
  res.send(ans);

})



app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgRed.white);
});