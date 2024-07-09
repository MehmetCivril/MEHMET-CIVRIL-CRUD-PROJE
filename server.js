const express = require("express")
const mongoose = require("mongoose")
const app = express()

const Product = require("./models/ProductModel")
const ProductRouter = require("./router/ProductRouter")

mongoose
  .connect(
    "mongodb+srv://mehmetcivril:3458479@bulutproje.rkzlao8.mongodb.net/?retryWrites=true&w=majority&appName=BulutProje"
  )
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err))

app.use(express.json())

app.use("/product", ProductRouter)

app.get("/", (req, res) => {
  res.send("YOUR FIRST PROJECT IS HERE")
})

app.listen(9000, () => {
  console.log("listening is on, port 9000")
})
