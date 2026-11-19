import {useState, useEffect} from "react"

const Countdown = () => {
    const getTimeLeft = () => {
        const now = new Date();
        const due = new Date(2027, 1, 9);
        const diff = Math.max(0, due - now);

        const totalSeconds = Math.floor(diff / 1000);

        return {
            days: Math.floor(totalSeconds / (60 * 60 * 24)),
            hours: Math.floor((totalSeconds / (60 * 60)) % 24),
            mins: Math.floor((totalSeconds / 60) % 60),
            secs: totalSeconds % 60,
        };
    };

    const [timeLeft, setTimeLeft] = useState(getTimeLeft);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const time = [
        { number: timeLeft.days, text: "Days" },
        { number: timeLeft.hours, text: "Hours" },
        { number: timeLeft.mins, text: "Minutes" },
        { number: timeLeft.secs, text: "Seconds" },
    ];
    

    return (
        <div className="container p-3 pt-10 lg:pt-5">
            <div className="flex justify-between gap-3 items-center MobileView DesktopView">
                <h1 className="text-border-dark dark:text-deepGold tracking-wider font-bold text-lg">Countdown to Oluomo</h1>
                <div className="flex gap-5">
                   {time?.map((t, index) => (
                       <span key={index} className="flex flex-col items-center">
                           <h1 className="text-3xl text-text dark:text-text-dark">
                               {String(t.number).padStart(2, "0")}
                            </h1>
                           <p className="text-border-dark dark:text-deepGold">{t.text}</p>
                       </span>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default Countdown
