var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FlySchema = new Schema({
    name: {type: String, required: true, index: {unique: true}},
    season: String,
    flyType: String,
    use: String,
    flyImage: String
});

console.log('fly model loaded');
module.exports = mongoose.model('Fly', FlySchema);