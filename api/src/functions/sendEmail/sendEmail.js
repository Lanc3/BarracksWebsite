import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  try {
    const { name, email, phone, date, partySize, eventType, message } = JSON.parse(event.body)

    // Validate required fields
    if (!name || !email || !phone) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ message: 'Name, email, and phone are required' }),
      }
    }

    // Format the date nicely if provided
    const formattedDate = date ? new Date(date).toLocaleDateString('en-IE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }) : 'Not specified'

    // Create email content
    const emailSubject = `New Booking Request - ${name}${date ? ` - ${formattedDate}` : ''}`

    const emailText = `
PRELIMINARY BOOKING REQUEST
===========================

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Booking Details:
- Preferred Date: ${formattedDate}
- Party Size: ${partySize || 'Not specified'} people
- Event Type: ${eventType || 'Not specified'}

Additional Details:
${message || 'None provided'}

---
This is a preliminary request. Please call the customer to confirm booking details.
    `.trim()

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #7c3aed, #a855f7); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
    .section { margin-bottom: 20px; }
    .section-title { font-weight: bold; color: #7c3aed; margin-bottom: 8px; border-bottom: 2px solid #7c3aed; padding-bottom: 4px; }
    .field { margin: 8px 0; }
    .label { font-weight: 600; color: #4b5563; }
    .value { color: #111827; }
    .footer { background: #1f2937; color: #9ca3af; padding: 15px 20px; border-radius: 0 0 8px 8px; font-size: 14px; }
    .message-box { background: white; padding: 15px; border-radius: 6px; border-left: 4px solid #7c3aed; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 24px;">🎉 New Booking Request</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">The Barracks - Preliminary Booking</p>
    </div>
    <div class="content">
      <div class="section">
        <div class="section-title">Contact Information</div>
        <div class="field"><span class="label">Name:</span> <span class="value">${name}</span></div>
        <div class="field"><span class="label">Email:</span> <span class="value"><a href="mailto:${email}">${email}</a></span></div>
        <div class="field"><span class="label">Phone:</span> <span class="value"><a href="tel:${phone}">${phone}</a></span></div>
      </div>
      <div class="section">
        <div class="section-title">Booking Details</div>
        <div class="field"><span class="label">Preferred Date:</span> <span class="value">${formattedDate}</span></div>
        <div class="field"><span class="label">Party Size:</span> <span class="value">${partySize || 'Not specified'} people</span></div>
        <div class="field"><span class="label">Event Type:</span> <span class="value">${eventType || 'Not specified'}</span></div>
      </div>
      ${message ? `
      <div class="section">
        <div class="section-title">Additional Details</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
      ` : ''}
    </div>
    <div class="footer">
      <strong>⚠️ Action Required:</strong> This is a preliminary request. Please call the customer to confirm booking details.
    </div>
  </div>
</body>
</html>
    `.trim()

    const msg = {
      to: 'info@thebarracks.ie',
      from: 'info@thebarracks.ie', // Must be verified in SendGrid
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      replyTo: email, // Allow replying directly to the customer
    }

    await sgMail.send(msg)

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: 'Booking request sent successfully' }),
    }
  } catch (error) {
    console.error('SendGrid Error:', error)

    // Provide more specific error messages
    let errorMessage = 'Error sending booking request'
    if (error.response) {
      console.error('SendGrid Response Error:', error.response.body)
      if (error.code === 401) {
        errorMessage = 'Email service configuration error'
      }
    }

    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ message: errorMessage }),
    }
  }
}
