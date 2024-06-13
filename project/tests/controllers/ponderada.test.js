const assert = require('assert');
const controller = require('../../api/tests');
var supertest = require('supertest');

describe('UsersController', () => {
    it('Deve encontrar todos os usuários', async () => {
        const user = await precondicao()
        const substituicao1 = sinon.stub(User, 'find').resolves([user]);
        const req = {};

        await controller.find(req, RESPONSE);
    });
});