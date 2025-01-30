const express= require("express");
const app= express();
const path= require("path");
const port= 3000;
const mongoose= require("mongoose");
let serviceProviders= require("./models/serviceProviders.js");
let popularServices= require("./models/popularServices.js");
require('dotenv').config();

app.use(express.json());

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.Mongoose);
    console.log("Connected to MongoDB");
}

let allPopularServices;
let allServiceProviders=[];
async function getServiceProvider() {
    let temp = await serviceProviders.find({});
    temp.forEach((doc) => {
        doc.nestedItems.forEach((item) => { 
            allServiceProviders.push(item);
        });
    });
}
// getServiceProvider();

async function getPopularServices() {
    allPopularServices = await popularServices.find({});
}
getPopularServices();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});

app.get('/', (req, res)=>{
    res.redirect("/qixer");
})
app.get('/qixer', (req, res) => {
    res.render("auth");
});
app.get('/qixer/home', (req, res) => {
    getPopularServices();
    res.render("index", { serviceProviders: allPopularServices });
});
app.get('/qixer/about', (req, res) => {
    res.render("about");
});

app.get(`/qixer/services`, async(req, res) => {
    
    allServiceProviders=[];
    await getServiceProvider();
    // Pagination logic
    const page = parseInt(req.query.page) || 1;
    const limit = 12;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const category= req.query.category;
    const price= req.query.price;
    
    
    let filteredServices=allServiceProviders;
        
    if(category && price){
        if(category=='all'){
            filteredServices= await allServiceProviders.filter((service)=>{
                return (parseInt(service.price) <= price);
            });
        }else{

            filteredServices= await allServiceProviders.filter((service)=>{
                return (service.category === category && parseInt(service.price) <= price);
            });
        }

    }
    

    // if(price){
    //     filteredServices= await filteredServices.filter((service) => service.price <= price);
    // }
    // console.log(".................................................................");
    
    // console.log(filteredServices);
    
    // Get paginated results
    const paginatedServices = filteredServices.slice(startIndex, endIndex);
    
    const totalServices = filteredServices.length;
    const totalPages = Math.ceil(totalServices / limit);

    res.render('services', { 
        serviceProviders: paginatedServices,
        currentPage: page,
        totalPages: totalPages,
        totalServices: totalServices,
        selectedCategory: category
        
    });
});

app.get('/qixer/all_categories', (req, res) => {
    res.render("categories");
});
app.get('/qixer/blog', (req, res) => {
    res.render("blog");
});
app.get('/qixer/contact', (req, res) => {
    res.render("contact");
});
app.get('/qixer/seller', (req, res) => {
    res.render("sellerInfo");
});

app.post('/qixer/seller', async (req, res) => {
    let { name, serviceName, price, photo, category } = req.body;
    
    
    let seller ={ name, serviceName, price, photo, category};

    let categoryDoc= await serviceProviders.findOne({name: category});
    if(!categoryDoc){
        categoryDoc= new serviceProviders(
            {
                name: category,
                nestedItems: []
            }
        );
        categoryDoc.save();
    }

    categoryDoc.nestedItems.push(seller);
    await categoryDoc.save();
    res.redirect("/qixer/home");
});
