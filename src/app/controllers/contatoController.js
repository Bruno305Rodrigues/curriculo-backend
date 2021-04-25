const Contato = require('../models/Contato');

class ContatoController {
    async index(req, res) {
        const contatos = await Contato.findAll();

        return res.json(contatos);
    }

    async show (req, res) {
        const { id } = req.params;

        const contatos = await Contato.findByPk(id);

        if(!contatos) {
            return res.status(400).json({error:'Contato não encotrado'})
        }

        return res.json(contatos);
    }

    //store

    async store(req, res) {
        const { name, phone, email } = req.body;

        if(!name || !phone || !email) {
            return res.status(400).json({error: 'Preencha todas as informações'});
        }

        const contato = await Contato.create(req.body);


        return res.status(200).json({message: 'Obrigado pelo contato!'});
    }



}

module.exports = new ContatoController();