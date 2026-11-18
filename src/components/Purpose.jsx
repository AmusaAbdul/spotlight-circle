import Marquee from './Marquee'
import CorpMemberAtOlumo from "../assets/corpMemberAtOlumo.jpeg"

const Purpose = () => {
    const category = [
        {number: 6, type: "Activities"}, {number: 3, type: "Ticket categories"},
        {number: 1, type: "Unforgettable day"}
    ]
    return (
        <div>
            <Marquee />
            <div className="container p-5 pt-25 MobileView items-center  flex flex-col gap-10 DesktopView">
                <div className="space-y-2">
                    <p className="text-border-dark dark:text-gold-dark text-lg">This is an experience, not just an excursion</p>
                    <h1 className="text-headings-dark font-bold text-6xl">One day. One rock. One big circle of corpers.</h1>
                    <p className="text-muted-text dark:text-muted-text-dark text-lg">Corpers’ Escape brings corps members together at Olumo Rock
                        for adventure, games, talent, sightseeing and new friendships.
                        Come as you are and leave with memories.
                    </p>
                    <div className="flex gap-5 w-full flex-wrap pt-5">
                        {category.map((c, index) => (
                            <div key={index} className="flex rounded-2xl flex-col bg-border-dark p-3 duration-300 ease-in-out hover:scale-105 transition hover:border hover:border-text dark:hover:border-deepGold">
                                <h1 className="text-headings-dark text-3xl font-bold">{c.number}</h1>
                                <p className="text-muted-text-dark">{c.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-2 dark:bg-gold-dark bg-border-dark card duration-300 ease-in-out hover:scale-105 transition">
                    <div className="p-2 dark:bg-gold bg-text card">
                        <img className="h-100 w-full md:h-150 md:w-250  object-cover" src={CorpMemberAtOlumo} alt="CorpMemberAtOlumo" />
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Purpose
