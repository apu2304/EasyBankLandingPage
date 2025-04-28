

const Section1 = () => {
  return (
    <div className="bg-[var(--seasalt)] bg-cover bg-no-repeat grid
    grid-cols-1  md:grid-cols-2 ">
      <div className=" row-start-2 row-end-3 md:row-start-1 md:row-end-2
      flex flex-col justify-center items-center md:items-start
      gap-4 px-8 md:px-16 py-9 md:py-0 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl line-clamp-2 
        text-[var(--space-cadet)]"> Next generation digital banking</h1>
        <p  className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg"
        >Take your financial life online. Your Easybank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <button className="bg-linear-to-l to-[var(--emerald)] hover:opacity-70 transition-all duration-300
      from-[var(--verdigris)] text-white px-4 py-2 rounded-full ">Request Invite</button>
      </div>
      <div className="bg-[url('assets/images/bg-intro-mobile.svg')] 
      md:bg-[url('assets/images/bg-intro-desktop.svg')] 
      bg-cover bg-no-repeat flex justify-center items-center">
        <img src="assets/images/image-mockups.png" alt="" className="
        w-[17rem] md:w-[35rem]"/>
      </div>
    </div>
  )
}

export default Section1
