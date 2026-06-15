import { Section } from '../ui/Section'
import { profile } from '../../data/profile'
import './About.css'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <p className="about-bio">{profile.bio}</p>
        <aside className="about-card mono">
          <div>
            <span className="gradient-text">const</span> role ={' '}
            <span className="str">"Fullstack Developer"</span>;
          </div>
          <div>
            <span className="gradient-text">const</span> focus = [
            <span className="str">".NET"</span>, <span className="str">"React"</span>,{' '}
            <span className="str">"Angular"</span>];
          </div>
          <div>
            <span className="gradient-text">const</span> location ={' '}
            <span className="str">"Romania"</span>;
          </div>
          <div>
            <span className="gradient-text">const</span> openToWork ={' '}
            <span className="bool">true</span>;
          </div>
        </aside>
      </div>
    </Section>
  )
}
