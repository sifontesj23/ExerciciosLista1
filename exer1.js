/*Tipos de Triângulo. Faça um programa que apresente o tipo de triângulo, ou
seja, triângulo Equilátero, Isósceles ou Escaleno. Para isso, informe o valor de três
lados de um triângulo*/

let A =5
let B = 5
let C = 2

if (A == B && A == C){
    console.log("O triangulo é Equilatero")
}else{
    if(A == B || A == C || B==C ){
        console.log("O triangulo é Isoceles")
    }else{
        console.log("O triabulo é  Escaleno")
    }
}