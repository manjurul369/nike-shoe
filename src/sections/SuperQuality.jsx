import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="#about-us" className="max-container flex flex-col lg:flex-row gap-10 lg:justify-center items-center">
      <div className="w-full lg:w-1/2">
        <h1 className="font-palanquin font-bold text-4xl">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h1>
        <p className="font-montserrat text-slate-gray text-lg my-5 leading-normal">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        <br/><br/>
        Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label={'View details'} iconURL={arrowRight}/>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="" />
      </div>
    </section>
  )
}

export default SuperQuality