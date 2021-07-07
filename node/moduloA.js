//formas menos comuns de se exportar
this.ola = 'Olá, hello'
exports.boaTarde = 'boa tarde'

//o certo é atribuir um novo objeto ao module.exports, pois assim ele estará disponível para fora do módulo

module.exports = {
    bomDias: 'bom dia',
    boaNoite() {
        return 'boa noite'
    }
}
