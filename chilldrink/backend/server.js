const express = require('express');
require('dotenv').config()
const cors = require('cors')

const app = express()
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes")

PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/auth', authRoutes)
app.use('/product', productRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on ${PORT}`)
})