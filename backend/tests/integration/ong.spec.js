const request = require('supertest');
const app = require('../../src/app');
const conexao = require('../../src/database/conexao');


describe('ONG', () => {
    /**Executa as migrations e só depois realiza os tests */
    beforeEach(async () =>{
        /**Limpa o banco para cada execução */
        await conexao.migrate.rollback();
        await conexao.migrate.latest();
    });

    afterAll(async () =>{
        await conexao.destroy();
    });

    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name:"Thalys",
                email:"contato@gmail.com",
                whatsapp:"4700000000",
                cidade:"Rio do Sul",
                uf:"SC"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
})