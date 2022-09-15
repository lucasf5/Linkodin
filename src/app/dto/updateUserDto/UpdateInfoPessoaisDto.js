class UpdateUserDto{
    constructor(body){
        this.cpf_cnpj = body.cpf_cnpj;
        this.data_nasc = body.data_nasc;
        this.nome_completo = body.nome_completo;
        this.sobre = body.sobre;
    }
}

module.exports = UpdateUserDto;