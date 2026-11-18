
const Footer = () => {
    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };
    
    return (
        <div className="container flex justify-center items-center">
            <div className="mt-10 text-center space-y-3 font-bold p-2">
                <h1 className="text-border-dark dark:text-deepGold tracking-wider">SAT, DECEMBER 12, 2026 · OLUMO ROCK, ABEOKUTA</h1>
                <h1 className="text-border-dark dark:text-text-dark text-5xl font-body md:text-7xl">SEE YOU AT OLUMO.</h1>
                <button className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg hover:text-bg text-bg-dark bg-gold">
                    <a href="#ticket">Get your ticket</a>
                </button>
                <p className="text-border-dark dark:text-bg">Spotlight Circle presents Corpers’ Escape: Olumo Experience ’26</p>
                <p className="text-border-dark dark:text-bg">Developed by <button onClick={() => openLink("https://wa.me/23408156345656")} className="p-2 duration-300 ease-in-out hover:scale-105 transition tracking-widest bg-gold rounded-full text-border-dark hover:text-bg">ABDULLAH</button>
                </p>
            </div>
        </div>
    )
}

export default Footer
