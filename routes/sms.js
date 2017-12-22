const express = require('express')
const router = express.Router()
const twilio = require('twilio')


// POST - Send a SMS message
router.post('/sms', (req, res) => {
  const attributes = req.body
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
  const TWILIO_NUMBER = process.env.TWILIO_NUMBER

  // console.log('TWILIO_ACCOUNT_SID', TWILIO_ACCOUNT_SID)
  // console.log('TWILIO_AUTH_TOKEN', TWILIO_AUTH_TOKEN)
  // console.log('TWILIO_NUMBER', TWILIO_NUMBER)

  // Find your account sid and auth token in your Twilio account Console.
  let client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
  
  // Send the text message.
  client.messages.create({
    to: attributes.recipient,
    from: TWILIO_NUMBER, // twilio number
    body: attributes.message
  });

  res.status(201).json(attributes)

  // Beer.create(attributes)
  // .then(beer => {
  //   res.status(201).json(beer)
  // })
  // .catch(error => {
  //   res.status(400).json({ error: error })
  // })
})

module.exports = router