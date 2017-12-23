const twilio = require('twilio')

const sendSMS = (to, body) => {
  // Initialise account credentials
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
  const TWILIO_NUMBER = process.env.TWILIO_NUMBER

  // Create new twilio client
  const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

  return new Promise( (success, fail) => {
    // Send the text message.
    client.messages.create(
      {
        to, // Recipient's number
        from: TWILIO_NUMBER, // Twilio Number
        body // Message to Recipient
      },
      (error, message) => {
        if (error) {
          fail(error)
        } else {
          success({to, body})
        }
      }
    )
  })
}

const sendSMSUsingCopilot = (to, body) => {
  // Initialise account credentials
  const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
  const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
  const TWILIO_MESSAGING_SERVICE_SID = process.env.TWILIO_MESSAGING_SERVICE_SID // Using SID instead of Twilio number

  // Create new twilio client
  const client = new twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

  return new Promise( (success, fail) => {
    // Send the text message.
    client.messages.create(
      {
        to, // Recipient's number
        from: TWILIO_NUMBER, // Twilio Number
        body // Message to Recipient
      },
      (error, message) => {
        if (error) {
          fail(error)
        } else {
          success({to, body})
        }
      }
    )
  })
}

module.exports = {
  sendSMS,
  sendSMSUsingCopilot
}