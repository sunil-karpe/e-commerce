//import the built-in npm libraries or custom user modules that you have created
const express=require('express');
const dotenv=require("dotenv");
const usersRouter=require("./routes/users");//custom user module
const mongoose = require('mongoose');
const authRouter = require('./routes/auth');
const productRouter=require("./routes/product");
const cartRouter=require("./routes/cart")
const orderRouter=require("./routes/order")
const stripeRouter=require("./routes/stripe")
const cors=require("cors")



//Using the .env (Constant Ports and urls values)
dotenv.config();

//Create a App which will have all the express features
const app=express();

//Listening to the server
let port =process.env.PORT || 8001;
app.listen(port,()=>{
    console.log("Server running on port: "+port);
})

//To get the JSON data from the post request
app.use(express.json());

//Cross -site allow request
app.use(cors());

//Setup the database connections (Make sure you have started the mongo locally)
const DB_URL=process.env.DB_URL|| "mongodb://localhost:27017/e-commerce"
mongoose.connect(DB_URL).then(()=>{
    console.log("Using the database");
}).catch((e)=>{
    console.log("Failed to connect to database: "+e);
})


//Specifying the url paths to be handled by the associated routers
//Like for actions related to the users for e.g. users/add, users/view, users/update, users/drop can be handled using userRouter only.
app.use("/users",usersRouter);
app.use("/auth",authRouter);
app.use("/products",productRouter)
app.use("/orders",orderRouter)
app.use("/carts",cartRouter)
app.use("/api",stripeRouter)


app.get("/",(req,res)=>{
    res.status(200).send("Home page is delivered");
})

console.log(process.env.STRIPE_KEY);

//Testing the server which is created above. To test the below request -you need to add the url - http://localhost:8001/test in your browser.
// app.get("/test",(req,res)=>{
//     res.status(200).send("Test successful! response is delivered");
// })

