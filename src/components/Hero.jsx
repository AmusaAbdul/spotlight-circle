import HeroImage from "../assets/heroImage.jpeg"

const Hero = () => {
    return (
        <div className="notebook">
            <div className="container p-5 pt-25 MobileView items-center  flex flex-col gap-10 DesktopView">
                <div className="font-bold space-y-2">
                    <h1 className="text-border-dark dark:text-deepGold tracking-wider">SPOTLIGHT CIRCLE PRESENT</h1>
                    <h1 className="text-text dark:text-text-dark text-6xl lg:text-9xl">CORPER'S ESCAPE</h1>
                    <h1 className="text-border-dark dark:text-gold-dark text-3xl tracking-wider lg:scale-y-170">OLUOMO EXPERIENCE '26</h1>
                    <h1 className="text-text dark:text-text-dark text-2xl">EXPLORE. CONNECT. PLAY. CREATE MEMORIES.</h1>
                    <div className="flex gap-4 text-text dark:text-text-dark pt-5 w-full flex-wrap">
                        <div className="border border-border-dark dark:border-deepGold p-2 rounded-full">Saturday December 12, 2026</div>
                        <div className="border border-border-dark dark:border-deepGold p-2 rounded-full">Olumo Rock, Abeokuta, Ogun State</div>
                        <div className="border border-border-dark dark:border-deepGold p-2 rounded-full">For Corps Members</div>
                    </div>
                    <div className="flex gap-4 text-text-dark pt-5 w-full">
                        <button className="bg-border-dark dark:bg-gold dark:text-bg-dark text-text-dark p-2 rounded-full duration-300 ease-in-out hover:scale-105 transition hover:border-border-dark hover:bg-bg hover:text-border-dark border dark:hover:border-gold">
                            <a href="#ticket">Get your tickets</a>
                        </button>
                        <button className="border border-border-dark dark:border-gold text-border-dark dark:text-text-dark p-2 rounded-full duration-300 ease-in-out hover:scale-105 transition hover:bg-border-dark hover:text-text-dark">
                            <a href="#purpose">See what to expect</a>
                        </button>
                    </div>
                </div>
                <div className="p-2 bg-border-dark dark:bg-gold rounded-full card duration-300 ease-in-out hover:scale-105 transition">
                    <div className="dark:bg-border-dark bg-gold p-2 rounded-full card">
                        <div className="dark:bg-gold bg-border-dark card rounded-full p-2">
                            <img className="h-100 w-100 lg:h-150 lg:w-150 rounded-full object-cover" src={HeroImage} alt="executives at olumo rock" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
