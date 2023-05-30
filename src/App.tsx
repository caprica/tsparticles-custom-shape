import { useCallback } from "react"
import { Container, Engine } from 'tsparticles-engine'
import { loadFull } from "tsparticles"
import Particles from "react-particles"
import { bubbleTextShape } from "./particles/bubble-text-shape"
import { particlesConfig } from "./particles/particles-config"
import "./App.css"

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
    engine.addShape("bubble-text", bubbleTextShape)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  )

  return (
    <div>
      <h1>tsParticles Custom Shape Opacity</h1>
      <main>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
      </main>
    </div>
  )
}

export default App
