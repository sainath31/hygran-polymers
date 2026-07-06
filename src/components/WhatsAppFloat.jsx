// Replace with Granx Industries WhatsApp number (digits only, with country code)
const WHATSAPP_NUMBER = '919949275566'
const WHATSAPP_MESSAGE = 'Hello, I would like to enquire about your PVC granules.'

function WhatsAppFloat() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.48 15.06L2 22l5.08-1.52A9.9 9.9 0 1 0 12.04 2zm5.83 14.13c-.24.68-1.4 1.3-1.94 1.35-.52.05-1.17.24-3.94-.82-3.32-1.31-5.42-4.7-5.58-4.92-.16-.22-1.33-1.77-1.33-3.38 0-1.6.84-2.39 1.14-2.72.3-.33.65-.41.87-.41l.62.01c.2.01.47-.08.73.56.27.65.92 2.25 1 2.41.08.16.14.36.03.58-.11.22-.17.35-.33.54-.16.19-.35.43-.5.58-.16.16-.33.34-.14.66.19.33.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.65 1.63.33.16.52.14.71-.08.19-.22.82-.95 1.04-1.28.22-.33.43-.27.73-.16.3.11 1.9.9 2.23 1.06.33.16.54.24.62.38.08.14.08.79-.16 1.47z" />
      </svg>
      <span className="wa-tooltip">Chat with us</span>
    </a>
  )
}

export default WhatsAppFloat
