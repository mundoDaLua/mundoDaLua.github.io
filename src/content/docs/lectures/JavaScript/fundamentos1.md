---
title: Fundamentos 1 - Algoritmos
description: Material de estudo sobre fundamentos em JavaScript
---

## Declaração de Variáveis

### Var

- Variáveis declaradas com `var` têm escopo de função ou escopo global, dependendo de onde são declaradas.
- Elas podem ser redeclaradas e atualizadas dentro de seu escopo.
- No entanto, devido às suas características de escopo não tão previsíveis (ver `hoisting`), seu uso é desencorajado em favor das declarações let e const.

```javascrpt
var nomeDaVariavel
```

### Let

- Variáveis declaradas com `let` têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco em que foram declaradas, incluindo blocos de loops `for`, `while`, `if`, entre outros.
- Elas não podem ser redeclaradas dentro do mesmo escopo, mas podem ser atualizadas.
- O uso de `let` é recomendado para variáveis que precisam ser modificadas ao longo do tempo e têm um escopo bem definido.

```javascrpt
let nomeDaVariavel
```

### Const

- Variáveis declaradas com `const` são constantes e têm escopo de bloco, assim como as variáveis declaradas com `let`.
- Elas não podem ser reatribuídas após a inicialização.
- No entanto, se a variável for um `objeto` ou um `array`, suas propriedades ou elementos podem ser modificados.
- O uso de `const` é recomendado para valores que não devem ser modificados após a inicialização.

```javascrpt
const nomeDaVariavel
```

## Tipos de dados

<!-- TODO Melhorar essa parte-->

### Primitivos

- Textual: `String`
- Numérico
  - `Number`
  - `BigInt`
- Lógico: `Boolean`
- Vazio/Nulo:
  - `null`
  - `undefined`

### Não-primitivos

- Objeto: `Object`
- Lista: `array`

## Declaração vs Inicialização

<!-- TODO Melhorar essa parte-->

## Escopo

<!-- TODO Melhorar essa parte-->

## Estruturas Condicionais

### Teoria

- Importância das estruturas condicionais em programação.
- Tipos de estruturas condicionais (`if`, `else if`, `else` e `switch-case`).
- Discussão sobre operadores de comparação (`==`, `===`, `!==`, etc.) e operadores lógicos (`&&`, `||`, `!`).

### Exemplo

```javascript
let nota = 75;

if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else {
    console.log("D");
}
```

### Exercício

1. Escreva um programa que verifique se um número é positivo, negativo ou zero e imprima uma mensagem correspondente.
2. Escreva uma função que receba a temperatura em graus Celsius e retorne uma mensagem informando se está quente (> 25°C), frio (< 10°C) ou moderado.

## Estruturas de Repetição

### Teoria

- Tipos de loops (`for`, `while`, `for-in` e `forEach`) e suas diferenças.
- Quando usar cada tipo de loop e suas vantagens/desvantagens.

### Exemplo

```javascript
// Exemplo 1: Loop for para imprimir números de 1 a 5
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Exemplo 2: Loop while para calcular a sequência de Fibonacci
let a = 0, b = 1, temp;
while (a < 100) {
    console.log(a);
    temp = a;
    a = b;
    b = temp + b;
}

// Exemplo 3: For-in (percorrendo dinamicamente elementos de um iteravel)
const lista = [0, 1, 2]
for (i in lista) {
    console.log(i)
}

// Exemplo 4: Loop forEach (Função de arrays que recebe uma função como parametro, obrigatoriamente contento: O valor atual do elemento sendo processado no array)
const lista = ['a', 'b', 'c']

function percorrer(elemento) {
    console.log(elemento)
}

lista.forEach(percorrer)
```

### Exercício

1. Escreva um programa que calcula a soma dos números de 1 a 100 utilizando um loop.
2. Escreva uma função que receba um número como parâmetro e imprima a tabuada desse número até 10.

## Referencias

- [MDN Web Docs. JavaScript | MDN. 2022. Acesso em: 26/04/2024](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
