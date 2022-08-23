const Product = require("../model/Product");
const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");

const router = require("express").Router();

router.post("/",verifyTokenAndAdmin,async(req,res)=>{

    try {

        const newProduct= new Product(req.body);
        const savedProduct=await newProduct.save();
        res.status(200).json(savedProduct);

    } catch (error) {
        res.status(400).json(error);
    }

})




//http://localhost:8001/users/view
// router.get("/view", async (req, res) => {
//     try {
//         const userdata = await Product.find();
//         res.status(200).json(userdata);
//     } catch (e) {
//         res.status(400).json(e);
//     }
// })



// //UPDATE USER
// //http://localhost:8001/products/:id

router.put("/:id", verifyTokenAndAdmin, async (req, res) => {


    try {
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })

        res.status(200).json(updatedProduct);

    } catch (err) {
        res.status(401).json(err);
    }

})

// //DELETE USER
// //http://localhost:8001/users/:id
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id);


        res.status(200).json("Product has been deleted!");


    } catch (err) {
        res.status(401).json(err);
    }

})


// //GET PRODUCT
// //http://localhost:8001/products/:id  verifyTokenAndAdmin
router.get("/find/:id", async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})


// //GET ALL PRODUCTS
// //http://localhost:8001/products  ==>add verifyTokenAndAdmin
router.get("/", async (req, res) => {

    try {

       let products;
        const qcategory=req.query.category;
        const qnew=req.query.new;
        if(qcategory){

            products=await Product.find({
                categories:{
                    $in:[qcategory]
                },
            })

        }else if(qnew){
            products=await Product.find().sort({_id:-1}).limit(5);

        }else{

            products=await Product.find();

        }
        res.status(200).json(products);


    } catch (err) {
        res.status(500).json("Something went wrong");
    }

})






module.exports = router;


//Testing the router created
//Append the below paths to the url - http://localhost:8001/users

//http://localhost:8001/users/usersRouterTest
// usersRouter.get("/usersRouterTest",(req,res)=>{
//     res.status(200).send("Users Router test successful!");
// })