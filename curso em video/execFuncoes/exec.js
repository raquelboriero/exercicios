function parImp(n) {
    if (n%2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(parImp(8))
// ou
let res = parImp(8)
console.log(res)

//definição de parametro opcionais
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5,6))
console.log(soma(5))

//Linguagem funcional
let v = function (x){
    return x*2
}
console.log(v(5))

//recursividade

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n *fatorial(n-1)
    }
}

console.log(fatorial(5))

// forma tradicional
function fatorial01(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c       
    }
    return fat
}
console.log(fatorial01(5))