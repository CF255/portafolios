class Display{
    constructor(displayvaloranterior, displayvaloractual){
        this.displayvaloractual = displayvaloractual;
        this.displayvaloranterior = displayvaloranterior;
        this.calculadora = new Calculadora();
        this.valoractual = '';
        this.valoranterior = '';
        this.tipooperacion = undefined;
        this.signos ={
            sumar: '+',
            restar: '%',
            restar: '-',
            multi: 'x'
        }
    }

    borrar(){
        this.valoractual = this.valoractual.toString().slice(0,-1);
        this.imprimirvalores();
    }

    borrartodo(){
        this.valoractual = '';
        this.valoranterior = '';
        this.tipooperacion = undefined;
        this.imprimirvalores();
    }

    computar(tipo){
        this.tipooperacion !== 'igual' && this.calcular();
        this.tipooperacion = tipo;
        this.valoranterior = this.valoractual ||  this.valoranterior;
        this.valoractual = '';
        this.imprimirvalores();
    }

    agregarnumero(numero){
        if(numero === '.' && this.valoractual.includes('.'))return;
        this.valoractual =this.valoractual.toString() + numero;
        this.imprimirvalores();

    }

    imprimirvalores(){
        this.displayvaloractual.textContent = this.valoractual;
        this.displayvaloranterior.textContent = `${this.valoranterior} ${this.signos[this.tipooperacion] || '' }`;
    }

    calcular(){
        const valoranterior = parseFloat(this.valoranterior);
        const valoractual = parseFloat(this.valoractual);

        if(isNaN(valoractual) || isNaN(valoranterior))return
        this.valoractual = this.calculadora[this.tipooperacion](valoranterior, valoractual);
    }
}