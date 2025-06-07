import { star } from "../assets/icons"

const reviewCard = ({
    imgURL,
    customerName,
    rating,
    feedback
}) => {
    return (
        <div className="flex flex-col items-center p-10">
            <div className="w-[120px] h-[120px] rounded-full">
                <img src={imgURL} alt="Customer Photo" className="w-full rounded-full"/>
            </div>
            <p className="info-text text-center my-4">{feedback}</p>
            <div className="flex items-center gap-2">
                <img src={star} alt="star" />
                <h1 className="info-text">({rating})</h1>
            </div>
            <h1 className="font-palanquin font-bold text-3xl">{customerName}</h1>
        </div>
    )
}

export default reviewCard