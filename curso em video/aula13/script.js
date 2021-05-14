function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res");
    if (fano.value >= ano || fano.value.length == 0) {
        alert("ERRO - verifique os dados")
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

            if (fsex[0].checked) {
                genero = 'Homem'
            } else if (fsex[1].checked){
                genero = 'Mulher'
                }
            }
if (idade >= 0 && idade < 20) {
    img.setAttribute('src', 'child.png') 
} else if (idade >= 20 && idade < 60){
    img.setAttribute('src', 'newWoman.png') 
} else {
    img.setAttribute('src', 'oldWoman.png') 
}
        res.style.textAlign = 'center'    
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
