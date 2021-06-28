import express from "express";
import { Express } from "express-serve-static-core";
import supertest, {  } from "supertest";
function testServer(route: (arg0: Express) => void) {
    const app = express();
    route(app);
    return supertest(app);
}
export {
    testServer
}