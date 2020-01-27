
const operacao = prompt("Deseja 'Criptografar' ou 'Descriptografar'?");

if(operacao==="Criptografar"){
    //                                                  VV        Função para remover acentos        VV
    const entrada = prompt("Frase a ser criptografada").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const chaveDaCriptografia = Number(prompt("Chave da criptografia"));
    Criptografar(entrada, chaveDaCriptografia);
}else{
    //                                                    VV         Função para remover acentos        VV
    const entrada = prompt("Frase a ser descriptografada").normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const chaveDaCriptografia = Number(prompt("Chave da criptografia"));
    Descriptografar(entrada, chaveDaCriptografia);
}

function Criptografar(frase, chave){
    const alfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz";
    const alfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let novaFrase = "";

    //Percorrer a frase letra por letra
    for(letra of frase){
        //Eliminando os espaços vazios da criptografia
        if(letra !== " "){
            //Checando se a letra é maiuscula ou minuscula
            //VV Minusculos VV
            if(letra === letra.toLowerCase()){
                //Achar a letra no vetor de letras minusculas
                const index = (alfabetoMinusculo.indexOf(letra));
                //Achar a letra corespondente a ela na chave
                let novaLetra = alfabetoMinusculo[index+chave];
                //Caso estrapole a ultima letra do alfabeto, ele irá loopar o alfabeto
                if(!novaLetra){
                    novaLetra = alfabetoMinusculo[(index+chave)-26];
                }
                //Concatenar a letra à nova frase
                novaFrase = novaFrase + novaLetra;
                //VV Maiusculas VV
            }else{
                //Mesmo processo, só que para o vetor de letras maiusculas
                const index = (alfabetoMaiusculo.indexOf(letra));
                let novaLetra = alfabetoMaiusculo[index+chave];
                if(!novaLetra){
                    novaLetra = alfabetoMaiusculo[(index+chave)-26];
                }
                novaFrase = novaFrase + novaLetra;
            }
        }else{
            novaFrase = novaFrase + " ";
        }
    }
    document.write(novaFrase + "</br>");
    document.write(chave);
}

//Basicamente o processo de criptografia com as operações invertidas
function Descriptografar(frase, chave){
    const alfabetoMinusculo = "abcdefghijklmnopqrstuvwxyz";
    const alfabetoMaiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let novaFrase = "";

    for(letra of frase){
        if(letra !== " "){
            if(letra === letra.toLowerCase()){
                const index = (alfabetoMinusculo.indexOf(letra));
                //Operação invertida aqui              V
                let novaLetra = alfabetoMinusculo[index-chave];
                if(!novaLetra){
                    //                             Aqui V aqui V
                    novaLetra = alfabetoMinusculo[(index-chave)+26];
                }
                novaFrase = novaFrase + novaLetra;
            }else{
                const index = (alfabetoMaiusculo.indexOf(letra));
                //                                Aqui V
                let novaLetra = alfabetoMaiusculo[index-chave];
                if(!novaLetra){
                    //                             Aqui V aqui V
                    novaLetra = alfabetoMaiusculo[(index-chave)+26];
                }
                novaFrase = novaFrase + novaLetra;
            }
        }else{
            novaFrase = novaFrase + " ";
        }
    }
    document.write(novaFrase + "</br>");
    document.write(chave);
}