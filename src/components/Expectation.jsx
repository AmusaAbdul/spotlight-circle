
const Expectation = () => {

    const expext = [
        { emoji: "💡", name: "GIREC", type: "THE INTELLIGENCE TEST", content: "An interactive intelligence and entertainment experience where participants answer questions, demonstrate their knowledge and enjoy the Guess It Right & Eat Challenge experience." },
        { emoji: "🎤", name: "MMS WITH BIG YEMS", type: "THE CONNECTION GROUND", content: "A social and matchmaking experience designed to encourage interaction, connection and meaningful relationships among participants." },
        { emoji: "🌟", name: "CORPERS’ TALENT SHOWCASE", type: "THE PARADE OF TALENTS", content: "An opportunity for talented corps members, creatives and entertainers to showcase their abilities." },
        { emoji: "🌍", name: "TOURISM & SIGHTSEEING", type: "OPERATION OLUMO", content: "An exploration and sightseeing experience centred around the history, beauty and uniqueness of Olumo Rock." },
        { emoji: "🎙", name: "NETWORKING", type: "PLATOON CONNECT", content: "An opportunity for corps members to meet, interact, build relationships, exchange ideas and discover opportunities." },
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
                            <h1 className="text-xl text-gold font-body">{e.name}</h1>
                            <h1 className="text-headings-dark font-body text-sm font-bold">{e.type}</h1>
                            <p className="text-gold italic w-full md:w-70 font-body text-sm font-bold">{e.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Expectation
