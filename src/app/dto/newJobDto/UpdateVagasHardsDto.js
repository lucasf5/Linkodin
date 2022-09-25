module.exports = class UpdateVagasHardsDto{
    constructor(hardskill){
        this.fk_hardskill_vagashard_id = hardskill.hardskill_id;
        this.fk_vagas_vagashard_id = hardskill.fk_vagas_vagashard_id;
        this.nivel_desejado = hardskill.nivel_desejado;
        this.createdAt = hardskill.createdAt;
        this.updatedAt = new Date;
    }
}