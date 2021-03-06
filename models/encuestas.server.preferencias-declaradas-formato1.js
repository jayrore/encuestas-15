var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var pdf1Schema = new Schema({
    "anyo" : String,
    "capturista" : String,
    "carga" : String,
    "carretera" : String,
    "clvAnyo" : Number,
    "clvCarga" : String,
    "clvColoniaDestino" : String,
    "clvColoniaOrigen" : String,
    "clvCombustible" : String,
    "clvDia" : Number,
    "clvEstadoDestino" : String,
    "clvEstadoOrigen" : String,
    "clvFrecuencia" : String,
    "clvHora" : Number,
    "clvIngreso" : String,
    "clvMarca" : String,
    "clvMes" : Number,
    "clvModelo" : String,
    "clvMotivo" : String,
    "clvOcupantes" : Number,
    "clvPoblacionDestino" : String,
    "clvPoblacionOrigen" : String,
    "clvSentido" :  Number,
    "clvT1" : Number,
    "clvT10" : Number,
    "clvT2" : Number,
    "clvT3" : Number,
    "clvT4" : Number,
    "clvT5" : Number,
    "clvT6" : String,
    "clvT7" : Number,
    "clvT8" : Number,
    "clvT9" : Number,
    "clvTarjetasPd" : Number,
    "clvToneladas" : String,
    "coloniaDestino" : String,
    "coloniaOrigen" : String,
    "combustible" : String,
    "descVehiculo" : String,
    "dia" : String,
    "estacion" : String,
    "estadoDestino" : String,
    "estadoOrigen" : String,
    "fechaCaptura" : String,
    "frecuencia" : String,
    "hora" : Number,
    "idEstacion" : String,
    "ingreso" : String,
    "km" : String,
    "marca" : String,
    "mes" : String,
    "modelo" : String,
    "motivo" : String,
    "ocupantes" : String,
    "poblacionDestino" : String,
    "poblacionDestinoIdInegi" : String,
    "poblacionOrigen" : String,
    "poblacionOrigenIdInegi" : String,
    "rubro" : {type: String, required: true, default: 'pds'},
    "sentido" : String,
    "t1" : String,
    "t10" : String,
    "t2" : String,
    "t3" : String,
    "t4" : String,
    "t5" : String,
    "t6" : String,
    "t7" : String,
    "t8" : String,
    "t9" : String,
    "tarjetasPd" : String,
    "tipoVehiculo" : String,
    "toneladas" : String
});
module.exports = module.exports = mongoose.model('pdsF1', pdf1Schema,'polls');