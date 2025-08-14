import ServicesCard from '../components/ServicesCard'
import { services } from '../constants'
import { motion } from 'framer-motion'

const Services = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.section 
      className='max-container flex flex-wrap flex-row max-sm:flex-col'
      variants={containerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
    >
      {services.map((serve, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <ServicesCard imgURL={serve.imgURL} label={serve.label} subtext={serve.subtext} />
        </motion.div>
      ))}
    </motion.section>
  )
}

export default Services