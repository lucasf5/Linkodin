const { getAge } = require('../../utils')

class UserViewCompleteDto{
    constructor(user, infoPessoais, contatos, enderecos, habilidades, hardskills, softskills){
        this.user = {
            id: user.id,
            nome_usuario: user.nome_usuario,
            idade: getAge(infoPessoais.data_nasc),
            nome_completo: infoPessoais.nome_completo,
            cpf_cnpj: infoPessoais.cpf_cnpj,
            sobre: infoPessoais.sobre,
        }

        this.contact = {
            email: contatos.email,
            telefone_fixo: contatos.telefone_fixo,
            telefone_celular: contatos.telefone_celular
        }

        this.address = {
            logradouro: enderecos.logradouro,
            nome_logradouro: enderecos.nome_logradouro,
            numero_logradouro: enderecos.numero_logradouro,
            complemento: enderecos.complemento,
            bairro: enderecos.bairro,
            cidade: enderecos.cidade,
            estado: enderecos.estado,
        }

        this.habilities = habilidades ? {
            area: habilidades.area,
            senioridade: habilidades.senioridade,
            hardskills: [...hardskills],
            softskills: [...softskills]
        } : null;
    }
}

module.exports = UserViewCompleteDto;