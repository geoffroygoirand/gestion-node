const mongoose = require('mongoose');

// articles
var ChiffresSchema = mongoose.Schema({
    turnover : Number,
    ebe: Number,
    caf: Number, 
   });
 
// heures d'ouverture

// commercants
var commercantsSchema = mongoose.Schema({
    name: String,
    firstName: String,
    enseignecommerciale: String, 
    type: String,
    email: String,
    password:String,
    address:String, 
    chiffres: [ChiffresSchema],
    
  });
  
var CommercantModel = mongoose.model('commercants', commercantsSchema);

module.exports = CommercantModel