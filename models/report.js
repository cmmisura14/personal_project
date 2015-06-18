var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReportSchema = new Schema({
    date: Date,
    waterName: String,
    waterTemp: Number,
    description: String
});

console.log('Report model loaded');
module.exports = mongoose.model('Report', ReportSchema);
