const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const nacionalidade = f => f.pais === 'China'//arrow function para pegar cada país
const sexo = f => f.genero === 'F' //arrow function para pegar cada sexo feminino
const salario = (menorSal, maiorSal) => {
    return menorSal.salario < maiorSal.salario ? menorSal : maiorSal
} //arrow function para pegar o menor salario

axios.get(url).then(response => {
    const funcionarios = response.data
    
    //mulher chinesa com menor salário
    const func = funcionarios //dentro de cada info de funcionários:
        .filter(nacionalidade) //filtra a nacionalidade definida pela função lá em cima
        .filter(sexo) //filtra o sexo definido pela função lá em cima
        .reduce(salario) //reduz a matriz para um único valor | função de agregação; transforma uma lista de mulheres chinesas para pegar a única funcionária com o menor salário
        //se fosse usado o filter aí selecionaria as de menores salarios

    console.log(func)
})