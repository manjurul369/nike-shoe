import ServicesCard from '../components/ServicesCard'
import { services } from '../constants'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap flex-row max-sm:flex-col'>
      {services.map((serve) => (
        <ServicesCard imgURL={serve.imgURL} label={serve.label} subtext={serve.subtext} />
      ))}
    </section>
  )
}

export default Services