export class Impuesto {
    static calcularImpuesto(cliente) {
        const montoBrutoAnual = cliente.getMontoBrutoAnual();
        const deducciones = cliente.getDeducciones();
        const impuesto = (montoBrutoAnual - deducciones) * 0.21;
        return impuesto;
    }
}
