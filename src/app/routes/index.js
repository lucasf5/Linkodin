const usuarios = require('./userRoutes');
const admin = require('./adminRoutes');
const recruiter = require('./recruiterRoutes');
const candidate = require('./candidateRoutes');

module.exports = app =>{
    app.use(
        usuarios,
        admin,
        recruiter,
        candidate
    );
}