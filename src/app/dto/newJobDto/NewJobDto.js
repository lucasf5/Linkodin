class NewJobDto{
    constructor(body){
        this.titulo = body.titulo;
        this.tipo_vaga = body.tipo_vaga;
        this.tipo_contrato = body.tipo_contrato;
        this.nivel_vaga = body.nivel_vaga;
        this.descricao = body.descricao;
        this.fk_usuarios_vag_id = body.fk_usuarios_vag_id;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}

module.exports = NewJobDto;