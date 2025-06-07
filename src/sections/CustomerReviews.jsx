import ReviewCard from '../components/ReviewCard';
import { reviews } from '../constants';

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className='flex flex-col items-center'>
        <h2 className='font-palanquin text-4xl font-bold text-center'>What Our <span className='text-coral-red'>Customers</span> Say?</h2>
        <p className='info-text my-5 text-center lg:max-w-lg'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className='flex flex-col lg:flex-row max-w-4xl'>
          {reviews.map((review) => (
            <div>
              <ReviewCard imgURL={review.imgURL} feedback={review.feedback} customerName={review.customerName} rating={review.rating}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews