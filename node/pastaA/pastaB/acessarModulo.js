const acessarModuloA = require('../../moduloA')
console.log(acessarModuloA.bomDias)

const acessarIndexDaPastaC = require('./pastaC') //não precisa referenciar o index, pq ele executa como sendo a primeria coisa a ser executada
console.log(acessarIndexDaPastaC.ola)
