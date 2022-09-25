module.exports = class NewVagasSoftsDto{
    constructor(softskill, id){
        this.fk_vagas_vagassoft_id = id;
        this.fk_softskill_vagassoft_id = softskill.softskill_id;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}