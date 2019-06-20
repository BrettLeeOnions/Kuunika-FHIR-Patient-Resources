const express = require('express');
const supertest = require('supertest');
const parientRoutes = require('../routes/patient.route');
const {assert}        = require('chai');

let patientJSON = require('./patientRecord');
let updatedPatientJSON = require('./patientRecord');

const app = express();
app.use('/api/patient', parientRoutes);

describe('GET: api/patients', function(){
    it('Should return all patient records withing the system',function(){
        return supertest(app).
                get('/api/patient')
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .expect(200)
                .then((response) => assert.isTrue(response.body.length > 0));
    });
});

describe('GET:  api/patient/:id',function(){
    it('Should return an individual resource',function(){
        return supertest(app).
                get('/api/patient/5d0a33e4fbc975a9e011fe97')
                .expect('Content-Type', /json/)
                .set('Accept', 'application/json')
                .expect(200)
                .then((response) => assert.equal(response.body._id,'5d0a33e4fbc975a9e011fe97'));
    });
});
describe('POST: api/patient/',function(){
    it('Should return an individual patient resource after post request',function(){
        return supertest(app)
        .post('/api/patient/')
        .send(patientJSON)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .then((response) => assert.equal(response.body.success,"Patient Record Added"))
    });
});
describe('PUT:  api/patient/:id', function(){
    it('Should return an individual resource',function(){
        
    });
});
describe('DELETE: api/patient/:id',function(){
    it('Should return an individual resource',function(){
        
    });
});
