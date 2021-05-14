let num = document.getElementById('num')
let list = document.getElementById('list')
let res = document.getElementById('res')
let valores = []

//verificar se o numero está no intervalo correto
function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//verificar se o número já foi add
function inList(n1, n2) {
    if (n2.indexOf(Number(n1)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNum(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option') //add o elemento no select
        item.text = `o número ${num.value} foi adicionado`
        list.appendChild(item)    //add na lista
    } else {
        alert('Valor inválido ou já adicionado na lista')
    }
   num.value = ""
   
}

function finalizar() {

    if (valores.length == 0) {
        alert('Deve adicionar os números')
    } else {
        let qtde = valores.length
        let maior = valores[0] //se tiver apenas um elemento, ele será o maior ou o menor valor
        let menor = valores[0]
        let total = 0
        let media = 0
            for (const pos in valores) {
                total += valores[pos]
                media = total / qtde
                if (valores[pos] > maior) {
                    maior = valores[pos]              
                }
                if (valores[pos]<menor) {
                    menor = valores[pos]
                }
            }

            // organizar as respostas
        res.innerText = ``
        res.innerText += `Ao todo, temos ${qtde} números cadastrados. \n\n`
        res.innerText += `O maior valor informado foi ${maior}.\n\n`
        res.innerText += `O menor valor informado foi ${menor}.\n\n`
        res.innerText += `Somando todos os valores, temos ${total}.\n\n`
        res.innerText += `A média dos valores informados é ${media}.`
    }


    





    
}