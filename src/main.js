import { Cliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

const cliente1 = new Cliente('Empresa ABC', 50000, 10000);

const impuestoCliente1 = Impuesto.calcularImpuesto(cliente1);

console.log(`El cliente ${cliente1.getNombre()} debe pagar un impuesto de: $${impuestoCliente1.toFixed(2)}`);

