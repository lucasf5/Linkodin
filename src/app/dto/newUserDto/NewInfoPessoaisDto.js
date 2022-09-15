class NewInfoPessoaisDto{
    constructor(body, id){
        this.cpf_cnpj = body.cpf_cnpj;
        this.fk_usuarios_info_id = id;
    }
}

module.exports = NewInfoPessoaisDto;