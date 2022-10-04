import { createConnection } from "typeorm"
import express, { application } from "express"
import { Banker } from "./entities/Banker"
import { Client } from "./entities/Client"
import { Transaction } from "./entities/Transaction"
import { createClientRouter } from "./routes/create_client"
import { createBankerRouter } from "./routes/create_banker"


const app = express()
 

 const main = async () => {

    try {
        
    const connection = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "bold",
        database: "typeorm",
        entities: [Client, Banker, Transaction],
        synchronize: true

    })

    console.log("connected to postgres")

    app.use(express.json())
    app.use(createClientRouter)
    app.use(createBankerRouter)

    app.listen(8080, () => {
        console.log("Now running on port 8080")
    })
    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to the database")
    }


 }

 main()