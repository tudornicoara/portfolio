import { Background } from './components/Background/Background'
import { Nav } from './components/Nav/Nav'
import { Avatar } from './components/Avatar/Avatar'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Experience } from './components/Experience/Experience'
import { Education } from './components/Education/Education'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Avatar />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
