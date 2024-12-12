const express= require("express");
const app= express();
const path= require("path");
const port= 3000;
const mongoose= require("mongoose");
let serviceProviders= require("./models/serviceProviders.js");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/On_Demand_Service_Website');
}

let allServiceProviders;
async function getServiceProvider() {
    allServiceProviders=await serviceProviders.find({});  
}
getServiceProvider();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
})


app.get('/qixer', (req, res)=>{
    res.render("auth");
})
app.get('/qixer/home', (req, res)=>{
    getServiceProvider();
    res.render("index", {serviceProviders: allServiceProviders});
})
app.get('/qixer/about', (req, res)=>{
    res.render("about");
})
app.get(`/qixer/services`, (req, res)=>{
    res.render("services");
})
app.get('/qixer/all_categories', (req, res)=>{
    res.render("categories");
})
app.get('/qixer/blog', (req, res)=>{
    res.render("blog");
})
app.get('/qixer/contact', (req, res)=>{
    res.render("contact");
})
app.get('/qixer/seller', (req, res)=>{
    res.render("sellerInfo");
})

app.post('/qixer/seller', async(req, res)=>{
    let {name, serviceName, price, photo}= req.body;   
    let seller= new serviceProviders({name, serviceName, price, photo});
    await seller.save();
    res.redirect("/qixer/home");
})