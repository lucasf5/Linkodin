class NewUserDto{
    constructor(body){
        this.nome_usuario = body.nome_usuario;
        this.senha = body.senha;
        this.usuario_tipo = body.usuario_tipo;
        this.createdAt = new Date;
        this.updatedAt = new Date;
    }
}

module.exports = NewUserDto;