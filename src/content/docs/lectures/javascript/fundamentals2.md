---
title: Fundamentos 2 - Programação Funcional
description: Material de estudo sobre fundamentos em JavaScript
---

- Funções em JavaScript são "Cidadãos de Primeira Linha" (First-Class Object/Citizen ou Higher-order function)
- Funções são tratadas como um dado especial (executável), sendo possível:
  - Função sendo parâmetro de outra função
  - Função retornando outra função
  - Função sendo atribuida a uma variavel
  - Função pode ter outra função interna

## Funções

- Uma função é composta por:
  - Um nome único (por escopo)
  - Uma sequência de instruções (corpo da função).
  - Valores que podem ser passados para uma função (parametros)
  - E podem retornar um valor ou não
    - Se não tiver `return`, o retorno é `undefined`

- O conjunto do seu nome e parâmetros é comunmente chamado por "Assinatura da Função"
- São blocos de código reutilizáveis que, idealmente, realizam uma tarefa específica.
- São fundamentais para organizar e modularizar o código, facilitando a manutenção e o desenvolvimento de aplicações mais complexas.

```javascript
// Função Tradicional (Declaração de Função)
function fun1() { }

// Função armazenada em uma variavel (Function Expression)
const minhaFuncao = function () { }

// Função armazenada em um array
const lista = [function (a,b) { return a+b }, fun1, minhaFuncao]
console.log(lista[0](2,3))

// Função armazenada em um atributo de um objeto
const obj = { }
obj.acao = funtion () { return 'Ola Mundo' }
console.log(obj.acao())

// Função como parametro de outra função
function executa(fun) {
    fun()
}

executa(function () { console.log('Olha eu aqui...') })

// Função pode retornar/conter outra função
function falar(palavra1) {
    return function (palavra2) {
        console.log(palavra1 + palavra2)
    }
}

const olaMundo = falar('Olá')
olaMundo('Mundo')

falar('Olá')('Mundo')
```

### Declaração de Funções (Function Declaration)

- A forma mais básica de se criar uma função é a sua declaração direta
- Isto é obtido utilizando a palavra-chave `function`, seguida pelo nome da função e uma lista de parâmetros entre parênteses

```javascript
function saudacao(nome) {
    return "Olá, " + nome + "!";
}
```

### Chamada de Funções

- As funções são executadas somente quando são chamadas.
- Para chamar uma função, basta utilizar o nome da função seguido pelos argumentos entre parênteses (se houver)

```javascript
function saudacao(nome) {
    return "Olá, " + nome + "!";
}

let mensagem = saudacao("João");
console.log(mensagem); // Saída: Olá, João!
```

- Ao se declarar uma função desta forma, a função fica disponível em todo o codigo
- Por conta disto, é possível ser chamada antes mesmo de ser declarada e não somente após sua declaração, como ocorre em outras linguagens como python

```javascript
teste()  // Saída: To vivo!

function teste() {
    console.log("To vivo!")
}

teste()  // Saída: To vivo!
```

### Parâmetros

- Os parâmetros são variáveis listadas na definição da função
- Os argumentos são os valores passados para a função quando ela é chamada.
- No exemplo da função `saudacao`, `nome` é um parâmetro da função `saudacao`, e `"João"` é o argumento passado para esse parâmetro

#### Arguments

- Em JavaScript toda função tem um array interno que possui todos os argumentos que forem passados durante a sua execussão, mesmo que nenhum parametro tenha sido nomeado na sua assinatura.
- Este array é chamado de `arguments`, caso nenhum parametro seja passado na execussão, ele fica vazio.

```javascript
function somar() {
    let soma = 0

    for(i in arguments) {
        soma += arguments[i]
    }
}

console.log(somar())
console.log(somar(1,2))
console.log(somar(1.1, 2.2, 3.3))
console.log(somar('olá', 'mundo'))
console.log(somar(3, 4, 'ja deu'))
```

#### Valores padrão para parâmetros

- Funções podem ter valores padrão (`default`) para seus parametros
- Em JavaScript, existem varias formas de se ter valores padrão

```javascript
function somar(a, b, c) {
    a = a || 0  // valor que veio do parametro ou ZERO, se nenhum for passado
    b = b || 0
    c = c || 0

    return a + b + c
}

console.log(somar())
```

```javascript
function somar(a, b, c) {
    a = a != undefined ? a : 0  // verifica se o parametro a esta atribuido, ou seja, diferente de nulo ou undefined, se sim, ele recebe o valor de a, senao recebe o valor padrão ZERO
    b = 1 in arguments ? b : 0  // verifica se o array arguments possui o indice 1, se sim, ele recebe o valor de b, senão recebe o valor padrão ZERO
    c = isNaN(c) ? 0 : c  // verifica se o parametro c não é um valor numerico (NaN = Not a Number), se sim, ele recebe o valor padrão ZERO, senão recebe o valor de c

    return a + b + c
}
```

```javascript
// Forma mais moderna e recomendada de se criar valores padrão
function somar(a='a', b='b', c='c') {
    return a + b + c
}

console.log(somar())
```

### Valores de Retorno

- As funções podem retornar valores utilizando a palavra-chave `return`.
- Quando a execução de uma função encontra uma instrução return, ela é interrompida e o valor especificado é retornado.
- Caso nenhum `return` seja definido, ele é automaticamente atribuido com `undefined`

```javascript
function soma(a, b) {
    console.log(`O valor de a é ${a}`)  // é executado
    return a + b;
    console.log(`O valor de b é ${b}`)  // não é executado
}

let resultado = soma(3, 5);
console.log(resultado); // Saída: 8
```

### Exercício

1. Escreva uma função que recebe dois números como parâmetros e retorna o maior deles.
2. Escreva uma função que receba um array de números como parâmetro e retorne a soma de todos os elementos do array.

### Expressão de Função (Function Expression)

- A expressão de função é uma outra forma mais indireta de se criar uma função.
- Só podem ser acessadas/utilizadas após sua criação
  - Justamente por serem uma variavel, carregam este comportamento que vem das variaveis
- São basicamente variáveis que carregam como valor a propria função
- A função em si é tida como uma [função anônima](#funções-anônimas)
- São invocadas pelo nome da variavel, seguido dos parentes e parametros (caso existam)

```javascript
soma(2,3) // ERRO!

const soma = function(a,b) {
    return a+b
}

soma(1,2)  // Saida: 3
```

### Exercício

1. Utilizando-se das expressões de função, faça um programa que calcule a area de um circulo (Dica: `const pi = Math.PI`)
2. Crie uma expressão de função que calcule corretamente a idade de uma pessoa dada a data de aniversario sendo a string `"dd/MM/yyyy"` (d=dia com 2 digitos, M=mês com 2 digitos, y=ano com 4 digitos)

### Arrow Functions

- Introduzidas no ES6 (ECMAScript 2015)
- São uma forma mais simplificada de escrever funções
- Extremamente util para funções que executam algoritmos mais simples
- Em Arrow Functions os `{}` delimitadores de bloco são opcionais, desde que:
  - O corpo da função tenha apenas a propria linha da arrow function
  - O corpo da função tenha no máximo a linha abaixo
  - Se precisar de mais de 2 linhas, contando com a assinatura da função, é necessario delimitar o bloco com os `{}`
  - Se utilizar o delimitador de bloco `{}`, é necessário o uso de `return`
- Possuem `return` indireto, caso não use delimitador de bloco
- Herdam o contexto geral de onde estão, tornando mais simples em casos mais avançados da linguagem
- Não possuem o array de `arguments`!

```javascript
const potencia = (a, b) => a ** b  // a**b será o retorno
```

```javascript
// Nunca faça assim! Deixa o codigo extremamente confuso!
const potencia = (a, b) =>
a ** b  // este é o limite do bloco
console.log("Não faço parte da função!")
console.log(potencia(3,3))  // Teste comentar este trecho, e verá que a linha anterior continuará aparecendo, mostrando que ele realmente não faz parte da função, uma vez que a função não foi invocada
```

```javascript
const potencia = (a, b) => {
    console.log("Estou dentro da função!")
    return a**b  // Teste remover a palavra return, e verá que o valor será undefined
}

console.log(potencia(3,3))  // Teste comentar e verá que nada vai aparecer, visto que a função não foi invocada
```

#### Relembrando...

- Lembram do loop `forEach`? Olha como ele fica utilizando uma arrow function, viram como fica mais legivel?

```javascript
const lista = ['a', 'b', 'c']

// Usando funções padrão
function percorrer(elemento) {
    console.log(elemento)
}
lista.forEach(percorrer)

// Usando arrow function
lista.forEach((elemento) => console.log(elemento))
```

### Exercício

1. Em um novo arquivo, converta todas as funções anteriormente criadas para arrow function

### Funções Anônimas

- Ja fizemos algumas funções anonimas, apesar de não termos explicitado
- Toda função que ativamente não tem um identificador, é tida como anônima, sendo os casos de [Arrow Function](#arrow-functions), [Function Expression](#expressão-de-função-function-expression)
- Note que em ambos os casos, não foi dado um nome realmente para a função, mas sim atribuida a uma variavel!
- A parte da função em si, presente após o simbolo da atribuição, não há nenhum nome identificador, fazendo com que esta identificação fique indiretamente relacionada a propria variavel.

```javascript
const souAnonima = () => console.log("Não tenho nome!")

const tambemSouAnonima = function (param1, param2) {
    console.log("Sou uma função, e é isso ai!")
    return param1 + param2
}
```

> Nestas formas, a função nao tem nome, e é incorreto "dizer que o nome da função é o nome da variavel", mesmo que a variavel esteja recebendo a criação da função

## Desafio 1 (Aplicação Prática)

### Programa de Cálculo de Consumo de Combustível e Comparação de Preços

```text
Você foi contratado para desenvolver um programa que ajude os motoristas a calcular o consumo de combustível de seus veículos e determinar se é mais vantajoso abastecer com álcool ou gasolina. O programa deve solicitar ao usuário que insira os seguintes dados:

1. Quantidade de quilômetros percorridos.
2. Quantidade de litros de combustível gastos para percorrer essa distância.
3. Preço do litro do álcool.
4. Preço do litro da gasolina.

Com base nessas informações, o programa deve calcular e exibir na tela:

1. O consumo médio de combustível do veículo, em quilômetros por litro (km/l).
2. A relação entre o preço do litro do álcool e da gasolina (preço do álcool / preço da gasolina).
3. Uma mensagem indicando qual combustível é mais vantajoso considerando a relação de preços calculada. Por exemplo, se o preço do litro do álcool for até 70% do preço da gasolina, o álcool é mais vantajoso. Se for superior a 70%, a gasolina é mais vantajosa.

O programa deve ser capaz de lidar com números decimais e deve exibir os resultados com duas casas decimais.
```

```text
Exemplo experado de saída no terminal:

Bem-vindo ao Programa de Cálculo de Consumo de Combustível e Comparação de Preços!

Por favor, insira os seguintes dados:
- Quilômetros percorridos: 350
- Litros de combustível gastos: 30
- Preço do litro do álcool: 4.50
- Preço do litro da gasolina: 5.80

O consumo médio do seu veículo é de 11.67 km/l.
A relação entre o preço do litro do álcool e da gasolina é de 0.78.
Considerando a relação de preços, é mais vantajoso abastecer com álcool.
```

Se o usuário inserir valores inválidos (por exemplo, quilômetros, litros ou preços negativos), o programa deve exibir uma mensagem de erro apropriada e solicitar que os dados sejam inseridos novamente.

> Se preferir, podem criar um frontend (não será avaliado) para esta aplicação, neste caso, a saida não será no terminal, mas sim em tela (podendo ser um popup, um novo campo que será preenchido, ou o que preferirem)

## Tópicos para estudo futuro

- Closures
- Programação assincrona

## Referências

- [Cod3r Cursos Online, Curso Web Moderno Completo com JavaScript + Projetos, Udemy. 2024. Acesso em: 26/04/2024](https://www.udemy.com/course/curso-web/)
- [MDN Web Docs. JavaScript | MDN. 2022. Acesso em: 26/04/2024](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
