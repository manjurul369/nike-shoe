import { copyrightSign } from '../assets/icons'
import { footerLogo } from '../assets/images'
import { socialMedia } from '../constants'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className='max-container'>
      <div className='flex flex-col lg:flex-row gap-20'>
        <div>
          <img src={footerLogo} alt="" className='max-w-[150px]' />
          <p className='font-montserrat text-white-400 text-base leading-7 my-4 max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
          <div className='flex gap-5'>
            {socialMedia.map((social) => (
              <div className='w-[50px] h-[50px] bg-white flex justify-center items-center rounded-full cursor-pointer'>
                <img src={social.src} alt={social.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-between mt-10 lg:mt-0 w-full items-start gap-10 flex-wrap'>
          {footerLinks.map((link) => (
            <div className='mb-10'>
              <h1 className='text-white font-montserrat text-2xl font-medium leading-normal mb-6'>{link.title}</h1>
              <ul>
                {link.links.map((val) => (
                  <li>
                    <a href={val.link} className='font-palanquin text-white-400 text-lg leading-normal inline-block mb-3'>{val.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex justify-between flex-row max-sm:flex-col max-sm:items-center'>
        <h2 className='text-white flex'><img src={copyrightSign} alt="" />Copyright. All rights reserved</h2>
        <h2 className='text-white'>Terms & Conditions</h2>
      </div>
    </section>
  )
}

export default Footer