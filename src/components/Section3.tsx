

const Section3 = () => {
  return (
    <div className="bg-[var(--seasalt)] p-8">
      <h1 className="text-3xl md:text-4xl text-[var(--space-cadet)] py-6">Latest Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md">
          <img src="assets/images/image-currency.jpg" alt="Currency" 
          className="w-full h-32 md:h-56 object-cover rounded-t-lg" />
          <div className="p-4">
          <p className="text-[var(--cadet-gray)] text-sm  max-w-lg">By Claire Robinson</p>
          <h2 className="text-xl font-medium my-2 hover:text-[var(--emerald)] cursor-pointer
          transition-all duration-150">Receive money in any currency with no fees</h2>
          <p className="text-[var(--delft-blue)] text-sm max-w-lg">
          The world is getting smaller and we’re becoming more mobile. So why should you be 
          forced to only receive money in a single …
          </p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src="assets/images/image-restaurant.jpg" alt="Restaurant" 
          className="w-full h-32 md:h-56 object-cover rounded-t-lg" />
           <div className="p-4">
           <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg">By Wilson Hutton</p>
          <h2 className="text-xl font-medium my-2 hover:text-[var(--emerald)] cursor-pointer
          transition-all duration-150">Treat yourself without worrying about money</h2>
          <p className="text-[var(--delft-blue)] text-sm max-w-lg">Our simple budgeting feature allows you to separate out your spending and set 
          realistic limits each month. That means you …</p>
           </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src="assets/images/image-plane.jpg" alt="Plane" 
          className="w-full h-32 md:h-56 object-cover rounded-t-lg" />
          <div className="p-4">
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg">By Wilson Hutton</p>
          <h2 className="text-xl font-medium my-2 hover:text-[var(--emerald)] cursor-pointer
          transition-all duration-150">Take your Easybank card wherever you go</h2>
          <p className="text-[var(--delft-blue)] text-sm max-w-lg">We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
          while you’re abroad. We’ll even show you …</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md">
          <img src="assets/images/image-confetti.jpg" alt="Confetti" 
          className="w-full h-32 md:h-56 object-cover rounded-t-lg" />
          <div className="p-4">
          <p className="text-[var(--cadet-gray)] text-sm md:text-md max-w-lg">By Claire Robinson</p>
          <h2 className="text-xl font-medium my-2 hover:text-[var(--emerald)] cursor-pointer
          transition-all duration-150">Our invite-only Beta accounts are now live!</h2>
          <p className="text-[var(--delft-blue)] text-sm max-w-lg">After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
          It’s easy to request an invite through the site ...</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Section3
