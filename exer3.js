/*) Faça um programa que simule o funcionamento de uma calculadora. O programa
 deve prover ao usuário as opções de realizar Adição, Subtração, Multiplicação e
 Divisão. 
 Também devem ser lidos os dois números que o usuário deseja aplicar a
 operação.
 Dica: Use a estrutura de seleção Switch ao invés do if/else*/


 
let valor1= 8
let valor2= 2
let resultado

//digite alguma operaçao das siguentes: adicao, subtracao, multiplica, divisao
let operacao = "adicao"

 switch(operacao){
  case"adicao":
    resultado = valor1 + valor2
    console.log("A soma de ", valor1 ,"+", valor2, "= ", resultado )
    break
  case "subtracao":
    resultado = valor1 - valor2
    console.log("A subtração de ", valor1 ,"-", valor2, "= ", resultado )
    break
  case "multiplica":
    resultado = valor1*valor2
    console.log("A multiplicação de ", valor1 ,"*", valor2, "= ", resultado )
    break
  case "divisao":
    
    resultado = valor1/valor2
    console.log("A divisão de ", valor1 ,"/", valor2, "= ", resultado )
    break
  default:
    console.log("ação invalida")
}



