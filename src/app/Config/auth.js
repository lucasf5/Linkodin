const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const database = require('../models');
const jsonWebToken = require('jsonwebtoken');

const getData = async(email)=>{
    let infoPessoais, usuario;
    const contatos = await database.Contatos.findOne({ where: { email }})
    if(contatos){
        infoPessoais = await database.InfoPessoais.findOne({ where: { id: contatos.fk_infopessoais_cont_id}})
        usuario = await database.Usuarios.findOne({ where: {id: infoPessoais.fk_usuarios_info_id}})
    }

    return {usuario}
}


passport.use(
    new LocalStrategy({
        usernameField: 'email',
        passwordField: 'senha',
        session: false
    }, async (email, senha, done)=>{
        try {
            const { usuario } = await getData(email);
        
            done(null, usuario);
        } catch (error) {
            done(error);
        }
    })
);

passport.use(
    new BearerStrategy(
        async (token, done)=>{
            try {
                const payload = jsonWebToken.verify(token, process.env.JWT_KEY);
                const usuario = await database.Usuarios.findOne({ where: { id: payload.id }})
                done(null, usuario);
            } catch (error) {
                done(error)
            }
        }
    ) 
);
