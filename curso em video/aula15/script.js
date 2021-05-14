function tabuada() {
    var num = document.getElementById("txtNum")
    var tab = document.getElementById("seltab")
    if (num.value.lenght == 0) {
        alert("Por favor insira um número.")
    } else {
        var n = Number(num.value) //converte para número
        var c = 1
        tab.innerHTML = ''
        while (c<=10) {
            let item = document.createElement('option') 
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }

}