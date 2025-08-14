import { hamburger } from "../assets/icons"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import { motion } from 'framer-motion'
import { useState } from 'react'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInDown = {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    // Remove the # from the href to get the element id
    const elementId = targetId.replace('#', '');
    const element = document.getElementById(elementId);
    
    if (element) {
      // Calculate offset for fixed header (approximately 100px)
      const headerOffset = 100;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      className="absolute w-full z-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <nav className="flex justify-between items-center max-container padding-x xl:px-4 py-8">
            <motion.a 
              href="/"
              {...fadeInDown}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <img src={ headerLogo} alt="Logo" width={129} height={29} className="m-0 w-[129px] h-[29px]" />
            </motion.a>
            <motion.ul 
              className="flex-1 flex justify-center items-center gap-16 max-lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                {navLinks.map((item, index) => (
                    <motion.li 
                      key={item.label}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    >
                    <motion.a
                        href={item.href}
                        className='font-montserrat leading-normal text-lg text-slate-gray'
                        whileHover={{ color: "#ff6452", y: -2 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                    >
                        {item.label}
                    </motion.a>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.div 
              className="hidden max-lg:block cursor-pointer"
              {...fadeInDown}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
            >
                <img src={hamburger} alt='Hamburger' width={25} height={25}/>
            </motion.div>

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[999999999999999] lg:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate={isMenuOpen ? "visible" : "hidden"}
            >
              <div className="flex flex-col p-8 pt-20">
                <motion.button
                  className="self-end mb-8 text-2xl font-bold text-slate-gray"
                  onClick={toggleMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
                
                <motion.ul 
                  className="flex flex-col gap-8"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                  initial="hidden"
                  animate={isMenuOpen ? "visible" : "hidden"}
                >
                  {navLinks.map((item, index) => (
                    <motion.li 
                      key={item.label}
                      variants={menuItemVariants}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <motion.a
                        href={item.href}
                        className='font-montserrat leading-normal text-xl text-slate-gray block py-2'
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        whileHover={{ 
                          color: "#ff6452", 
                          x: 10,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {item.label}
                      </motion.a>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMenuOpen ? 1 : 0 }}
              style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
              onClick={toggleMenu}
              transition={{ duration: 0.3 }}
            />
        </nav>
    </motion.header>
  )
}

export default Nav