/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
// use('On_Demand_Service_Website');

// Insert a few documents into the sales collection.
// db.getCollection('Service_Providers').insertMany([
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     },
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     },
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     },
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     },
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     },
//     {
//         name:"Riyad Hossain",
//         serviceName:"All Painting and Renovation Service",
//         price:90,
//         photo:"https://bytesed.com/tf/qixer/qixer_html/assets/img/service/s1.jpg"
//     }
// ]);

// db.getCollection("Service_Providers").deleteMany({price:500});

use('Cluster0');

// db.getCollection('Popular_Services').insertOne({
//     name: "Dhruv Agrawal",
//     serviceName: "All Saloon Services",
//     price: 100,
//     photo: "https://images.unsplash.com/photo-1592009309602-1dde752490ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
// });