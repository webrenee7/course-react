var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/movie');
var MovieSchema=new mongoose.Schema({
    name:String,
    url:String
});
var Movie=mongoose.model('Movie',MovieSchema);
exports.Movie=Movie;