/*Faça um programa para tratar o funcionamento de um saque em caixa eletrônico
de banco. Neste programa o saque deverá ser feito apenas se o cliente possuir
saldo e o cliente deve ter avisado se o saque foi realizado com sucesso ou não.
Considere que o cliente tem R$ 300,00 de saldo*/

function saque(saldo,valorSaque){
  if (valorSaque>0){
    if (saldo>=valorSaque){
        saldo=saldo-valorSaque
        console.log("Saque de:", valorSaque , "foi realizado com sucesso, seu novo saldo: ", saldo )
    }else{
        console.log("Voce não tem saldo suficente, intente com um valor de saque menor")
    }
        

    }else{
        console.log("Valor de saque igual o menor que zero não podemos fazer a operação")

  }
    
            
}




let saldo = 300;
let valorSaque = 302;

saque(saldo,valorSaque) 



