import Button from "../components/Button";
import { arrowRight } from '../assets/icons';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from "../assets/images";

const Hero = () => {
  return (
    <section id="#home" className="flex justify-center items-start gap-10 w-full min-h-screen lg:flex-row flex-col max-container">
      <div id='#home' className="padding-x py-4 pt-20 mt-20 xl:w-2/5"> 
        <p className="text-xl text-coral-red font-montserrat mb-3">Our Summer Collection</p>
        <h2 className="mt-3 text-8xl font-palanquin font-bold max-sm:text-[72px] max-sm:leading-[82px] xl:whitespace-nowrap relative z-10 pr-10">
          <span className="leading-0 inline-block xl:bg-white lg:bg-white xl:pr-10 xl:py-10">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </h2>
        <p className="text-lg font-montserrat text-slate-gray sm:max-w-sm mt-6 mb-10">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label={'Shop Now'} iconURL={arrowRight}/>

        <div className="flex justify-start items-start gap-10 mt-10 flex-wrap">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex justify-center items-center lg:min-h-screen xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center w-full'>
        <img src={bigShoe1} alt="" />
        <div className="absolute -bottom-10 flex sm:gap-6 gap-4 mx-10">
          {shoes.map((shoe) => (
            <div className="rounded-xl shadow-lg border-red-500 border-2 p-4 bg-card bg-cover">
              <img src={shoe.thumbnail} alt="" width={127} className="hover:scale-x-110 hover:scale-y-110 transition-all duration-400 cursor-pointer"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero