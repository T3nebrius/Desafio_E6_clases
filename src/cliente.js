export class Cliente {
    constructor(nombre, montoBrutoAnual, deducciones) {
        this.nombre = nombre;
        this.montoBrutoAnual = montoBrutoAnual;
        this.deducciones = deducciones;
    }

    getNombre() {
        return this.nombre;
    }

    getMontoBrutoAnual() {
        return this.montoBrutoAnual;
    }

    getDeducciones() {
        return this.deducciones;
    }
}
