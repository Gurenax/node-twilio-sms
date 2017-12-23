const express = require('express')
const router = express.Router()
const { sendSMS } = require('../twilio/twilioClient')

// POST - Send a SMS message
router.post('/sms', (req, res) => {
  const attributes = req.body

  sendSMS(attributes.recipient, attributes.message)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// POST - Send a SMS message using Copilot Messaging Service
router.post('/smsCopilot', (req, res) => {
  const attributes = req.body

  sendSMS(attributes.recipient, attributes.message)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})


module.exports = router
