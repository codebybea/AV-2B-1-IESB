// Beatriz Alves Borges - 23214290001

// 2- Crie 3 objetos com a forma de uma função construtora.
// 2.1- Crie ao menos um método para cada objeto e aplique-o.

// 1
function musica (nome, album, cantor, faixa) {
  this.nome = nome;
  this.album = album;
  this.cantor = cantor;
  this.faixa = faixa;
  this.songs = function() {
      return (`O nome da musica eh ${nome} do(a) cantor(a) ${cantor}, como faixa ${faixa} do album ${album}`);
  };
};

const flamingos = new musica('Flamingos', 'Bluesman', 'Baco Exu do Blues', 6);
const wildflower = new musica('Wildflower', 'Hit Me Hard and Soft', 'Billie Eilish', 3);
const moneytrees = new musica('Money Trees', 'good kid, m.A.A.d city', 'Kendrick Lamar')

console.log(wildflower.songs());
console.log(flamingos.songs());
console.log(moneytrees.songs());


// 2
function user (nome, ano, genero) {
  this.nome = nome;
  this.ano = ano;
  this.genero = genero;
  this.saudacao = function() {
      return (`Meu nome eh ${nome}. Sou do genero ${genero} e nasci em ${ano}`);
  };
};

const beatriz = new user('Beatriz', 2005, 'feminino');
const giovanna = new user('Giovanna', 2002, 'feminino');
const barbara = new user('Barbara', 2005, 'feminino');

console.log(beatriz.saudacao());
console.log(giovanna.saudacao());
console.log(barbara.saudacao());

// 3
function carro(modelo, marca, ano, portas) {
  this.modelo = modelo;
  this.marca = marca;
  this.ano = ano;
  this.portas = portas;
  this.vende = function() {
    return (`Este eh o ${modelo}. Um carro da marca ${marca} do ano ${ano} com ${portas} portas.`);
  };
};

const corolla = new carro('Corolla', 'Toyota', 2023, 4);
const civic = new carro('Civic', 'Honda', 2022, 4);
const onix = new carro('Onix', 'Chevrolet', 2021, 4);

console.log(corolla.vende());
console.log(civic.vende());
console.log(onix.vende());
