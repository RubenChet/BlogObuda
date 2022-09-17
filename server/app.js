// imports
require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = process.env.PORT


//middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static("uploads"))


mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("err"))

// routes prefix
app.use("/api/post",require("./routes/routes"))

//start server
app.listen(port, () => console.log("Server Running"))

