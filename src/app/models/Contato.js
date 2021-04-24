const Sequelize = require('sequelize');
const Model = require('sequelize').Model;


class Contato extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull:false,
            },
            phone: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        }, {
            sequelize,
            schema: 'testegrow',
            tableName: 'contatos',
        });

        return this;
    }

    
}

module.exports = Contato;
