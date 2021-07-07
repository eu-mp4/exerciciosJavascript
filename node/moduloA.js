//formas menos comuns de se exportar
this.ola = 'Olá, hello'


//o certo é atribuir um novo objeto ao module.exports, pois assim ele estará disponível para fora do módulo

module.exports = {
    bomDias: 'bom dia',
    boaNoite() {
        return 'boa noite'
    }
}
