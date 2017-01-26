var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  
	Boliche = mongoose.model('Boliche');
	Boliche.find({}).exec(function(err, boliches){
		if (err) throw err;

		res.json(boliches);
	});
});

// POST nuevo boliche
router.post('/alta', function(req, res, next){
	var nuevo = { nombre: req.body.nombre, pts: 0, telefono: req.body.telefono,
	direccion: req.body.direccion, descripcion: req.body.descripcion };

	Boliche = mongoose.model('Boliche');
	Boliche.create(nuevo, function(err, nuevo_cb){
		if(err) throw err;

		res.json(nuevo_cb);
	})
});

// PUT editOne
router.put('/:id', function(req, res, next){
	var boliche = { nombre: req.body.nombre, pts: req.body.pts, telefono: req.body.telefono,
	direccion: req.body.direccion, descripcion: req.body.descripcion };

	Boliche = mongoose.model('Boliche');
	Boliche.update( { _id: req.params.id },
		boliche,
		function(err, boliche_cb) {
			if(err) throw err;

			res.json(boliche_cb);
		})
});

// GET boliche por ID
router.get('/:id', function(req, res, next){
	if( ! req.params.id instanceof mongoose.Schema.Types.ObjectId)
		return;
	Boliche = mongoose.model('Boliche');
	Boliche.findOne({ _id: req.params.id }, 
		function(err, boliche){
			if (err) throw new Error("Error en get un boliche "+err);

			res.json(boliche);
	});
});

// ELIMINAR boliche
router.delete('/:id', function(req, res, next){
	Boliche = mongoose.model('Boliche');
	Boliche.remove({ _id: req.params.id }, 
		function(err, boliche){
			if (err) throw err;

			res.json(boliche);
	});
});

module.exports = router;
