const database = require('../models');

class GeneralService{
    constructor(model){
        this.model = model;
    }

    async getAll(){
        return database[this.model].findAll();
    }

    async getAllWithParams(where = {}, model, constraints){
        let { offset, limit, order } = constraints;

        return database[this.model].findAndCountAll({ 
            where: { ...where },
            include: [{ model: model[0], required: true }, { model: model[1], required: false }],
            offset: parseInt(offset) || 0,
            limit: parseInt(limit) || 10,
            order:[['id', order || 'asc']]
        });
    }

    async getAllByUserType(type){
        return database[this.model].findAll({where: {
            usuario_tipo: type
        }});
    }

    async getById(id){
        return database[this.model].findOne({ where: { id }});
    }

    async create(dto){
        return database[this.model].create(dto);
    }

    async deleteById(id, force){
        return database[this.model].destroy({ where: { id }, force});
    }
}

module.exports = GeneralService;