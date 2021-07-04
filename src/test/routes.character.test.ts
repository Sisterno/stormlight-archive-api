import {  } from "assert";
import proxyquire from "proxyquire";
import { characters,charactersServiceMock } from "../utils/mocks/characters";
import { testServer } from "../utils/testServer";

describe('routes - character',function () {
    const route = proxyquire('../routes/characters',{
        '../services/movies': charactersServiceMock
    });
    const request = testServer(route);
    describe('GET /character ',function () {
        it('should respond with status 200',function (done) {
            request.get('/api/character').expect(200,done); 
        })
        it('should respond with the listen',function (done) {
            request.get('/api/character').expect(200,done); 
        })
    });


})