import SectionLayout from '../components/SectionLayout'
import AboutTimeline from '../components/AboutTimeline'

const About = () => {
  return (
    <SectionLayout id="about" title="About" highlight="Me">
      <AboutTimeline />
    </SectionLayout>
  )
}

export default About