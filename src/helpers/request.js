const request = require('supertest');

const baseURL = 'https://reqres.in/api';

async function getRequest(path) {

    try {
        const response = await request(baseURL)
        .get(path)
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        
        return response.body;
    } catch (error) {
        throw new Error(`Error durante o request ${path} : ${error.message}`);
    } 
}

module.exports =
{
    getRequest,
}