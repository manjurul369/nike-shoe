import { motion } from 'framer-motion';

const Subscribe = () => {
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
      id="contact-us"
      className='max-container flex flex-col lg:flex-row gap-10 justify-center items-center'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className="font-palanquin font-bold text-4xl lg:w-[50%]"
        {...fadeInLeft}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </motion.h1>
      <motion.div 
        className="w-full lg:w-[40%] flex items-center h-[70px] border-[1px] border-slate-gray rounded-full px-2"
        {...fadeInRight}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input type="text" className="w-full h-full rounded-full px-4 outline-none focus:outline-none" placeholder="subscribe@nike.com"/>
        <motion.button 
          type='submit' 
          className="px-7 py-4 font-montserrat text-lg leading-none rounded-full w-[200px] h-[80%] bg-coral-red text-white"
          whileHover={{ scale: 1.05, backgroundColor: "#e55a4f" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          Sign up
        </motion.button>
      </motion.div>
    </motion.section>
  )
}

export default Subscribe