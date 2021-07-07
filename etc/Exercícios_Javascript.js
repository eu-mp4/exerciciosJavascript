//1
/*function testes(num1, num2) {
    console.log(`Soma: ${num1+num2}\nSubtração: ${num1-num2}\nMultiplicação: ${num1*num2}\nDivisão: ${num1/num2}`)

}

testes(10, 2)*/

//2
/*function triangulos(lado1, lado2, lado3) {
    if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
        console.log('Não é possível fazer triangulo')
    }
    else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
        console.log('Triangulo escaleno');
    }
    else if (lado1 == lado2 && lado1 != lado3 || lado2 == lado3 && lado2 != lado1 || lado3 == lado1 && lado3 != lado2) {
        console.log('Triangulo isósceles');
    }
    else {
        console.log('Triangulo equilátero');
    }
}

triangulos(4, 2, 2)*/

//3
/*function basis(base, expoente) {
    return base**expoente
}

console.log(basis(5, 2))*/

//4
/*function retornado(dividendo, divisor) {
    console.log(dividendo/divisor)
    console.log(`O resto da divisão é ${dividendo%divisor}`)
}

retornado(12, 5)*/

//5
/*function chame() {
    let valor = 0.1 + 0.2;
    let valorFormatado = valor.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
    console.log(valorFormatado)
}

chame()*/

//6
/*function jurosCompostos(capital, taxa, tempo) {
    const montante = capital*(1+taxa)**tempo
    console.log(Math.round(montante))
}

function jurosSimples(capital, juros) {
    let mont = capital+juros
    console.log(mont)
}

jurosCompostos(100, 7, 12)
jurosSimples(1400, 6)*/

//10
/*function divisivel(num, tres = 3) {
    if (num%tres == 0) {
        return true
    }
    else {
        return false
    }
}

console.log(divisivel(15))*/

//13
/*function swii(dia) {
    switch(dia) {
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('dia util');
        break;
    case 1:
    case 2:
    case 7:
        console.log('fim de semana')
        break;
    default:
        console.log('dia inválido')
    }
}

swii(7)*/

//14
/*function frutas(fruta) {
    switch(fruta) {
        case 'maça':
            console.log('não vendemos essa fruta aqui');
            break;
        case 'kiwi':
            console.log('estamos com escassez de kiwi');
            break;
        case 'melancia':
            console.log('aqui está. são 3 reais o quilo');
            break;
        default:
            console.error('Não encontrado');
    }
}

frutas('morango')*/

//15
/*function carrinho(carro) {
    switch(carro) {
        case 'hatch':
            console.log('compra efetuada com sucesso');
            break;
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            console.log('tem certeza que não prefere este modelo?');
            break;
        default:
            console.log('não trabalhamos com este tipo de automovel aqui');
    }
    
}

carrinho('fusca')*/

//16
/*function calculadora(num1, num2, operacao) {
    switch(operacao) {
        case '+':
            console.log(num1+num2);
            break;
        case '-':
            console.log(num1-num2);
            break;
        case '*':
            console.log(num1*num2);
            break;
        case '/':
            console.log(num1/num2);
            break;
        default:
            console.log('operação inválida')
    }
    
}

calculadora(10, 2, '//')*/

//17

//18
/*function contagem(num) {
    switch(num) {
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('um');
            break;
        case 2:
            console.log('dois');
            break;
        case 3:
            console.log('tres');
            break;
        case 4:
            console.log('quatro');
            break;
        case 5:
            console.log('cinco');
            break;
        case 6:
            console.log('seis');
            break;
        case 7:
            console.log('sete');
            break;
        case 8:
            console.log('oito');
            break;
        case 9:
            console.log('nove');
            break;
        case 10:
            console.log('dez');
            break;
        default:
            console.log('numero fora do intervalo')
    }
}

contagem(10)*/

//19
/*function cardapio(selecionado, qnt){
    switch(selecionado){
        case 100:
            let valor1 = 3.00
            return `voce selecionou ${qnt} cachorro-quente(s) no valor de R$${valor1*qnt} reais`;
            break;
        case 200:
            let valor2 = 4.00
            return `voce selecionou ${qnt} hamburger(s) simples no valor de R$${valor2*qnt} reais`;
            break;
        case 300:
            let valor3 = 5.50
            return `voce selecionou ${qnt} cheesehamburger(s) no valor de R$${valor3*qnt} reais`;
            break;
        case 400:
            let valor4 = 7.50
            return `voce selecionou ${qnt} bauru(s) no valor de R$${valor4*qnt} reais`;
            break;
        case 500:
            let valor5 = 3.50
            return `voce selecionou ${qnt} refrigerante(s) no valor de R$${valor5*qnt} reais`;
            break;
        case 600:
            let valor6 = 2.80
            return `voce selecionou ${qnt} suco(s) no valor de R$${valor6*qnt} reais`;
            break;
        default:
            return 'produto não existente'
    }
}

console.log(cardapio(100, 3))*/

//24
/*function hello(qnt) {
    while (qnt > 0) {
        console.log(`${qnt}. Hello world`)
        qnt--
    }
    
}

hello(11)*/

//25
/*function fof(num) {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
    
}

fof(20)*/

//30
/*function maiorMenor() {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if (maior === undefined && menor === undefined) {
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior) {
                maior = vetor[i]
            }
            if (vetor[i] < menor) {
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))*/


/*teste
let vetor = [1, 2, -3, -4]
for (let i = 0; i < vetor.length; i++) {
    let cada = []
    for (i of vetor) {
        if (i < 0) {
            cada.push(i)
            console.log(cada)
            vetor++
        }
    }
}*/

//31
/*function negativos(vetor) {
    let negatives = 0 //contador
    for (let i = 0; i < vetor.length; i++) { //começo e fim da contagem e incremento
        if (vetor[i] < 0) { //para cada item do vetor que seja menor que zero
            negatives++ //conte +1
        }
    } return negatives //retorno somente no for
}

vetor = [1, 2, -3, -4]
console.log(negativos(vetor))*/

//desafio
/*const carrinho = [
    '{ "nome": "borracha", "preco": 3.45 }',
    '{ "nome": "caderno", "preco": 13.90 }',
    '{ "nome": "kit de lapis", "preco": 41.22 }',
    '{ "nome": "caneta", "preco": 7.50 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado[3])*/