const app = require("./app")
const pool = require("./config/db")

pool.connect()
    .then(() =>{
        console.log("POSTGRESS CONNECTED");
        app.listen(process.env.PORT, () => {
            console.log(`APP RUNNING ON SERVER ${process.env.PORT}`)
        });
    })
    .catch((err) => console.error("DB CONNECTION ERROR", err))