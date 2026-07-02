import './Page.css'

const caseStudies = [
  {
    title: 'Temperature Converter',
    summary: 'Built a bidirectional converter using a single onChange handler instead of circular useEffects.',
  },
  {
    title: 'Accordion',
    summary: 'Practiced expanding and collapsing sections with independent open/close state.',
  },
]

const CaseStudiesPage = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Case Studies</h1>
        <p className="page__description">
          Deeper write-ups on how each project was approached and what was learned.
        </p>
      </header>

      <div className="page__content">
        {caseStudies.map((study) => (
          <article key={study.title} className="page__placeholder">
            <strong>{study.title}</strong>
            <p>{study.summary}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CaseStudiesPage
