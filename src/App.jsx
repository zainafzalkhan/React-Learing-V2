import './App.css'
import CounterApp from './components/CounterApp'
import ProjectSection from './components/ProjectSection'
import ToggleButton from './components/ToggleButton'
import Accordion from './components/Accordion'
import TemperatureConverter from './components/TemperatureConverter'
function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">React Basics Practice</h1>
        <p className="app__description">
          Small projects to understand React fundamentals — starting with state.
        </p>
      </header>

      <main className="app__projects">
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

        {/* Add more ProjectSection blocks here as you build new mini projects */}
      </main>
    </div>
  )
}

export default App
