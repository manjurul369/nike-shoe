import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from '../assets/images'
import { motion } from 'framer-motion'

const SuperQuality = () => {
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
      id="about-us" 
      className="max-container flex flex-col lg:flex-row gap-10 lg:justify-center items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-full lg:w-1/2"
        {...fadeInLeft}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className="font-palanquin font-bold text-4xl"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </motion.h1>
        <motion.p 
          className="font-montserrat text-slate-gray text-lg my-5 leading-normal"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
          <br/><br/>
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button label={'View details'} iconURL={arrowRight}/>
        </motion.div>
      </motion.div>
      <motion.div 
        className="flex justify-center items-center"
        {...fadeInRight}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.img 
          src={shoe8} 
          alt="" 
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.section>
  )
}

export default SuperQuality