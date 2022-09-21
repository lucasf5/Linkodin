const { getAge } = require('../../utils');

class UserViewDto{
    constructor(user){
        this.id = user.id;
        this.nome_usuario = user.nome_usuario; 
        this.usuario_tipo = user.usuario_tipo;
        this.cpf_cnpj = user.InfoPessoai.cpf_cnpj;
        this.idade = getAge(user.InfoPessoai.data_nasc);
        this.nome_completo = user.InfoPessoai.nome_completo;
        this.sobre = user.InfoPessoai.sobre;
        this.area = user.Habilidade != null ? user.Habilidade.area : null;
        this.senioridade = user.Habilidade != null ? user.Habilidade.senioridade : null;
    }
}

module.exports = UserViewDto;