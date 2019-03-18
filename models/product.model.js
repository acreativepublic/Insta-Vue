const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    date: {type: Number, required: true},
    qrcode: {type: String, required: true, max: 100},

});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);
