---
title: Fundamentos 1
description: Material de estudo sobre fundamentos em JavaScript
---

# Programação JavaScript - Fundamentos (Algoritmos)

## Declaração de Variáveis

### Var

- Variáveis declaradas com var têm escopo de função ou escopo global, dependendo de onde são declaradas.
- Elas podem ser redeclaradas e atualizadas dentro de seu escopo.
- No entanto, devido às suas características de escopo não tão previsíveis, seu uso é desencorajado em favor das declarações let e const.

### Let

- Variáveis declaradas com let têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco em que foram declaradas, incluindo blocos de loops for, while, if, entre outros.
- Elas não podem ser redeclaradas dentro do mesmo escopo, mas podem ser atualizadas.
- O uso de let é recomendado para variáveis que precisam ser modificadas ao longo do tempo e têm um escopo bem definido.

### Const

- Variáveis declaradas com const são constantes e têm escopo de bloco, assim como as variáveis declaradas com let.
- Elas não podem ser reatribuídas após a inicialização.
- No entanto, se a variável for um objeto ou um array, suas propriedades ou elementos podem ser modificados.
- O uso de const é recomendado para valores que não devem ser modificados após a inicialização.

## Estruturas Condicionais

### Teoria

- Importância das estruturas condicionais em programação.
- Tipos de estruturas condicionais (if, else if, else).
- Discussão sobre operadores de comparação (==, ===, !==, etc.) e operadores lógicos (&&, ||, !).

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

- Tipos de loops (for, while) e suas diferenças.
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
```

### Exercício

1. Escreva um programa que calcula a soma dos números de 1 a 100 utilizando um loop.
2. Escreva uma função que receba um número como parâmetro e imprima a tabuada desse número até 10.