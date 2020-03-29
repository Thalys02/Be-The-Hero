const connection = require('../database/conexao');
const crypto = require('crypto');

module.exports = {
    async  index(request,response){
             const ongs = await connection('ongs').select('*');
             return response.json(ongs);
    },

    async create(request,response){
        const {name,email,whatsapp,cidade,uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf,
        })
        return response.json({id});
    }
}