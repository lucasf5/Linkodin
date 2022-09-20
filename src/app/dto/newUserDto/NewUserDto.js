class NewUserDto{
    constructor(body, senhaHash){
        this.nome_usuario = body.nome_usuario;
        this.senha = senhaHash;
        this.usuario_tipo = body.usuario_tipo;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}

module.exports = NewUserDto;