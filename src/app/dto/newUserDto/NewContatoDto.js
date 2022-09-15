class NewContatoDto{
    constructor(body, id){
        this.email = body.email;
        this.fk_infopessoais_cont_id = id;
    }
}

module.exports = NewContatoDto;