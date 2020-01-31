const server = require('./server.js');
const request = require('supertest');




    it('returns 201 OK', () => {
        return request(server).post('/alpacas')
        .expect(201)
        // .expect('Content-Type', /json/)
    });
