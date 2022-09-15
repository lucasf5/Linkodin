class UpdateUserDto{
    constructor(body){
        this.nome_usuario = body.nome_usuario;
        this.senha = body.senha;
        this.usuario_tipo = body.usuario_tipo;
        this.createdAt = body.createdAt;
        this.updatedAt = new Date;
    }
}

module.exports = UpdateUserDto;