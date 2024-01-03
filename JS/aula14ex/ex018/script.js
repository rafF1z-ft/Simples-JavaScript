var item

function adicionar() {

    var entradaVal = document.querySelector('#entradaVal').value
    var lista = document.querySelector('#lista')
    var res = document.querySelector('#resFim')
    res.innerHTML = ''

    if (entradaVal.length == 0) {
        alert('Por favor, Digite um número!')
    }else if (entradaVal > 100 || entradaVal < 1) {
        alert('Valor inválido, somente entre 1 e 100!')
    }else {
            item = document.createElement('option')
            item.text = `Valor ${entradaVal} adicionado`
            item.value = `${Number(entradaVal)}`
            lista.appendChild(item)
            document.querySelector('#entradaVal').value = ''
    }
}

function finalizar() {
    var res = document.querySelector('#resFim');
    var lista = document.querySelector('#lista');
    var quatItem = lista.options.length;
    var maiorNum = Number(lista.options[0].value);
    var menorNum = Number(lista.options[0].value);
    var soma = 0
    for (var i = 0; i < lista.options.length; i++) {
        var valAtual = Number(lista.options[i].value);

        if (valAtual > maiorNum) {
            maiorNum = valAtual
        }
        if (valAtual < menorNum) {
            menorNum = valAtual
        }
        soma += valAtual
    }
    res.innerHTML = `<p>Ao todo, temos ${quatItem} números cadastrados!</p>`;
        res.innerHTML += `<p>O maior número é ${maiorNum}!</p>`;
        res.innerHTML += `<p>O menor número é ${menorNum}!</p>`;
        res.innerHTML += `<p>Somando todos valores, temos ${soma}!</p>`;
        res.innerHTML += `<p>A média dos valore é ${(soma / quatItem).toFixed(2)}.</p>`;
}