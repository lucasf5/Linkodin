class NewVagasHardsDto{
    constructor(hardskill, id){
        this.fk_vagas_vagashard_id = id;
        this.fk_hardskill_vagashard_id = hardskill.hardskill_id;
        this.nivel_desejado = hardskill.nivel_desejado;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}

module.exports = NewVagasHardsDto;