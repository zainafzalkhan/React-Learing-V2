import './Page.css'

const proofs = [
  {
    title: 'Counter App',
    detail: 'Increment, decrement, and reset with useState.',
  },
  {
    title: 'Toggle Button',
    detail: 'Boolean state toggled on each click.',
  },
  {
    title: 'Accordion',
    detail: 'Multiple panels with independent expand/collapse state.',
  },
  {
    title: 'Temperature Converter',
    detail: 'Two-way Celsius ↔ Fahrenheit conversion in real time.',
  },
]

const PowPage = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">POW</h1>
        <p className="page__description">
          Proof of work — a quick snapshot of what has been built so far.
        </p>
      </header>

      <div className="page__content">
        {proofs.map((item) => (
          <article key={item.title} className="page__placeholder">
            <strong>{item.title}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default PowPage
