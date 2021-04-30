/*function dia() {
    var img = document.getElementById('fotodia')
    var msg = document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerText = `Agora sao ${hora} horas e ${minuto} minutos.`
    

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
    } else if (hora > 12 && hora < 18) {
        img.src = 'tarde.png'
    } else {
        img.src = 'noite.png'
    }
}*/

function calc() {
    let inicial = document.getElementById('ini')
    let final = document.getElementById('fim')
    let passo = document.getElementById('pass')
    let resultado = document.getElementById('res')

    if (inicial.value.lenght == 0 || final.value.lenght == 0 || passo.value.lenght == 0) { 
        alert('FALTAM DADOS')
    } else {
        resultado.innerHTML = 'Contando... '

        let i = Number(inicial.value)
        let f = Number(final.value)
        let p = Number(passo.value)

        for (let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} `  //concatenacao
        }
    }
}