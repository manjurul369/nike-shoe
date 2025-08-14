import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'
import { motion } from 'framer-motion'

const Footer = () => {
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
      className='max-container'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className='flex flex-col lg:flex-row gap-20'>
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={footerLogo} alt="" className='max-w-[150px]' />
          <p className='font-montserrat text-white-400 text-base leading-7 my-4 max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
          <motion.div 
            className='flex gap-5'
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {socialMedia.map((social, index) => (
              <motion.div 
                key={index}
                className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full cursor-pointer'
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <img src={social.src} alt={social.alt} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div 
          className='flex justify-between mt-10 lg:mt-0 w-full items-start gap-10 flex-wrap'
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          {footerLinks.map((link, index) => (
            <motion.div 
              key={index}
              className='mb-10'
              variants={fadeInUp}
            >
              <h1 className='text-white font-montserrat text-2xl font-medium leading-normal mb-6'>{link.title}</h1>
              <ul>
                {link.links.map((val, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * linkIndex }}
                  >
                    <motion.a 
                      href={val.link} 
                      className='font-palanquin text-white-400 text-lg leading-normal inline-block mb-3'
                      whileHover={{ color: "#ff6452", x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {val.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div 
        className='mt-10 flex justify-between flex-row max-sm:flex-col max-sm:items-center'
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className='text-white flex'><img src={copyrightSign} alt="" />Copyright. All rights reserved</h2>
        <h2 className='text-white'>Terms & Conditions</h2>
      </motion.div>
    </motion.section>
  )
}

export default Footer