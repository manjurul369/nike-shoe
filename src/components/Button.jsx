const Button = ({
    label,
    iconURL
}) => {
  return (
    <button className='flex px-8 py-4 bg-coral-red justify-center item-center gap-2 rounded-full border-coral-red border-2 hover:bg-white transition-all duration-400 font-montserrat text-white font-semibold hover:text-slate-gray'>
        {label}
        <img src={ iconURL } alt="Left Arrow" width={20} height={20}/>
    </button>
  )
}

export default Button