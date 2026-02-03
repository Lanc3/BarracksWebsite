import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    partySize: '',
    eventType: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('/.redwood/functions/sendEmail', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Booking request sent! We\'ll call you within 24-48 hours to confirm your booking.',
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          partySize: '',
          eventType: '',
          message: '',
        })
      } else {
        const data = await response.json()
        setStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again or call us directly.',
        })
      }
    } catch (error) {
      console.error('Error sending booking request:', error)
      setStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClassName = `
    w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg
    text-white placeholder-gray-400
    focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
    transition duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `

  const labelClassName = 'block text-sm font-medium text-gray-300 mb-2'

  // Get tomorrow's date as minimum for date picker
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split('T')[0]

  return (
    <div className="w-full">
      {/* Disclaimer */}
      <div className="mb-6 p-4 bg-purple-900/30 border border-purple-500/30 rounded-lg">
        <p className="text-sm text-purple-200">
          <span className="font-semibold">Please Note:</span> This is a preliminary booking request.
          A member of our team will contact you by phone to confirm details before your booking is finalized.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className={labelClassName}>
            Name <span className="text-purple-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Your full name"
            className={inputClassName}
          />
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className={labelClassName}>
              Email <span className="text-purple-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="your@email.com"
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClassName}>
              Phone Number <span className="text-purple-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              placeholder="083 123 4567"
              className={inputClassName}
            />
          </div>
        </div>

        {/* Date and Party Size Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className={labelClassName}>
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={minDate}
              disabled={isSubmitting}
              className={inputClassName}
            />
          </div>
          <div>
            <label htmlFor="partySize" className={labelClassName}>
              Party Size
            </label>
            <input
              type="number"
              id="partySize"
              name="partySize"
              value={formData.partySize}
              onChange={handleChange}
              min="1"
              max="500"
              disabled={isSubmitting}
              placeholder="Number of guests"
              className={inputClassName}
            />
          </div>
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className={labelClassName}>
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            disabled={isSubmitting}
            className={inputClassName}
          >
            <option value="">Select an event type</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="21st Birthday">21st Birthday</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Private Party">Private Party</option>
            <option value="Hen/Stag Party">Hen/Stag Party</option>
            <option value="Graduation">Graduation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClassName}>
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows={4}
            placeholder="Tell us about your event, any special requirements, or questions you have..."
            className={`${inputClassName} resize-none`}
          />
        </div>

        {/* Status Message */}
        {status.message && (
          <div
            className={`p-4 rounded-lg ${
              status.type === 'success'
                ? 'bg-green-900/30 border border-green-500/30 text-green-200'
                : 'bg-red-900/30 border border-red-500/30 text-red-200'
            }`}
          >
            {status.type === 'success' ? (
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{status.message}</span>
              </div>
            ) : (
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>{status.message}</span>
              </div>
            )}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`
            w-full py-3 px-6 rounded-lg font-medium text-white
            bg-gradient-to-r from-purple-600 to-purple-500
            hover:from-purple-500 hover:to-purple-400
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800
            transition duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center
          `}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Request...
            </>
          ) : (
            'Submit Booking Request'
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
