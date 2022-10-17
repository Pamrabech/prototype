function Cliente(nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const andre = new Cliente("André", "060394839454","andre@hotmail.com",4000)

console.log(andre)