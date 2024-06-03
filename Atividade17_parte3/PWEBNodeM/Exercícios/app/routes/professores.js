var dbConnection = require('../config/dbConection');

module.exports = function(app) {
    app.get('/informacao/professores', function (req, res) {

        async function getProfessores() {
            try {
                const pool = await dbConnection();
                const results = await pool.request().query('SELECT * from PROFESSORES');
                res.render('informacao/professores',{profs:results.recordset});
            } catch (err) {
                console.log(err);
            }
        }

        getProfessores();
    });
 
}