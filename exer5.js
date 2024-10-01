/* Umbanco concederá um crédito especial aos seus clientes, variável com o saldo
 médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e
 calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem
 informando o saldo médio e o valor do crédito
 
 Maior ou igual a R601,00
 Maior ou igual a R401,00
 Crédito
 40% do valor do saldo médio
 30% do valor do saldo médio
 Maior ou igual a R201,00
 20% do valor do saldo médi*/

 let saldoMedio = 477

 if (saldoMedio<200){
    console.log("Seu saldo promedio é menor a 201 não califica")

     }else{ 
         if  (saldoMedio>201 && saldoMedio<=400){
             console.log("seu saldo medio É: ", saldoMedio, "foi aprovado um credito de: ", saldoMedio*0.20)
        }else
             if (saldoMedio>401 && saldoMedio<=600){
                 console.log("seu saldo medio É: ", saldoMedio, "foi aprovado um credito de: ", saldoMedio*0.30)
             }
             else 
                console.log("seu saldo medio É: ", saldoMedio, "foi aprovado um credito de: ", saldoMedio*0.40)
    }
