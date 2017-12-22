const express = require('express')
const router = express.Router()
const twilio = require('twilio')

// POST - Send a SMS message
router.post('/sms', (req, res) => {
  const attributes = req.body
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
  const TWILIO_NUMBER = process.env.TWILIO_NUMBER

  const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

  // Send the text message.
  client.messages.create({
    to: attributes.recipient,
    from: TWILIO_NUMBER,
    body: attributes.message
  }, (error, message) => {
    if(error) {
      console.log(error)
      res.status(400).json({ error })
    }
    else {
      res.status(201).json({ attributes })
    }
  })
})

module.exports = router
