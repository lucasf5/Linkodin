module.exports = class UpdateVagasSoftsDto{
    constructor(softskill){
        this.fk_softskill_vagassoft_id = softskill.softskill_id;
        this.fk_vagas_vagassoft_id = softskill.fk_vagas_vagassoft_id;
        this.createdAt = softskill.createdAt;
        this.updatedAt = new Date;
    }
}