var num = [2,7,5]
console.log(num)
num.push(2, 3, 4)
num.sort()
console.log(num)
console.log(num.length)

/* for (let pos = 0; pos < num.length; pos++) {

    console.log( `${pos} tem o valor ${num[pos]}`)
} */

for (let pos in num) {
  console.log( `${pos} tem o valor ${num[pos]}`)
 // console.log(num[pos])
}

console.log(num.indexOf(7)) //buscar o valor com o método indexOf
console.log(num.indexOf(9)) // o retorno de -1 significa que não encontrou o valor buscado
