class UpdateContatoDto{
    constructor(body){
        this.email = body.email;
        this.telefone_fixo = body.telefone_fixo;
        this.telefone_celular = body.telefone_celular;
    }
}

module.exports = UpdateContatoDto;