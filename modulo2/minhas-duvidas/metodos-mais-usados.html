<!--
   METODOS MAIS USADOS NO JAVASCRIPT:
   aqui eu tinha muitas duvidas sibre os metodos e os mais usados.
   todos os metodos aqui são os mais usados e não todos que existe!



Como entender o que está sendo criado, reutilizado, passado ou declarado no JavaScript

Essa anotação vai te ajudar a entender com clareza quando você está:
Criando algo novo
Pegando algo já existente
Reutilizando nomes
Passando dados como argumentos
E quando nomes iguais significam coisas diferentes!



---

1. Tudo que está com const, let ou var está sendo CRIADO

const idade = 20; // criou uma variável chamada idade


---

2. Quando a função tem um parâmetro com o mesmo nome, ela está criando uma variável interna

function mostrarNome(usuario) {
  console.log(usuario); // esse 'usuario' é o da função, NÃO o de fora
}

> Dica: o que vem entre os parênteses da função é uma nova variável temporária 
(um parâmetro). Ela só existe dentro da função.




---

3. Se você usa o nome SEM let, const, function, etc., você está PEGANDO algo já existente

console.log(usuario); // pegando a variável que já foi criada antes


---

4. Dentro de objetos: antes dos dois-pontos é o nome da propriedade. Depois dos dois-pontos pode ser qualquer valor

const nome = 'Mikael';

const usuario = {
  nome: nome // propriedade 'nome' recebe o valor da variável 'nome'
};

// forma simplificada:
const usuario = { nome }; // mesma coisa que nome: nome


---

5. Em Arrays ou Objetos, você sempre PEGA valores usando [] ou .

array[0]        // pegando o primeiro item do array
objeto.nome     // pegando o valor da propriedade 'nome'

> Forma simplificada do array (desestruturação):



const valores = [10, 20, 30];
const [primeiro, segundo] = valores;

console.log(primeiro); // 10
console.log(segundo);  // 20


---

6. Nome repetido? Olhe o contexto (escopo)

const produto = 'Camisa';

function atualizarProduto(produto) {
  produto = produto + ' Estampada';
  console.log(produto); // 'Camisa Estampada'
}

atualizarProduto(produto);
console.log(produto); // 'Camisa'

> Dentro da função é um produto novo, um parâmetro, que não afeta o de fora.



Dica de ouro: se tiver dúvida, muda o nome do parâmetro:

function atualizarProduto(produtoRecebido) {
  let novoProduto = produtoRecebido + ' Estampada';
  console.log(novoProduto);
}


---

7. Como identificar quando algo está sendo passado como argumento

function saudacao(nome) {
  console.log('Olá, ' + nome);
}

saudacao('Mikael');

> Aqui, 'Mikael' é o argumento. Ele entra como valor para o parâmetro nome.




---

8. Exemplo de receber objeto como parâmetro (forma clássica vs desestruturação)

function teste1(transacao) {
  console.log(transacao.descricao);
}

// ou

function teste2({ descricao }) {
  console.log(descricao);
}

const obj = { descricao: "Pizza", valor: 30 };
teste1(obj); // acessa dentro da função
teste2(obj); // extrai direto no parâmetro


---

9. Quando um parâmetro muda a variável de fora?

Depende do tipo de dado:

Tipo de dado:	                  Como é passado:

Primitivos (string, number…):	  - Por valor
Objetos e Arrays:	              - Por referência	


Exemplo com primitivo (tipo string) — passado por valor:

let nome = 'Mikael'; 
// nome => 'Mikael' (tipo primitivo: string)

function alterar(nome) {
  nome = 'Camila'; 
  // Aqui estamos *reatribuindo* o valor da variável local 'nome'
  // Essa variável só existe dentro da função, não afeta a variável fora
  // nome (dentro da função) => 'Camila'

  console.log('Dentro:', nome); 
  // Resultado: Dentro: Camila
}

alterar(nome);
// Passamos uma CÓPIA do valor 'Mikael' para a função

console.log('Fora:', nome); 
// Resultado: Fora: Mikael
// A variável original não foi alterada, porque strings são passadas por valor

Resumo do comportamento:

Strings (e outros tipos primitivos como number, boolean, etc.) são passados por valor.

A função recebe uma cópia da variável.

Alterar dentro da função não afeta a variável fora.



--
Exemplo com objeto — passado por referência:

const usuario = { nome: 'Mikael' }; 
// usuario => { nome: 'Mikael' } (objeto)

function atualizar(usuario) {
  usuario.nome = 'Camila'; 
  // Acessamos a propriedade 'nome' e alteramos seu valor
  // Como objetos são passados por referência, a alteração *muda o original*
  // usuario (dentro da função) => { nome: 'Camila' }

  console.log('Dentro:', usuario); 
  // Resultado: Dentro: { nome: 'Camila' }
}

atualizar(usuario);
// Passamos a referência do objeto. Alterações dentro da função afetam o original.

console.log('Fora:', usuario); 
// Resultado: Fora: { nome: 'Camila' }
// A variável original foi alterada

Resumo do comportamento:

Objetos e arrays são passados por referência.

A função recebe um "atalho" para o objeto original.

Alterações dentro da função afetam a variável original fora da função.



---

11. Resumo visual com palavras simples:

Situação	O que está acontecendo

const x = ...	Criando uma variável
function(x) {}	Criando um parâmetro temporário
console.log(x)	Pegando uma variável existente
obj = { nome: nome }	Propriedade recebendo uma variável
funcao(x)	Passando valor como argumento
obj.propriedade ou arr[i]	Pegando dados de objeto ou array


-->