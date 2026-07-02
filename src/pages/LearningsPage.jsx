import './Page.css'

const learnings = [
  {
    title: 'useState',
    description: 'Managing local component state for counters, toggles, and form inputs.',
  },
  {
    title: 'Controlled Components',
    description: 'Binding input values to state so React controls what the user sees.',
  },
  {
    title: 'Component Composition',
    description: 'Breaking UI into reusable pieces like ProjectSection and layout wrappers.',
  },
  {
    title: 'Event Handling',
    description: 'Responding to user actions with onClick, onChange, and shared handlers.',
  },
]

const LearningsPage = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Learnings</h1>
        <p className="page__description">
          Notes and concepts picked up while building React mini projects.
        </p>
      </header>

      <div className="page__content">
        {learnings.map((item) => (
          <article key={item.title} className="page__placeholder">
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default LearningsPage
