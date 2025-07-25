const Validator = require('jsonschema').Validator;
const v = new Validator();
const assert = require("assert");



function validarContrato(response, contrato){
    const resultado = v.validate(response, contrato);

    if(resultado.valid) {
        console.log('Contrato válido');
    }else {
        console.error('Contrato inválido');
        resultado.errors.forEach(error => {
            console.error(`Erro: ${error.stack}`);
        });

        assert.fail('Contrato inválido');
    }

    return resultado.valid
}

module.exports = {
    validarContrato
}