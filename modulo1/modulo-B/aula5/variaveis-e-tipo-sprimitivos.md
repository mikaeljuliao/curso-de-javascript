<!-- 


COMENTARIOS EM JAVASCRIPT:


Os comentários em JavaScript servem para deixar notas no código, explicando trechos,
desativando partes temporariamente ou facilitando a manutenção. Eles não afetam
a execução do programa e são ignorados pelo interpretador.

Tipos de Comentários em JavaScript

1. Comentário de uma linha (//)

Usado para escrever comentários curtos. Tudo que estiver depois de // na mesma linha será ignorado.

// Isso é um comentário de uma linha
console.log("Olá, mundo!"); // Outro comentário

2. Comentário de múltiplas linhas (/* ... */)

Usado para escrever comentários longos ou desativar um bloco de código temporariamente.

/*
Este é um comentário de múltiplas linhas.
Pode ser usado para documentar funções, trechos de código ou testes.
*/
console.log("Olá, mundo!");


3. Comentário para desativar código

Comentários podem ser usados para desativar partes do código sem removê-las.

// console.log("Isso não será executado");

/*
console.log("Isso também não será executado");
console.log("Porque está dentro de um comentário de múltiplas linhas");
*/






O que são variáveis em JavaScript?

Variáveis são como caixinhas onde podemos guardar informações (dados) 
para usar depois. Mas, para que possamos identificar cada variável e 
usá-la corretamente, damos um nome a ela. Esse nome serve como uma 
etiqueta para acessarmos os valores armazenados.

Como criar uma variável?

Em JavaScript, usamos três palavras-chave para criar variáveis: var, 
let e const. Vamos entender como funciona a sintaxe.

Sintaxe básica de uma variável:

EXEMPLO:  let nome = "Mikael";

- Vamos dividir isso em partes:

1. let → Palavra-chave que define a variável (poderia ser var ou const).
2. nome → Nome da variável (a identificação dela).
3. = → Operador de atribuição (diz que estamos guardando ou recebendo um valor na variável).
4. "Mikael" → Valor armazenado (pode ser um texto, número, etc.).



Agora, veja como cada palavra-chave funciona:

1. Usando var (forma antiga, menos recomendada hoje)

var idade = 25;
console.log(idade); // Saída: 25

- O var tem algumas limitações, então preferimos usar let e const.


2. Usando let (o mais recomendado para variáveis que mudam)

let cidade = "Fortaleza";
console.log(cidade); // Saída: Fortaleza

cidade = "São Paulo"; // Podemos mudar o valor
console.log(cidade); // Saída: São Paulo

let cidade = null  // o valor null siginifica que a variavel cidade vai receber mada, será nulo

Com let, podemos alterar o valor da variável depois que ela for criada.

3. Usando const (para valores que não mudam)

const PI = 3.14;
console.log(PI); // Saída: 3.14

// PI = 3.1416; ❌ Isso dará erro, pois const não pode ser alterado.

O const é usado quando temos certeza de que o valor nunca vai mudar.



Tipos de dados que podemos armazenar em variáveis:
As variáveis podem guardar diferentes tipos de informações

let texto = "Olá, mundo!"; // String (texto)
let numero = 10; // Número
let booleano = true; // Booleano (verdadeiro ou falso)
let lista = [1, 2, 3]; // Array (lista de valores)
let objeto = { nome: "Mikael", idade: 25 }; // Objeto (estrutura com várias informações)



Regras para nomear variáveis:
1. O nome deve começar com uma letra, _ ou $ (não pode começar com número).
2. Não pode ter espaços (use _ ou camelCase, como minhaVariavel).
3. é possivel usar numeros ou numeros (ex: n1, n2, n3)
4: é possivel usar acentos e simbolos (ex: média, pí)
5. não pode ser palavras reservadas (ex: alert, function, var,  etc...)
6. JavaScript diferencia maiúsculas de minúsculas (idade ≠ Idade).



Resumo

- Variáveis armazenam informações.
- Precisamos dar um nome a elas para identificá-las.
- Usamos var, let ou const para criar variáveis.
- O nome da variável deve seguir algumas regras.



data types:
1. number
    -infinity
    -NaN
2. string
3. boolean
4. null
5. undefined
6. object
   - array
7. function       


Tipos Primitivos em JavaScript

Os tipos primitivos representam os valores básicos que não podem
ser modificados diretamente. São os blocos fundamentais para a 
construção dos dados em JavaScript. Vamos ver cada um deles de
forma organizada:

1. number (Número)

Os números em JavaScript podem ser inteiros ou decimais.
Além dos números comuns, há dois valores especiais:

Exemplo de números inteiros e decimais:

let idade = 25;      // Número inteiro
let altura = 1.75;   // Número decimal

- Infinity:
Representa o infinito matemático, ou seja, um valor que ultrapassa 
qualquer número finito. Isso geralmente aparece em operações como a divisão por zero.

console.log(1 / 0);  // Saída: Infinity

- NaN (Not a Number):
Indica que uma operação que esperava um número não obteve um resultado 
numérico válido. Isso pode ocorrer quando tentamos realizar cálculos 
com valores que não são números.

console.log("abc" * 2);  // Saída: NaN



---

2. string (Texto)

Strings são sequências de caracteres usadas para representar textos.
Elas podem ser definidas com aspas simples ('...'), aspas duplas ("...") 
ou crases (template strings: ...).

Exemplos:

let nome = "Mikael";
let mensagem = 'Olá, mundo!';
let template = Este é um template string, muito útil para inserir variáveis: ${nome};



---

3. boolean (Lógico)

O tipo booleano representa valores lógicos, que podem ser somente true
(verdadeiro) ou false (falso). É muito utilizado em condições e estruturas de controle.

Exemplos:

let estaChovendo = true;
let temDinheiro = false;



---

4. null (Nulo)

O null é usado para indicar a ausência intencional de valor. É um valor atribuído
a uma variável para demonstrar que ela não possui valor.

Exemplo:

let contaBancaria = null;



---

5. undefined (Indefinido)

Quando uma variável é declarada mas não é inicializada com nenhum valor, ela 
possui o valor undefined. Isso indica que o valor ainda não foi definido.

Exemplo:

let telefone;
console.log(telefone);  // Saída: undefined



---

Verificando o Tipo de uma Variável:
Você pode usar o operador typeof para saber qual o tipo de dado armazenado em uma variável:

console.log(typeof 25);         // "number"
console.log(typeof "Olá");      // "string"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object" (um comportamento histórico do JavaScript)
console.log(typeof undefined);  // "undefined"


---

Observações Importantes

Imutabilidade dos Primitivos:
Os valores primitivos são imutáveis, o que significa que, uma vez criados, 
não podem ser alterados diretamente. Caso você "mude" o valor de uma variável, 
na verdade, está criando um novo valor e fazendo com que a variável aponte para ele.

Uso de Infinity e NaN:

- Infinity: Pode ser útil para representar resultados de cálculos que excedem os 
limites numéricos finitos.

- NaN: É importante sempre verificar quando uma operação retorna NaN para evitar 
erros na lógica do seu programa.


-->