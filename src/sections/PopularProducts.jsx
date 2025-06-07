import { products } from "../constants"
import  { star } from '../assets/icons'

const PopularProducts = () => {
  return (
    <sections id='#popular-products' className='padding'>
      <section className="max-container">
        <h1 className="font-palanquin font-bold text-4xl">
          Our
          <span className="text-coral-red"> Popular </span>
          Products
        </h1>
        <p className="font-montserrat text-slate-gray my-4 lg:max-w-lg">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((prod) => (
            <div className="flex flex-col">
              <div>
                <img src={prod.imgURL} alt="" className="w-full" />
              </div>
              <div className="flex gap-2 my-3 items-center">
                <img src={star} alt="" />
                <h3 className="font-montserrat text-md text-slate-gray">({prod.rating})</h3>
              </div>
              <h2 className="font-montserrat text-2xl font-semibold">{prod.name}</h2>
              <p className="text-coral-red font-montserrat font-bold mt-2">{prod.price}</p>
            </div>
          ))}
        </div>
      </section>
    </sections>
  )
}

export default PopularProducts