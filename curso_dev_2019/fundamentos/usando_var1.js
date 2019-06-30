{
    {
        {
            {
                var sera = 'Será??'
                 //variavel dentro de um bloco e fora de uma função, a variavel fica visivel
            }
        }
    }
}
console.log(sera)//visivel aqui


function teste(){
    var local = 123
    //variavel dentro de uma funcão, não fica visivel fora
}

teste()
console.log(local)
