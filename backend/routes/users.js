const User = require("../model/User");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const usersRouter = require("express").Router();


//http://localhost:8001/users/view
usersRouter.get("/view", async (req, res) => {
    try {
        const userdata = await User.find();
        res.status(200).json(userdata);
    } catch (e) {
        res.status(400).json(e);
    }
})

//UPDATE USER
//http://localhost:8001/users/:id

usersRouter.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    if (req.body.password) {
        req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS).toString()
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(updatedUser);

    } catch (err) {
        res.status(401).json(err);
    }

})

//DELETE USER
//http://localhost:8001/users/:id
usersRouter.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id);


        res.status(200).json("User has been deleted!");


    } catch (err) {
        res.status(401).json(err);
    }

})


//GET USER
//http://localhost:8001/users/:id
usersRouter.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        const { password, ...otherUserData } = user._doc;

        res.status(200).json(otherUserData);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }


})


//GET ALL USERS
//http://localhost:8001/users
usersRouter.get("/", verifyTokenAndAdmin, async (req, res) => {

    try {

        const query = req.query.new;
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();

        

        res.status(200).json(users);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})






module.exports = usersRouter;


//Testing the router created
//Append the below paths to the url - http://localhost:8001/users

//http://localhost:8001/users/usersRouterTest
// usersRouter.get("/usersRouterTest",(req,res)=>{
//     res.status(200).send("Users Router test successful!");
// })