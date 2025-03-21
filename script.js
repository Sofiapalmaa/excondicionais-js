//ex1
// let numero = prompt("Digite um número: ");
// console.log(numero);
// numero = parseInt(numero)
// numero === 0
// if (numero > 0){
//     console.log("O número é positivo.");
// } else if (numero < 0) {
//     console.log("O número é negativo.");
// } else {
//     console.log("O número é igual a 0.");
// }

//ex2
// let numero = prompt("Digite um número: ");
// console.log(numero);
// numero = parseInt(numero)
// if (numero %2 == 0){
//     console.log("O número é par.")
// } else {
//     console.log("O número é ímpar.")
// }

//ex3
// let idade = prompt("Digite a sua idade: ");
// console.log(idade);
// idade = parseInt(idade)
// if (idade <= 12){
//     console.log("Você é criança.")
// } else if (idade >= 13 && idade <= 17) {
//     console.log("Você é adolescente.")
// } else {
//     console.log("Você é adulto.")
// }

//ex4
// let nota = prompt("Nota: ");
// console.log(nota);
// nota = parseInt(nota)
// if (nota >= 60 && nota < 101){
//     console.log("Aprovado(a)!")
// } else if (nota < 60) {
//     console.log("Reprovado(a)!")
// } else {
//     console.log("Nota inválida. Digite novamente.")
// }

// ex5
// let number1 = prompt("Digite o primeiro número:");
// let number2 = prompt("Digite o segundo número:");
// let operacao = prompt("Digite a operação (+, -, *, /):");
// number1 = parseFloat(number1)
// number2 = parseFloat(number2)

// let resultado;

// switch(operacao) {
//     case '+':
//         resultado = number1 + number2;
//         console.log(`O resultado da soma é: ${resultado}`);
//         break;
    
//     case '-':
//         resultado = number1 - number2;
//         console.log(`O resultado da subtração é: ${resultado}`);
//         break;
    
//     case '*':
//         resultado = number1 * number2;
//         console.log(`O resultado da multiplicação é: ${resultado}`);
//         break;
    
//     case '/':
//         if (number2 !== 0) {
//             resultado = number1 / number2;
//             console.log(`O resultado da divisão é: ${resultado}`);
//         } else {
//             console.log("Erro: Divisão por zero!");
//         }
//         break;
    
//     default:
//         console.log("Operação inválida! Escolha entre +, -, * ou /.");
// }


//ex6
// let a = prompt("Digite um número: ")
// let b = prompt("Digite um número: ")
// let c = prompt("Digite um número: ")

// if (a > b && a > c){
//     console.log("O maior número é " + a)
// } else if (b > a && b > c){
//     console.log("O maior número é " + b)
// } else {
//     console.log("O maior número é " +c)
// }

//ex7
// let compra = parseFloat(prompt("Digite o valor da compra: "))
// let desconto;
// let compraDesconto

// if (compra > 100){
//     desconto = compra * 10/100
//     compraDesconto = compra - desconto
//     console.log("Sua compra teve um desconto aplicado de 10%! O valor total é igual a R$" + compraDesconto)
// } else{
//     console.log("O valor total da compra é R$" + compra)
// }

//ex8
// let usuario = prompt("Digite seu usuário")
// let senha = prompt("Digite a sua senha")

// let usuarioValido = "Admin" 
// let senhaValida = "1234."

// if (usuario == usuarioValido && senha == senhaValida){
//     console.log("Seja bem-vindo.")
// } else{
//     console.log("Acesso negado. Tente novamente!")
// }