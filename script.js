/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

// 1
function soma() {
    let num1 = parseFloat(document.getElementById("num1").value);   //se não altera a string sapoha ta concatenando
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    alert("A soma é: " + resultado);
}

/*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".
*/
//2
function parimpar() {
    let numero3 = parseInt(document.getElementById("numero3").value);
    if (numero3 % 2 === 0) {
        alert("O numero é PAR");
    } else {
        alert("O numero é IMPAR");
    }
}

/*
3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.
*/
function contar1() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + "<br>";
    }
    document.getElementById("resultado1").innerHTML = resultado;
}

function contar2() {
    let resultado = "";
    let i = 1;
    while (i <= 10) {
        resultado += i + "<br>";
        i++;
    }
    document.getElementById("resultado2").innerHTML = resultado;
}




/*
4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.
*/
function tabuada() {
    let numero4 = parseInt(document.getElementById("num4").value); 
    let resultado = ''; 
    let i = 1;
    while (i <= 10) {
        resultado += numero4 + " x " + i + " = " + (numero4 * i) + "<br>"; 
        i++;
    }
    document.getElementById("resultado3").innerHTML = resultado; 
}

/*
5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.
*/
function encontrarMaior() {
    let numeros = [3, 7, 2, 9, 5];
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    console.log("O maior número da lista é: " + maior);
    alert("O maior número da lista é: " + maior);
}

/*
6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.
*/

function inverterPalavra() {
            let palavra = document.getElementById("palavra").value;
            let palavraInvertida = palavra.split("").reverse().join("");
            document.getElementById("resultado4").innerText = "Palavra invertida: " + palavraInvertida;
        }


/*
7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.
*/

function somaArray() {
    let numeros = [1, 2, 3, 4, 5];
    let soma = numeros.reduce((acc, num) => acc + num, 0);
    console.log("A soma dos elementos do array é: " + soma);
    alert("A soma dos elementos do array é: " + soma);
}

/*
8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".
*/
function verificarPrimo() {
    let numero = parseInt(document.getElementById("num4").value);
    let primo = true;

    if (numero <= 1) {
        primo = false;
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
    }

    document.getElementById("resultado5").innerText = primo ? "É primo" : "Não é primo";
}
/*
9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.
*/
function calcularFatorial() {
    let numero = parseInt(document.getElementById("num6").value);
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.getElementById("resultado6").innerText = "Fatorial de " + numero + " é: " + fatorial;
}

/*
10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.
*/
function verificarPalindromo() {
    let palavra = document.getElementById("palavra2").value;
    let palavraInvertida = palavra.split("").reverse().join("");
    if (palavra === palavraInvertida) {
        document.getElementById("resultado7").innerText = "A palavra é um palíndromo.";
        console.log("A palavra é um palíndromo.")
    } else {
        document.getElementById("resultado7").innerText = "A palavra não é um palíndromo.";
        console.log("A palavra não é um palíndromo.")
    }
}

/*
11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/



