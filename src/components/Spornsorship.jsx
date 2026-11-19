const Spornsorship = () => {
    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',

        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

  return (
      <div className="container p-5 pt-25">
          <h1 className="text-border-dark dark:text-gold-dark text-lg">SPONSORSHIP STRUCTURE</h1>
          <p className="text-headings-dark font-bold text-5xl">The approved Spotlight Circle sponsorship categories are</p>

          <div className="flex flex-wrap gap-10 pt-5 ">
              <div className="duration-300 ease-in-out card hover:scale-105 transition border-2 bg-[#cd7f32] p-5 rounded-2xl space-y-2">
                  <h1 className="text-bg-dark text-xl font-bold tracking-wider">BRONZE</h1>
                  <h1 className="text-bg-dark text-3xl font-bold">{formatter.format(200000)}</h1>
                  {/* <button type="button" onClick={() => openLink("https://wa.me/2348122926228")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full text-bg bg-bg-dark">Reach out</button> */}
              </div>
              <div className="duration-300 ease-in-out card hover:scale-105 transition border-2 bg-gray-300 border-[#c7c5c1] p-5 rounded-2xl space-y-2">
                  <h1 className="text-bg-dark text-xl font-bold tracking-wider">SILVER</h1>
                  <h1 className="text-bg-dark text-3xl font-bold">{formatter.format(350000)}</h1>
                  {/* <button type="button" onClick={() => openLink("https://wa.me/2348122926228")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full text-bg bg-bg-dark">Reach out</button> */}
              </div>
              <div className="duration-300 ease-in-out card hover:scale-105 transition border  bg-gold p-5 rounded-2xl space-y-2">
                  <h1 className="text-bg-dark text-xl font-bold tracking-wider">GOLD</h1>
                  <h1 className="text-bg-dark text-3xl font-bold">{formatter.format(500000)}</h1>
                  {/* <button type="button" onClick={() => openLink("https://wa.me/2348122926228")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full text-bg bg-bg-dark">Reach out</button> */}
              </div>
              <div className="duration-300 ease-in-out card hover:scale-105 transition border bg-[#e5e4e2] text-[#56534e] border-[#c7c5c1] p-5 rounded-2xl space-y-2">
                  <h1 className="text-bg-dark text-xl font-bold tracking-wider">PLATINUM</h1>
                  <h1 className="text-bg-dark text-3xl font-bold">{formatter.format(1000000)}</h1>
                  {/* <button type="button" onClick={() => openLink("https://wa.me/2348122926228")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full text-bg bg-bg-dark">Reach out</button> */}
              </div>
          </div>
      </div>
  )
}

export default Spornsorship
