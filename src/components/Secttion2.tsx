

const Secttion2 = () => {
  return (
    <div className="p-8 md:p-16 bg-[var(--antiflash-white)] ">
      <div className="flex flex-col gap-4 mb-8 justify-center items-center
       md:items-start text-center md:text-left">
      <h1 className="text-3xl md:text-4xl text-[var(--space-cadet)]">Why choose Easybank?</h1>
      <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg">
        We leverage Open Banking to turn your bank account into your financial hub. Control 
      your finances like never before.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 ">
        <div className="bg-[var(--lightblue)] p-4 rounded-lg flex flex-col gap-4 mb-8 justify-center items-center
       md:items-start text-center md:text-left">
          <img src="assets/images/icon-online.svg" alt="" />
          <h2 className="text-[var(--space-cadet)] text-lg md:text-xl">Online Banking</h2>
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg" 
          >Our modern web and mobile applications allow you to keep track of your finances 
          wherever you are in the world.</p>
        </div>
        <div className="bg-[var(--lightblue)] p-4 rounded-lg flex flex-col gap-4 mb-8 justify-center items-center
       md:items-start text-center md:text-left">
        <img src="assets/images/icon-budgeting.svg" alt="" />
          <h2 className="text-[var(--space-cadet)] text-lg md:text-xl">Simple Budgeting</h2>
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg" >See exactly where your money goes each month. Receive notifications when you’re 
          close to hitting your limits.</p>
        </div>
        <div className="bg-[var(--lightblue)] p-4 rounded-lg flex flex-col gap-4 mb-8 justify-center items-center
       md:items-start text-center md:text-left">
        <img src="assets/images/icon-onboarding.svg" alt="" />
          <h2 className="text-[var(--space-cadet)] text-lg md:text-xl">Fast Onboarding</h2>
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg" >We don’t do branches. Open your account in minutes online and start taking control 
          of your finances right away.</p>
        </div>
        <div className="bg-[var(--lightblue)] p-4 rounded-lg flex flex-col gap-4 mb-8 justify-center items-center
       md:items-start text-center md:text-left">
        <img src="assets/images/icon-api.svg" alt="" />
          <h2  className="text-[var(--space-cadet)] text-lg md:text-xl">Open API</h2>
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg" >Manage your savings, investments, pension, and much more from one account. Tracking 
          your money has never been easier.</p>
        </div>
      </div>
    </div>
  )
}

export default Secttion2
