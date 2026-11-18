
const Marquee = () => {
    const messages = [
        "EXPLORE", "CONNECT", "PLAY", "CREATE MEMORIES", "EXPLORE",
        "CONNECT", "PLAY", "CREATE MEMORIES", "EXPLORE",
        "CONNECT", "PLAY", "CREATE MEMORIES"
    ];

    return (
        <div className="overflow-hidden bg-border-dark dark:bg-gold-dark h-15 w-full mt-5 py-3">
            <div className="flex w-max animate-marquee gap-10">
                {[...messages, ...messages].map((text, index) => (
                    <span key={index} className="text-lg font-bold whitespace-nowrap">
                        ✦ {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
