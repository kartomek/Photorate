// libs
const bodyParser = require ("body-parser");

const initializeBodyParser = app => {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    return app;
}

module.exports = initializeBodyParser;