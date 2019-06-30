let parImpar = (n) => {
    while(n >= 0){
        if ((n % 2) == 0) return true
        else return false

        return parImpar(n-2)
        }  
       
}
if(parImpar == undefined) console.log("Valor negativo")   
else console.log(parImpar(0)); 