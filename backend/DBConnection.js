const mysql = require('mysql-await');

const connection = mysql.createConnection({
    'host': 'gov-learn-db.cfqpgf8isk9s.us-east-1.rds.amazonaws.com',
    'user': 'admin',
    'password': 'gov_learn_1',
    'database': 'gov_learn'
});

exports.getConnection = async function() {
    return connection
}