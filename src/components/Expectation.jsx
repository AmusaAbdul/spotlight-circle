
const Expectation = () => {

    const expext = [
        { emoji: "💡", name: "GIREC", type: "THE INTELLIGENCE TEST" },
        { emoji: "🎤", name: "MMS WITH BIG YEMS", type: "THE CONNECTION GROUND" },
        { emoji: "🏅", name: "SPORTS & RECREATION", type: "THE PARADE GROUND" },
        { emoji: "🌟", name: "CORPERS’ TALENT SHOWCASE", type: "THE PARADE OF TALENTS" },
        { emoji: "🌍", name: "TOURISM & SIGHTSEEING", type: "OPERATION OLUMO" },
        { emoji: "🎙", name: "NETWORKING", type: "PLATOON CONNECT" },
    ]
    return (
        <div className="notebook">
            <div className="container p-3 pt-25">
                <h1 className="text-border-dark dark:text-gold-dark text-lg">What to expect</h1>
                <h1 className="text-headings-dark font-bold text-6xl">Six ways to make it count.</h1>
                <div className="flex gap-5 p-2 flex-wrap card pt-4">
                    {expext.map((e, index) => (
                        <div key={index} className="flex flex-col gap-2 p-3 cardExpext bg-text rounded-2xl duration-300 ease-in-out hover:scale-105 transition hover:border hover:border-text dark:hover:border-gold">
                            <div className="bg-headings p-2 w-fit">{e.emoji}</div>
                            <h1 className="text-xl text-headings-dark font-body">{e.name}</h1>
                            <h1 className="text-gold font-body text-sm font-bold">{e.type}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expectation
