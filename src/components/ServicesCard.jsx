const ServicesCard = ({
    imgURL,
    label,
    subtext
}) => {
    return (
        <div className="flex-1 w-full sm:w-[350px] sm:min-w-[350px] shadow-3xl gap-9 py-16 px-10 m-4 rounded-2xl">
            <div className="w-11 h-11 rounded-full bg-coral-red flex justify-center items-center">
                <img src={imgURL} alt="Icon Image" />
            </div>
            <h2 className="font-palanquin text-3xl font-bold my-2">{label}</h2>
            <p className="font-montserrat text-slate-gray">{subtext}</p>
        </div>
    )
}

export default ServicesCard