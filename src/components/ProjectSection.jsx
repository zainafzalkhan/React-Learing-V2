import './ProjectSection.css'

const ProjectSection = ({ title, description, children }) => {
  return (
    <section className="project-section">
      <header className="project-section__header">
        <h2 className="project-section__title">{title}</h2>
        {description && (
          <p className="project-section__description">{description}</p>
        )}
      </header>
      <div className="project-section__content">{children}</div>
    </section>
  )
}

export default ProjectSection
