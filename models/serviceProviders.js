const mongoose= require("mongoose");

const sellersSchema = new mongoose.Schema({
    name: String,
    serviceName:String,
    price:Number,
    photo: String
},{ collection: 'Service_Providers' });

const serviceProviders = mongoose.model('serviceProviders', sellersSchema);
module.exports= serviceProviders;