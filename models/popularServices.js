const mongoose= require("mongoose");

const sellersSchema = new mongoose.Schema({
    name: String,
    serviceName:String,
    price:Number,
    photo: String
},{ collection: 'Popular_Services' });

const popularServices = mongoose.model('popularServices', sellersSchema);
module.exports= popularServices;