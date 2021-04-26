const Recados = require('../models/Recados');

class RecadoController {
    async index(req, res) {
        const contatos = await Recados.findAll();
        console.log(contatos)

        return res.json(contatos);
    }

    async show (req, res) {
        const { id } = req.params;

        const contatos = await Recados.findByPk(id);

        if(!contatos) {
            return res.status(400).json({error:'Recado não encotrado'})
        }

        return res.json(contatos);
    }

    //store

    async store(req, res) {
        const { name, text } = req.body;

        if(!name || !text) {
            return res.status(400).json({error: 'Preencha todas as informações'});
        }

        const contato = await Recados.create(req.body);


        return res.status(200).json({message: 'Obrigado pela mensagem!'});
    }



}

module.exports = new RecadoController();
