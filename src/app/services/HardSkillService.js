const GeneralService = require('./GeneralService');

class HardSkillService extends GeneralService{
    constructor(){
        super('HardSkills');
    }
}

module.exports = HardSkillService;