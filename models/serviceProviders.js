const mongoose= require("mongoose");

const sellersSchema = new mongoose.Schema({
    name: String,
    nestedItems:[{
        name: String,
        serviceName: String, 
        price: String,
        photo: String,
        category: String
        }
    ]
},{ collection: 'Service_Providers' });

const serviceProviders = mongoose.model('serviceProviders', sellersSchema);
module.exports= serviceProviders;