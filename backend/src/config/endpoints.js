// libs
const path = require("path");
const fs = require("fs");

const initializeRouter = app => {

    // filename of routers
    const routerFile = "endpoints.js"

    const entitiesPath = path.resolve(__dirname, "..", "entities");
    const entities = fs.readdirSync(entitiesPath, {withFileTypes: true});

    for (let entity of entities) {
        if (!entity.isDirectory()) continue;
        const entityUrl = "/" + entity.name;
        try {
            const entityRouter = require(path.resolve(entitiesPath, entity.name, routerFile));
            app.use(entityUrl, entityRouter);
        } catch (err) {
        }
    }

    return app;
}

const initializeEndRoute = app => {

    app.use((req, res, next) => {
        const error = new Error(`Odpytywany endpoint ${req.url} nie istnieje.`);
        return res.status(404).json({msg: error.message});
    });

    return app;
}

module.exports = {
    initializeRouter,
    initializeEndRoute
}