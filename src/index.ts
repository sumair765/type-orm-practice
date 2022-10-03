import { createConnection } from "typeorm"
import { Banker } from "./entities/Banker"
import { Client } from "./entities/Client"
import { Transaction } from "./entities/Transaction"

 

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
    } catch (error) {
        console.log(error)
        throw new Error("Unable to connect to the database")
    }


 }

 main()