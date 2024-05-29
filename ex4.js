// Beatriz Alves Borges - 23214290001

// 4- Crie 3 objetos utilizando classes.
// 4.1 - Aplique ao menos 2 métodos em cada caso.

// 1
class musica {
  constructor(nome, cantor, album) {
    this.nome = nome;
    this.cantor = cantor;
    this.album = album;
  }
  song() {
    return `O nome da musica eh ${this.nome} da cantora ${this.cantor}, do album ${this.album}`;
  }
  song1() {
    return `A cantora ${this.cantor} lancou recentemente o album ${this.album} que tem a musica ${this.nome}`;
  }
}

const bags = new musica("Bags", "Clairo", "immunity");
const sofia = new musica("Sofia","Clairo","immunity");
const north = new musica("North","Clairo","immunity");

// saída classe musica
console.log(bags.song());
console.log(bags.song1());
console.log(sofia.song());
console.log(sofia.song1());
console.log(north.song());
console.log(north.song1());


// 2
class user {
  constructor(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
  }
  saudacao() {
    return `Oi! Meu nome eh ${this.nome}. Sou do genero ${this.genero} e tenho ${this.idade} anos.`;
  }
  presenting() {
    return `Do genero ${this.genero} e idade ${this.idade} anos, eu sou a ${this.nome}`;
  }
}

const beatriz = new user("beatriz", 18, "feminino");
const giovanna = new user("giovanna", 21, "feminino");
const barbara = new user("Barbara", 18, "feminino");

// saída classe pessoa
console.log(beatriz.saudacao());
console.log(beatriz.presenting());
console.log(giovanna.saudacao());
console.log(giovanna.presenting());
console.log(barbara.saudacao());
console.log(barbara.presenting());

// 3
class moto {
  constructor(modelo, marca, cilindrada) {
    this.modelo = modelo;
    this.marca = marca;
    this.cilindrada = cilindrada;
  }
  venda() {
    return `Esta eh a ${this.modelo}. Uma moto da marca ${this.marca} com ${this.cilindrada} cc`;
  }
  mostra() {
    return `Com ${this.cilindrada} cilindradas, essa moto da marca ${this.marca} domina as vendas. Seu nome eh ${this.modelo}`;
  }
}

const vstrom = new moto("vstrom", "suzuki", 800);
const versys = new moto("versys", "kawasaki", 1000);
const dominar = new moto("dominar", "bajaj", 400);

// saída classe moto
console.log(vstrom.venda());
console.log(vstrom.mostra());
console.log(versys.venda());
console.log(versys.mostra());
console.log(dominar.venda());
console.log(dominar.mostra());

