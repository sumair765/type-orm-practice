import express from "express"
import { Client } from "../entities/Client"
const router = express.Router()


router.post('/api/Client', async (req, res)=> {
    const {
        firstName,
        middleName,
        lastName,
        email,
        cardNumber,
        balance
    } = req.body
  const client = Client.create({
    first_name: firstName,
    last_name: lastName,
    middle_name: middleName,
    email: email,
    card_number: cardNumber,
    balance: balance
  })

  await client.save();

 return res.json(client)
});


export {
    router as createClientRouter
}