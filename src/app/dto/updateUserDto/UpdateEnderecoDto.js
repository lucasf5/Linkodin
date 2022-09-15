class UpdateEnderecoDto{
    constructor(body){
        this.logradouro = body.logradouro;
        this.nome_logradouro = body.numero_logradouro;
        this.numero_logradouro = body.numero_logradouro;
        this.complemento = body.complemento;
        this.bairro = body.bairro;
        this.cidade = body.cidade;
        this.estado = body.estado;
    }
}

module.exports = UpdateEnderecoDto;