function contar() {
    var txStart = document.getElementById('txtStart')
    var txEnd = document.getElementById('txtEnd')
    var txPass = document.getElementById('txtPass')
    var result = document.getElementById('res')

if (txStart.value.length == 0 || txEnd.value.length == 0 || txPass.value.lenght == 0) {
    alert ('Faltam dados')
}else{
    result.innerHTML = 'contando...'
    let s = Number(txStart.value)
    let e = Number(txEnd.value)
    let p = Number(txPass.value)
    if (p<=0) {
        alert('Passo inválido. Considerando passo = 1')
        p=1
    }
    if (s < e) {
        //contagem crescente
        for (let c = s; c < e; c+=p) {
            result.innerHTML +=  `${c}, `
            console.log(c)
        }
    } else {
        //contagem regressiva
        for (let c = s; c >= e; c-=p) {
            result.innerHTML +=  `${c}, `
            console.log(c)
        }
    }
}

}
