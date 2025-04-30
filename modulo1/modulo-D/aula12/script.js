// condições alinhadas
var idade = 12
console.log (`voce tem ${idade} anos`)
if (idade < 16){
    console.log('não vota')
} else if  (idade >= 16 && idade <18){
    console.log('voto opiconal')
}
else {
    console.log('voto obrigatorio')
}

// condições mútiplas
var agora = new Date()
var diaSem = agora.getDay

/*
dias da semana no vs
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sábado
*/

switch(diaSem){
    case 0:
        console.loge('domingo')
        break;
    case 1:    
    console.log('segunda')
    break
    case 2:
        console.log('terça')
    break;  
    case 3:
        console.log('quarta')
    break; case 4:
    console.log('quinta')
    break;  
    case 4:
        console.log('sexta')
    break; 
    case 5:
        console.log('sábado')
    break;  
    case 6:
        console.log('sábado')
    break; 
    default:
        console.log('não tem dia')
}