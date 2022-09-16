const usuarios = require('./userRoutes');
const admin = require('./adminRoutes');
const offerer = require('./offererRoutes');
const candidate = require('./candidateRoutes');

module.exports = app =>{
    app.use(
        usuarios,
        admin,
        offerer,
        candidate
    );
}