import React from 'react';
import supertest from 'supertest';
import '@testing-library/jest-dom/extend-expect'
import dataJson from '../../../public/data.json'

const rq = supertest(dataJson)
describe("Testing if we get the data json", () =>{
    it("GET data", (done) =>{
      rq
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        if(err) return done(err)
        return done()
        })
    })
})



