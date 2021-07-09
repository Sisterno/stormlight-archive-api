import { Router,Express } from "express";
import { endpointBook } from "./book";
import { endpointChracters } from "./characters";
import { endpointCulture } from "./culture";
import { endpointEvent } from "./event";
import { endpointGroup } from "./group";
import { endpointLocation } from "./location";
import { endpointPower } from "./power";
import { endpointShard } from "./shard";
import { endpointWorld } from "./world";

export function getRoutes(app:Express) {
    const router = Router()
    app.use('/api/character',endpointChracters())
    app.use('/api/location',endpointLocation())
    app.use('/api/book',endpointBook())
    app.use('/api/culture',endpointCulture())
    app.use('/api/event',endpointEvent())
    app.use('/api/group',endpointGroup())
    app.use('/api/power',endpointPower())
    app.use('/api/shard',endpointShard())
    app.use('/api/world',endpointWorld())
}