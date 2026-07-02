import './Page.css'

const ContactPage = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Contact</h1>
        <p className="page__description">
          Get in touch — this section can grow into a form or links later.
        </p>
      </header>

      <div className="page__content">
        <div className="page__placeholder">
          <p>Email: hello@example.com</p>
          <p>GitHub: github.com/yourusername</p>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
