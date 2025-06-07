const Subscribe = () => {
  return (
    <section className='max-container flex flex-col lg:flex-row gap-10 justify-center items-center'>
      <h1 className="font-palanquin font-bold text-4xl lg:w-[50%]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className="w-full lg:w-[40%] flex items-center h-[70px] border-[1px] border-slate-gray rounded-full px-2">
        <input type="text" className="w-full h-full rounded-full px-4 outline-none focus:outline-none" placeholder="subscribe@nike.com"/>
        <button type='submit' className="px-7 py-4 font-montserrat text-lg leading-none rounded-full w-[200px] h-[80%]
        bg-coral-red text-white">Sign up</button>
      </div>
    </section>
  )
}

export default Subscribe