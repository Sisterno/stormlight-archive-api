# API de la saga de libros "Stormlight Archive"

## Porque?

"Stormlight Archive" o "El archivo de las tormentas" es la saga de libros por la que su autor Brandon Sanderson indico que quiere ser recordado. Este proyecto nació después de haberme terminado  `Ritmos de Guerra` el cual es el cuarto libro de la saga ( la saga será un decalogía ). Puedo decir que actualmente es mi saga de libros de fantasía favorita. La inspiración para este proyecto es el proyecto [The Rick and Morty API]([The Rick and Morty API](https://rickandmortyapi.com/)) . 

Este proyecto tiene como principal objetivo crear una RESFUL API de donde poder obtener información esquematizada de la saga de libros. La información que se presentara aquí será recopilada de la wiki oficial de esta saga de libros [The Coppermind](https://coppermind.net/) .

## Tecnologías utilizadas

- JS/TS
- NodeJS
- Express
- MongoDB / Mongo Atlas

## Diagrama de clases

![Diagrama de clases](.\img\API_stromlight_archive_classDiagram.png)

### Primer esquema de API's

| Route | Type | Razón de existir |
|-----|-----|-----|
|/api/character|GET|Lista completa de personajes|
|/api/character/:id|GET|Datos extendidos de ese personajes|
|/api|||
||||
