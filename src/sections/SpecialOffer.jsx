import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className="max-container">
      <div className='flex flex-col-reverse lg:flex-row'>
        <div className='flex justify-center items-center py-10 w-full lg:w-1/2'>
          <img src={offer} alt="Offer" className='lg:max-w-[600px]' />
        </div>
        <div className='flex flex-col justify-center'>
          <h2 className='font-palanquin font-bold text-4xl'>
            <span className='text-coral-red'>Special</span> Offer
          </h2>
          <p className='info-text my-4 lg:max-w-lg'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.<br/><br/>
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional
          </p>
          <div className='flex gap-5'>
            <Button label={'Shop Now'} iconURL={arrowRight}/>
            <button className='px-8 py-4 rounded-full border-slate-gray border-2 font-montserrat text-slate-gray font-semibold'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer