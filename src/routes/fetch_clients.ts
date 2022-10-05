import express from "express";
import { Client } from "../entities/Client"
import { dataSource } from "../index"

const router = express.Router();


router.get('/api/clients ', async(req, res) => {
    dataSource.createQueryBuilder()
    .select("client")
    .addSelect('client.balance')
    .addSelect("SUM(transaction", "sum")
    .from(Client, 'client')
    .where('client.id = :clientId', {clientId: 3})
    .getOne()



})

export { router as fetchClientRouter } 
