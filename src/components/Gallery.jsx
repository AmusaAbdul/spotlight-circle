import Gallery1 from "../assets/gallery1.jpeg"
import Gallery2 from "../assets/gallery2.jpeg"
import Gallery3 from "../assets/gallery3.jpeg"
import Gallery4 from "../assets/gallery4.jpeg"
import Gallery5 from "../assets/gallery5.jpeg"
import Gallery6 from "../assets/gallery6.jpeg"
import myVideo1 from "../assets/myVideo1.mp4" 
import myVideo2 from "../assets/myVideo2.mp4" 



const Gallery = () => {
    return (
        <div className="">
            <div className="container p-5 pt-25">
                <h1 className="text-border-dark dark:text-gold-dark text-lg">Friendship. Exploration. Adventure.</h1>
                <p className="text-headings-dark font-bold text-6xl">Picture yourself there.</p>

                <div className="grid mt-5">
                    <div className="tile a bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery1} alt="corps member at olumo rock" />
                    </div>
                    <div className="tile b bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery2} alt="corps member at olumo rock" />
                    </div>
                    <div className="tile c bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery3} alt="corps member at olumo rock" />
                    </div>
                    <div className="tile d bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery4} alt="corps member at olumo rock" />
                    </div>
                    <div className="tile e bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery5} alt="corps member at olumo rock" />
                    </div>
                    <div className="tile f bg-headings-dark duration-300 ease-in-out hover:scale-105 transition">
                        <img className="w-full h-full object-cover" src={Gallery6} alt="corps member at olumo rock" />
                    </div>
                </div>

                <div className="flex flex-col mobileView DesktopView gap-5 mt-10">
                    <div className="bg-headings-dark card w-150 h-90 lg:h-150 p-2 duration-300 ease-in-out hover:scale-105 transition">
                        <video className="w-full h-full dark:bg-border  object-cover card" src={myVideo1}  controls />
                    </div>

                    <div className="bg-headings-dark card w-150 h-90 lg:h-150 p-2 duration-300 ease-in-out hover:scale-105 transition">
                        <video className="w-full h-full object-cover card" src={myVideo2}  controls />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
