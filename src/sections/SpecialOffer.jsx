import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import { motion } from 'framer-motion'

const SpecialOffer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.section 
      className="max-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex flex-col-reverse lg:flex-row'>
        <motion.div 
          className='flex justify-center items-center py-10 w-full lg:w-1/2'
          {...fadeInLeft}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img 
            src={offer} 
            alt="Offer" 
            className='lg:max-w-[600px]' 
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div 
          className='flex flex-col justify-center'
          {...fadeInRight}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.h2 
            className='font-palanquin font-bold text-4xl'
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className='text-coral-red'>Special</span> Offer
          </motion.h2>
          <motion.p 
            className='info-text my-4 lg:max-w-lg'
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.<br/><br/>
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional
          </motion.p>
          <motion.div 
            className='flex gap-5'
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button label={'Shop Now'} iconURL={arrowRight}/>
            </motion.div>
            <motion.button 
              className='px-8 py-4 rounded-full border-slate-gray border-2 font-montserrat text-slate-gray font-semibold'
              whileHover={{ scale: 1.05, borderColor: "#ff6452" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Learn more
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default SpecialOffer