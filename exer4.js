/* 4) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das
 seguintes categorias: ● infantil A = 5- 7 anos ● infantil B = 8-10 anos ● juvenil A =
 11- 13 anos ● juvenil B = 14-17 anos ● adulto = maiores de 18 anos*/

 let idadeNadador = 15

 if (idadeNadador>0){
    console.log("idade valida:", idadeNadador)
    if (idadeNadador < 4){
        console.log("A edade não clasifica para ninguma categoria é muito novo")
        }else{
            if(idadeNadador>=5 && idadeNadador<=7){
                console.log("Ele vai a turma infantil A")
            }else{
                if (idadeNadador>=8 && idadeNadador<=10){
                    console.log("Ele vai a turm a infantil B")
                }else{
                    if (idadeNadador>=11 && idadeNadador<=13){
                        console.log("Ele vai a turm a juvenil A ")
                    }else{
                        if (idadeNadador>=14 && idadeNadador<=17){
                            console.log("Ele vai a turm a Juvenil B")
                        }else{
                              console.log("Ele vai a turma Adulto")
                            }
            }
        }
        }
    }
    }else{
        console.log("Digite uma idade valida")
        }

        