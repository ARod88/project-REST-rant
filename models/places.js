const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
   
    name: { type:String, required: true },
    pic: String,
    cuisines: { type:String, required: true },
    city: { type:String, default: 'Anytown' },
    state: { type:String, required: 'USA' },
    founded: Number
});

// create bread model
const Place = mongoose.model("Place", placeSchema);

// export bread model
module.exports = Place;


// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/thai-food.jpg'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/thai-cafe.jpg'
// }];
