"use strict";

require("core-js/modules/es.number.to-fixed.js");
var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
// main.js

var cliente1 = new _cliente.Cliente('Empresa ABC', 50000, 10000);
var impuestoCliente1 = _impuesto.Impuesto.calcularImpuesto(cliente1);
console.log("El cliente ".concat(cliente1.getNombre(), " debe pagar un impuesto de: $").concat(impuestoCliente1.toFixed(2)));