import Contact from '../components/Contact'
import SectionLayout from '../components/SectionLayout'

const ContactPage = () => {
  return (
    <SectionLayout id="contact" title="Contact" highlight="Me">
      <div className="md:col-span-2 w-full">
        <Contact />
      </div>
    </SectionLayout>
  )
}

export default ContactPage