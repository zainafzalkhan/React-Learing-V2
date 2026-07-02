import CounterApp from '../components/CounterApp'
import ProjectSection from '../components/ProjectSection'
import ToggleButton from '../components/ToggleButton'
import Accordion from '../components/Accordion'
import TemperatureConverter from '../components/TemperatureConverter'
import UseRefExample from '../components/UseRefExample'
import './Page.css'

const ProjectsPage = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Projects</h1>
        <p className="page__description">
          Small projects to understand React fundamentals — starting with state.
        </p>
      </header>

      <div className="page__content">
        <ProjectSection
          title="Counter"
          description="Practice useState with increment, decrement, and reset."
        >
          <CounterApp />
        </ProjectSection>

        <ProjectSection
          title="Toggle Button"
          description="Practice useState with toggle button."
        >
          <ToggleButton />
        </ProjectSection>

        <ProjectSection
          title="Accordion"
          description="Practice useState with accordion."
        >
          <Accordion />
        </ProjectSection>

        <ProjectSection
          title="Temperature Converter"
          description="Practice useState with temperature converter."
        >
          <TemperatureConverter />
        </ProjectSection>
        <ProjectSection
          title="Use Ref Example"
          description="Practice useRef with input focus."
        >
          <UseRefExample />
        </ProjectSection>
      </div>
    </div>
  )
}

export default ProjectsPage
