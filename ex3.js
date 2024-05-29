// Beatriz Alves Borges - 23214290001

// 3- Repita o exercício 2 para criar 3 objetos diretamente sem o auxílio  de uma função.

// 1
musica = {
  nome: [{ nome: "chihiro" }, { nome: "wildflower" }, { nome: "lunch" }],
  album: "hit me hard and soft",
  cantor: "Billie Eilish",
  songs: function () {
    let saida = "";
    for (let musica of this.nome) {
      saida += `O nome da musica eh ${musica.nome} da cantora ${this.cantor}, do album ${this.album} \n`;
    }
    return saida;
  },
};

// saida musica
console.log(musica.songs());

// 2
pessoa = {
  nome: [{ nome: "beatriz" }, { nome: "giovanna" }, { nome: "barbara" }],
  idade: [18, 21, 18],
  genero: "feminino",
  saudacao: function () {
    let saida = "";
    for (let i in this.nome) {
      saida += `Oi! Meu nome eh ${this.nome[i].nome}. Sou do genero ${this.genero} e tenho ${this.idade[i]} anos. \n`;
    }
    return saida;
  },
};

// saida pessoa
console.log(pessoa.saudacao());

// 3
moto = {
  modelo: [{ modelo: "vstrom" }, { modelo: "dominar" }, { modelo: "versys" }],
  marca: ["suzuki", "bajaj", "kawasaki"],
  cilindrada: [800, 400, 1000],
  vendas: function () {
    let saida = "";
    for (let i in this.modelo) {
      saida += `Esta eh a ${this.modelo[i].modelo}. Uma moto da marca ${this.marca[i]} com ${this.cilindrada[i]} cilindradas. \n`;
    }
    return saida;
  },
};

// saida moto
console.log(moto.vendas());
