const mongoose = require('mongoose')

const { Schema } = mongoose;

const placeSchema = new Schema({
   
    name: { type:String, required: true },
    pic: { type: String, default: 'http://placekitten.com/350/350'},
    cuisines: { type:String, required: true },
    city: { type:String, default: 'Anytown' },
    state: { type:String, required: 'USA' },
    founded: {
        type: Number,
        min: [1673, 'Surely not that old?'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

//show estabished
placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}
// create place model
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
