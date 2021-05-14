function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById("imagem");
    var data = new Date;
    var hora = data.getHours();
    hora = 10
    msg.innerHTML = `Agora são ${hora} h.`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18){
        document.body.style.background = "#b9846f"
    } else {
        document.body.style.background = "#515154"
    }
}