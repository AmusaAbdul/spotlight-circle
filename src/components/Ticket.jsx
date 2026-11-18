import {useState} from 'react'
import { whatsappLink, buildBookingMessage } from "./Whatsapp";


const Ticket = () => {
    const [ticket, setTicket] = useState("")

    const formatter = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',

        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    });
    
    function handleSubmit(ticket) {
        const msg = buildBookingMessage({ ticket });

        window.open(whatsappLink(msg), "_blank", "noopener");
    }

    console.log(ticket)

    return (
        <div className="notebook">
            <div className="container p-5 pt-25">
                <h1 className="text-border-dark dark:text-gold-dark text-lg">Friendship. Exploration. Adventure.</h1>
                <p className="text-headings-dark font-bold text-6xl">Picture yourself there.</p>

                <div className="flex flex-wrap gap-10 pt-5 ">
                    <div className="duration-300 ease-in-out card hover:scale-105 transition border-2 bg-border-dark border-headings-dark  p-5 rounded-2xl space-y-2">
                        <h1 className="text-headings-dark text-xl font-bold tracking-wider">FIRST CALL-UP</h1>
                        <h1 className="text-headings-dark text-3xl font-bold">{formatter.format(17000)}</h1>
                        <button type="button" onClick={() => handleSubmit("First Call-up")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full hover:bg-bg-dark text-bg bg-headings-dark">Choose ticket</button>
                    </div>
                    <div className="duration-300 ease-in-out card hover:scale-105 transition border-2 bg-headings border-gold-dark p-5 rounded-2xl space-y-2">
                        <h1 className="text-deepGold text-xl font-bold tracking-wider">GENERAL MOBILIZATION</h1>
                        <h1 className="text-text-dark text-3xl font-bold">{formatter.format(20000)}</h1>
                        <button type="button" onClick={() => handleSubmit("General Mobilization")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full hover:bg-gold-dark text-bg-dark bg-gold">Choose ticket</button>
                    </div>
                    <div className="duration-300 ease-in-out card hover:scale-105 transition border border-gold bg-gold-dark p-5 rounded-2xl space-y-2">
                        <h1 className="text-bg-dark text-xl font-bold tracking-wider">PLATOON OF THREE</h1>
                        <h1 className="text-bg-dark text-3xl font-bold">{formatter.format(50000)}</h1>
                        <button type="button" onClick={() => handleSubmit("Platoon of Three")} className="duration-300 ease-in-out hover:scale-105 transition rounded-full p-2 mt-3 font-bold text-lg w-full text-bg hover:bg-border-dark bg-bg-dark">Choose ticket</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Ticket
