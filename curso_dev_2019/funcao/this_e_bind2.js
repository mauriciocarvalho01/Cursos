function Pessoa(){
    this.idade = 0

    const self = this // amarrando o this em uma variavel
    setInterval(function(){
        self.idade++  // usando na variavel idade
        console.log(self.idade)
    }/*.bind(this)*/,1000)
}

new Pessoa()