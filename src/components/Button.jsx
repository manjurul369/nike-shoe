import { motion } from 'framer-motion'

const Button = ({
    label,
    iconURL
}) => {
  return (
    <motion.button 
      className='flex px-8 py-4 bg-coral-red justify-center item-center gap-2 rounded-full border-coral-red border-2 hover:bg-white transition-all duration-400 font-montserrat text-white font-semibold hover:text-slate-gray'
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
        {label}
        <motion.img 
          src={ iconURL } 
          alt="Left Arrow" 
          width={20} 
          height={20}
          whileHover={{ x: 3 }}
          transition={{ duration: 0.3 }}
        />
    </motion.button>
  )
}

export default Button