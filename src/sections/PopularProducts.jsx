import { products } from "../constants"
import  { star } from '../assets/icons'
import { motion } from 'framer-motion'

const PopularProducts = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.section 
      id='products' 
      className='padding'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <section className="max-container">
        <motion.h1 
          className="font-palanquin font-bold text-4xl"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </motion.h1>
        <motion.p 
          className="font-montserrat text-slate-gray my-4 lg:max-w-lg"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </motion.p>
        <motion.div 
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((prod, index) => (
            <motion.div 
              key={index}
              className="flex flex-col"
              variants={fadeInUp}
              whileHover={{ scale: 1.01, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <img src={prod.imgURL} alt="" className="w-full" />
              </motion.div>
              <div className="flex gap-2 my-3 items-center">
                <img src={star} alt="" />
                <h3 className="font-montserrat text-md text-slate-gray">({prod.rating})</h3>
              </div>
              <h2 className="font-montserrat text-2xl font-semibold">{prod.name}</h2>
              <p className="text-coral-red font-montserrat font-bold mt-2">{prod.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.section>
  )
}

export default PopularProducts