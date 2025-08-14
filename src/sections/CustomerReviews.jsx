import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';
import { motion } from 'framer-motion';

const CustomerReviews = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.section 
      className="max-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex flex-col items-center'>
        <motion.h2 
          className='font-palanquin text-4xl font-bold text-center'
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What Our <span className='text-coral-red'>Customers</span> Say?
        </motion.h2>
        <motion.p 
          className='info-text my-5 text-center lg:max-w-lg'
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Hear genuine stories from our satisfied customers about their exceptional experiences with us.
        </motion.p>
        <motion.div 
          className='flex flex-col lg:flex-row max-w-4xl'
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <ReviewCard imgURL={review.imgURL} feedback={review.feedback} customerName={review.customerName} rating={review.rating}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default CustomerReviews