const _ = require('lodash') //referencia biblioteca lodash. Aqui ele procura o index no node_modules e carrega todas as biblitecas
setInterval(() => console.log(_.random(1, 25)), 2000)