class JobViewDto{
    constructor(job){
        this.id = job.id;
        this.titulo = job.titulo;
        this.tipo_vaga = job.tipo_vaga;
        this.tipo_contrato = job.tipo_contrato;
        this.nivel_vaga = job.nivel_vaga;
        this.descricao = job.descricao;
    }
}

module.exports = JobViewDto;