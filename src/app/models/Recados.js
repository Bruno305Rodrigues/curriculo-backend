const Sequelize = require('sequelize');
const Model = require('sequelize').Model;


class Recados extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: Sequelize.STRING(100),
                allowNull:false,
            },
            text: {
                type: Sequelize.STRING(140),
                allowNull: false,
            },
          
        }, {
            sequelize,
            schema: 'testegrow',
            tableName: 'recados',
        });

        return this;
    }

    
}

module.exports = Recados;
