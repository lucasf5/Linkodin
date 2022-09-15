const { 
    GeneralService, 
    UserService, 
    HardSkillService, 
    SoftSkillService } = require('../services');

const { UserViewDto, NewHardSkillDto, NewSoftSkillDto } = require('../dto');
const { StatusCode } = require('../enums');
const { InfoPessoais, Habilidades } = require('../models');

const hardSkillService = new HardSkillService();
const softSkillService = new SoftSkillService();
const generalServiceToUser = new GeneralService('Usuarios');

class AdminController{
    static async getAllUsers(req, res){      
        try {
            const users = await generalServiceToUser.getAllWithParams(
                {}, [InfoPessoais, Habilidades], req.query);
            
            const userInfo = users.rows.map(user => new UserViewDto(user));
            return res.status(StatusCode.OK).json({count: users.count, rows: userInfo});
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ messagem: error.message });
        }
    }

    //FUNÇÃO A SER IMPLEMENTADA CORRETAMENTE - filtro de senioridade
    // static async getAllUsersByType(req, res){
    //     try {
    //         const users = await generalServiceToUser.getAll();
    //         return res.status(StatusCode.OK).json(users);
    //     } catch (error) {
    //         return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ messagem: error.message });
    //     }
    // }

    static async getUserById(req, res){
        const { id } = req.params;

        try {
            const user = await generalServiceToUser.getById(id);
            return user === null ? 
                res.status(StatusCode.NO_CONTENT).json():
                res.status(StatusCode.OK).json(user);
            
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async createNewUser(req, res){
        const userService = new UserService();

        try {
            const newUser = await userService.createNewUser(req.body);
            return res.status(StatusCode.CREATED).json(newUser);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async softDeleteUser(req, res){
        const { id } = req.params;
        try {
            await generalServiceToUser.deleteById(id, false);
            return res.status(StatusCode.OK).json({message: `id ${id} deletado.`});
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    static async hardDeleteUser(req, res){
        const { id } = req.params;
        try {
            await generalServiceToUser.deleteById(id, true);
            return res.status(StatusCode.OK).json({message: `id ${id} deletado.`});
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({message: error.message});
        }
    }

    static async getAllHardSkills(req, res){
        try {
            const Skills = await hardSkillService.getAll();
            return res.status(StatusCode.OK).json(Skills);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async createNewHardSkill(req, res){
        try {
            const newHardSkill = await hardSkillService.create(new NewHardSkillDto(req.body));
            return res.status(StatusCode.CREATED).json(newHardSkill);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async deleteHardSkill(req, res){
        const { id } = req.params;
        try {
            const deletedSkill = await hardSkillService.deleteById(id, true);
            return res.status(StatusCode.OK).json(deletedSkill);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async getAllSoftSkills(req, res){
        try {
            const Skills = await softSkillService.getAll();
            return res.status(StatusCode.OK).json(Skills);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async createNewSoftSkill(req, res){
        try {
            const newSoftSkill = await softSkillService.create(new NewSoftSkillDto(req.body));
            return res.status(StatusCode.CREATED).json(newSoftSkill);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }

    static async deleteSoftSkill(req, res){
        const { id } = req.params;
        try {
            const deletedSkill = await softSkillService.deleteById(id, true);
            return res.status(StatusCode.OK).json(deletedSkill);
        } catch (error) {
            return res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    }
}

module.exports = AdminController;