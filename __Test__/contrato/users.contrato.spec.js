const { getRequest } = require('../../src/helpers/request') 
const { validarContrato } = require('../../src/helpers/validarContrato');
const contrato = require('../../src/schema/buscaTodosUsuarios.schema.json')
let response;

describe('Valida a lista de busca para todos os usuário', () => {
    
    it('[CT-CONTRATO-001] Busca de todos os usuários da base', async() => {
        response = await getRequest('/users')
        console.log('Response:', response);
    });

    it('[CT-CONTRATO-002] Validar o contrato para a busca de todos os usuários da base', () => {
        validarContrato(response, contrato);
    })
});