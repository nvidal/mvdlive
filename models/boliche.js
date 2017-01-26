var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var BolicheSchema = new Schema({
	nombre: String,
  pts : Number,
	telefono: String,
	direccion: String,
	descripcion: String,
  	fcrea    : { type: Date },
  	fact    : { type: Date }
});


BolicheSchema.pre('save', function(next){
  now = new Date();
  this.fact = now;
  if ( !this.fcrea ) {
    this.fcrea = now;
  }
  next();
});

mongoose.model('Boliche', BolicheSchema);