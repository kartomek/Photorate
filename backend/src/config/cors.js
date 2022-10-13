// libs
const cors = require("cors");

const initializeCors = app => {

    app.use(cors({
        methods: [
            "GET", "POST", 
            "PUT", "DELETE"
        ],
        origin: [
            "http://localhost:3000"
        ]
    }));

    return app;
}

module.exports = initializeCors;