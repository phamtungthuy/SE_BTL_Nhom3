import express from 'express';

let conFigViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = conFigViewEngine;