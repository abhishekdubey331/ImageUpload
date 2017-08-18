const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    id: String,
    small_url:String
});

ImageSchema.plugin(autoIncrement.plugin, 'images_data');
const Image = mongoose.model('images_data', ImageSchema);

module.exports = Image;
