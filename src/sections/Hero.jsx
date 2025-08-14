import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from "../assets/images";
import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <motion.section 
      id="home" 
      className="flex justify-center items-start gap-10 w-full min-h-screen lg:flex-row flex-col max-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="padding-x py-4 pt-20 mt-20 xl:w-2/5"
        {...fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      > 
        <motion.p 
          className="text-xl text-coral-red font-montserrat mb-3"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Our Summer Collection
        </motion.p>
        <motion.h2 
          className="mt-3 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px] xl:whitespace-nowrap relative z-10 pr-10"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="leading-0 inline-block xl:bg-white lg:bg-white xl:pr-10 xl:py-10">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </motion.h2>
        <motion.p 
          className="text-lg font-montserrat text-slate-gray sm:max-w-sm mt-6 mb-10"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button label={'Shop Now'} iconURL={arrowRight}/>
        </motion.div>

        <motion.div 
          className="flex justify-start items-start gap-10 mt-10 flex-wrap"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {statistics.map((stat, index) => (
            <motion.div 
              key={stat.label}
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        className='relative flex justify-center items-center lg:min-h-screen xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center w-full'
        {...fadeIn}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.img 
          src={bigShoeImg} 
          alt="collection shoe" 
          {...fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.div 
          className="absolute -bottom-10 flex sm:gap-6 gap-4 mx-10"
          {...fadeInUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {shoes.map((shoe, index) => (
            <motion.div 
              key={index} 
              className="rounded-xl shadow-lg border-red-500 border-2 p-4 bg-card bg-cover"
              {...fadeInUp}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src={shoe.thumbnail} 
                alt={`shoe collection ${index + 1}`} 
                width={127} 
                className="hover:scale-x-110 hover:scale-y-110 transition-all duration-400 cursor-pointer"
                onClick={() => setBigShoeImg(shoe.bigShoe)}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Hero