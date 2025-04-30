
let amigos = {
    nome: 'José',
    sexo: 'Homem',
    peso: 85.4,
    engordar: function(p=0) {
        console.log('engordou')
        this.peso += p++;
        
    }
}
amigos.engordar(2)

console.log(`${amigos.nome} pesa ${amigos.peso} kg`)