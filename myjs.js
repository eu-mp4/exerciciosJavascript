function dia() {
    var imagem = document.getElementById('foto')
    var horario = document.getElementById('horario')
    var hora = new Date()
    hora.getHours()
    horario.innerText = ´Agora sao ${hora} horas.´

    if (hora < 6) {
        document.getElementById('horario')
        
    }
}