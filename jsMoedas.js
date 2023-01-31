function calculaValor() {
    const resultado = document.querySelector("#resultados");

    const saldo = prompt("Olá digite seu saldo aqui!");
    console.log(saldo)

    const moeda = prompt("Escolha sua moeda atual.  Digite:  1. Dolar 2. Bitcoin 3. Euro");
    
    const novaMoeda = prompt("Escolha sua Nova moeda!  Digite: 1. Dolar 2. Bitcoin 3. Euro");

    let novoSaldo

    if(moeda == novaMoeda) {
        return saldo
    }else if(moeda == 1 && novaMoeda == 2){
        novoSaldo = moeda * 0.000043;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Bitcoins`)
    }else if(moeda == 1 && novaMoeda == 3){
        novoSaldo = moeda * 0.92;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Euros`)
    }else if(moeda == 2 && novaMoeda == 1){
        novoSaldo = moeda * 23097.10;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Dolares`)
    }else if(moeda == 2 && novaMoeda == 3){
        novoSaldo = moeda * 21295.86;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Euros`)
    }else if(moeda == 3 && novaMoeda == 1){
        novoSaldo = moeda * 1.09;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Dolares`)
    }else if(moeda == 3 && novaMoeda == 2){
        novoSaldo = moeda * 0.000047;
        prompt(`Sua novo saldo é:  ${novoSaldo} em Bitcoins`)
    }

    resultado.value = `${novoSaldo}`;
    
}
calculaValor();


