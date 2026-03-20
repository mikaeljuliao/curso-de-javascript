<!--
funçoes:
funçoes são açoes que são executadas assim que são 
chamadas ou em deecorrenciade algum evento.

uma função pode receber parametros e retornar um resultado
e retornar um resultado





Função na vida real + código JavaScript:

1. Chamada
Minha mãe me chama e diz:
— “Vai comprar leite!”
Esse momento em que ela me aciona pra fazer algo é a chamada da função.

JavaScript:
comprarLeite("10 reais", "leite");


2. Parâmetros
Ela me dá 10 reais e diz que é pra comprar leite.
Essas informações são os parâmetros da função.
Sem elas, eu não posso fazer minha tarefa.

JavaScript:
function comprarLeite(dinheiro, produto) {


3. Ação
Eu pego o dinheiro, vou até a mercearia, escolho o leite, passo no caixa, pago e volto.
Toda essa sequência é o que a função faz internamente, a ação.

JavaScript:
let caminho = "Fui até a mercearia";
  let compra = "Comprei " + produto + " com " + dinheiro;
  let retornoPraCasa = "Voltei pra casa com o " + produto;


---

4. Retorno
Chego em casa e entrego o leite pra minha mãe.
Esse é o retorno da função, ou seja, o que ela devolve no final.

JavaScript:
return caminho + "\n" + compra + "\n" + retornoPraCasa;
}


---

Código completo junto:

function comprarLeite(dinheiro, produto) {
  let caminho = "Fui até a mercearia";
  let compra = "Comprei " + produto + " com " + dinheiro;
  let retornoPraCasa = "Voltei pra casa com o " + produto;

  return caminho + "\n" + compra + "\n" + retornoPraCasa;
}

// Chamada da função
let resultado = comprarLeite("10 reais", "leite");
console.log(resultado);

Saída no console:

Fui até a mercearia
Comprei leite com 10 reais
Voltei pra casa com o leite






exemplo con função de parametros padrão:

Código:

function parimpar(n) {
    if (n % 2 == 0) {
        return 'par!';
    } else {
        return 'impar';
    }
}
let res = parimpar(4)
console.log(res)


---

Explicação resumida e detalhada:

1. Parâmetro

No function parimpar(n), o n é o valor que a função precisa
pra funcionar — é o número que vai ser analisado.
Quando chamamos parimpar(4), o n recebe o valor 4, ou seja,
a função vai trabalhar com esse número.

2. Ação

Dentro da função, usamos if (n % 2 == 0). Isso testa se o número 
é divisível por 2 (ou seja, se sobra 0). Se for, é par e a função 
retorna 'par!'; se não for, retorna 'impar'.
No nosso exemplo: 4 % 2 == 0 é verdadeiro, então o retorno é 'par!'.

3. Retorno

O return devolve o resultado ('par!' ou 'impar') para quem chamou a 
função. A função em si não exibe nada no console — só devolve o valor.

4. Chamada

Quando fazemos let res = parimpar(4), estamos chamando a função passando 
o 4. O valor que a função devolve ('par!') é guardado na variável res. 
Depois, console.log(res) exibe isso no console.

Resumo com vida real

Alguém te entrega o número 4 e pede: "Vê se é par ou ímpar". Você faz a 
conta (divide por 2), vê que é par e responde "É par!".
Esse processo todo é igual ao que a função está fazendo.








Entendendo Parâmetros Padrão em Funções:

Código:

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(7, 3))


---

Explicação

1. Parâmetros:
n1 e n2 são valores que a função espera receber.
O = 0 define um valor padrão: se alguém esquecer de passar, o JavaScript usa 0.

Ex.: function soma(n1 = 0, n2 = 0)


2. Ação:
A função soma os dois valores recebidos:
return n1 + n2


3. Retorno:
A função devolve o resultado da soma.
Atenção: a função não exibe nada sozinha. Pra mostrar, usamos console.log().


4. Chamada:
console.log(soma(7, 3)) ativa a função passando 7 e 3.

n1 = 7
n2 = 3
Soma: 7 + 3 = 10

Então o console imprime 10.


---

Problema se não tivesse valor padrão:
Se chamássemos soma(7), o n2 seria undefined.
7 + undefined = NaN (erro).


Solução:
Com n2 = 0, se faltar valor, vira 0:
soma(7) → 7 + 0 = 7

Assim, o programa nunca quebra.


---

Resumo rápido:

Parâmetro = dado que a função espera.

Valor padrão = proteção contra erro.

Ação = soma dos valores.

Retorno = devolve o resultado.

Chamada = ativa a função e exibe o que ela devolveu.










Função em Variável:

No JavaScript, é possível guardar uma função dentro de uma variável. 
Isso é muito útil quando queremos passar funções como argumentos, 
ou até mesmo quando queremos reutilizar a mesma função em vários 
lugares sem precisar declará-la toda vez.

Exemplo:

let v = function (x) {
    return x * 2;
}

console.log(v(5)); // Saída: 10


---

Explicação:

1. Função Guardada em Variável: Em vez de declarar a função da 
forma tradicional (function nomeDaFunção()), estamos criando uma 
função anônima (sem nome) e a guardando na variável v. A função 
recebe o parâmetro x e retorna o valor de x multiplicado por 2.


2. Chamada da Função: Para usar a função guardada em v, chamamos 
a variável v como se fosse uma função normal, passando o valor 5 
como argumento (v(5)).


3. Retorno: A função retorna o resultado da operação x * 2.
No caso, 5 * 2 = 10, que é o que será impresso no console.


Esse tipo de abordagem é chamado de Função Anônima (sem nome) e é muito 
usado em várias situações no JavaScript.


-->