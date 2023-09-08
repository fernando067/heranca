
class Banco {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    cadastrar() {
        if(this.nome && this.cpf) {
            console.log(`Cadastro efeituado com sucesso, bem vindo ${this.nome}`);
        }
    }
}

class Operacoes extends Banco {
    constructor(saldo) {
        super()
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo+=valor;
        console.log(`Depósito realizado com sucesso! Seu saldo é de R$${this.saldo}`);
    }

    saque(valor) {
        if(valor > this.saldo) {
            console.log("Saldo insuficiente para saque, insira um valor menor");
            console.log(`Saldo atual: R$${this.saldo}`);
            return false
        } else {
            this.saldo -= valor;
            console.log(`Saque efeitudo com sucesso!`);
            console.log(`Saldo atual: R$${this.saldo}`);
        }
    }
}

var banco = new Banco("Fernando", 030013424)
var operacoes = new Operacoes(100)

banco.cadastrar()
operacoes.deposito(100)
operacoes.saque(190)