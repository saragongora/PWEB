var sql = require('mssql');

module.exports = function () {
    const config = {
        user: 'BD2221002',
        password: 'Ds211072#',
        database: 'BD',
        server: 'Apolo',
    }

    return sql.connect(config)
}

