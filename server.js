const express= require("express");
const app= express();
const path= require("path");
const port= 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); 
app.use(express.static(path.join(__dirname, "public")));
app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
})

app.get('/qixer', (req, res)=>{
    res.render("index");
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