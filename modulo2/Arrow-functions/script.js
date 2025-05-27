// fazendo com que cada valor receba ele mesmo ao quadrado
const numeros = [1, 2, 3, 4, 5];

const quadrado = numeros.map(numero => numero * numero) 
console.log(quadrado)
 
document.getElementById('meuBotão').addEventListener('click', function (){
    console.log('botão clicado!')
})

 
document.getElementById('meuBotão').addEventListener('click', () => {
    console.log('botão clicado!')
})


setTimeout(function (){
    console.log('executado apos 1 segundo');
}, 1000)


setInterval(function (){
    console.log('executado apos 1 segundo');
}, 1000)



document.getElementById('meuBotao').addEventListener('click', function () {
    console.log('função tradicional', this);
    // this se refere ao elemento global que dispara o evento (o botão)

    function funcaoInterna() {
        console.log('dentro da funão tradicional interna', this);
    // dentro de uma função tradicional, 'this' se refere ao contexto global (undefined)    
    }

    funcaoInterna();
})



document.getElementById('meuBotao').addEventListener('click', function () {
    console.log('função tradicional', this);
    // this se refere ao elemento global que dispara o evento (o botão)

     const arrowFuncao = () => {
        console.log('Dentro da Arrow Function:' , this)
        // dentro de uma arrow function 'this' herda o valor do contexto onde foi definida neste caso seria o botao
     }
    arrowFuncao();
})


function fazerBolo (){
    console.log(arguments)
}
fazerBolo('farinha', 'ovos', 'leite'); // ['farinha', 'ovos', 'leite']

let fazerBolo = (...ingredientes) => {
    console.log(ingredientes)
}
fazerBolo('farinha', 'ovos', 'leite'); 
// aqui precisei usar o reset parameter ( 3 pontinhos + nome do argumento) no lugar de arguments
// e retornou um array da mesma forma.
 // ['farinha', 'ovos', 'leite']


