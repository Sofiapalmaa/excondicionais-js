// BÁSOCO - EX1
//For - contando de 1 a 10
//  for(let i = 1; i <= 10; i++){
//      console.log("Número: " + i)
// }

//ex2
// numeroEscolhido = parseInt(prompt("Digite um número para ver a tabuada"));
// console.log("Tabuada do " + numeroEscolhido);

//ex3
// for (let i = 0; i <=10; i++){
//     console.log(`${numeroEscolhido} X ${i}: ${numeroEscolhido * i}`)
// }

//INTERMEDIÁRIO 
//EX1
// for(let i = 0; i <= 50; i+=2){
//     console.log("Número par: " + i);
// } 

//EX2
// numeroAleatório = Math.random() * 100;
// console.log("Adivinhe um número de 1 a 100.")

// numeroUsuario = parseFloat(prompt("Digite um número: "))

// while (numeroUsuario !== numeroAleatório){
//     if (numeroUsuario < numeroAleatório){
//         console.log("O número digitado é menor que o correto. Tente novamente!")
//         break;
//     } else if (numeroUsuario > numeroAleatório){
//         console.log("O número digitado é maior que o correto. Tente novamente!")
//         break;
//     } else{
//         console.log("Parabéns! Você acertou.")
//         break;
//     }
// }

//Ex3

let contador = parseInt(prompt("Digite um número para a contagem regressiva"));
 while(contador >= 0){
    console.log("Contagem: " + contador);
    contador--; 
}
