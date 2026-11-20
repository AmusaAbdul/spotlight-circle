import Gallery1 from "../assets/gallery1.jpeg"
import Gallery2 from "../assets/gallery2.jpeg"
import Gallery3 from "../assets/gallery3.jpeg"
import Gallery4 from "../assets/gallery4.jpeg"
import Gallery5 from "../assets/gallery5.jpeg"
import Gallery6 from "../assets/gallery6.jpeg"
import Gallery7 from "../assets/gallery7.jpeg"
import Gallery8 from "../assets/gallery8.jpeg"
import Gallery9 from "../assets/gallery9.jpeg"
import Gallery10 from "../assets/gallery10.jpeg"
import Brand1 from "../assets/Brand1.jpeg"
import Brand2 from "../assets/Brand2.jpeg"
import Brand3 from "../assets/Brand3.jpeg"
import Brand4 from "../assets/Brand4.jpeg"
import Brand5 from "../assets/Brand5.jpeg"
import Brand6 from "../assets/Brand6.jpeg"
import Brand7 from "../assets/Brand7.jpeg"
// import myVideo1 from "../assets/myVideo1.mp4" 
// import myVideo2 from "../assets/myVideo2.mp4" 


const Gallery = () => {
    const Picture = [
        { name: Gallery1 }, { name: Gallery2 }, { name: Gallery3 }, { name: Gallery4 },
        { name: Gallery5 }, { name: Gallery6 }, { name: Gallery7 }, { name: Gallery8 },
        { name: Gallery9 }, { name: Gallery10 }
    ]

    const Brand = [
        { name: Brand1 }, { name: Brand2 }, { name: Brand3 }, { name: Brand4 }, { name: Brand5 },
        { name: Brand6 }, { name: Brand7 }
    ]

    const openLink = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="">
            <div className="container p-5 pt-25">
                <h1 className="text-border-dark dark:text-gold-dark text-lg">Friendship. Exploration. Adventure.</h1>
                <p className="text-headings-dark font-bold text-6xl">Picture yourself there.</p>

                <div className="flex flex-wrap gap-5">
                    <div className="bg-bg flex flex-row  w-full sm:w-100 mt-5 h-100 overflow-x-auto snap-x snap-mandatory scroll-smooth">
                        {Picture.map((p, index) => (
                            <div key={index} className="w-full bg-headings-dark p-2 h-full shrink-0 snap-start">
                                <img className="w-full h-full object-cover" src={p.name} alt="corps member at olumo rock" />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-headings dark:text-gold-dark font-semibold tracking-wider font-mono">Scroll to see more</p>


                <div className="mt-10">
                    <h1 className="text-headings-dark font-bold text-4xl">A few spotlight brand products.</h1>
                    <div className="flex flex-wrap gap-5 justify-center sm:justify-start items-center">
                        <div className="bg-bg flex flex-row w-full sm:w-100 mt-5 h-100 overflow-x-auto snap-x snap-mandatory scroll-smooth">
                            {Brand.map((b, index) => (
                                <div key={index} className="w-full bg-headings-dark p-2 h-full shrink-0 snap-start">
                                    <img className="w-full h-full object-cover" src={b.name} alt="corps member at olumo rock" />
                                </div>
                            ))}
                        </div>
                        <button onClick={() => openLink("https://wa.me/23408129725633")} className="p-2 h-fit duration-300 ease-in-out hover:scale-105 transition tracking-widest bg-border-dark text-white dark:bg-gold rounded-full dark:text-bg-dark hover:text-bg">Get one</button>
                    </div>
                </div>

                {/* <div className="flex flex-col mobileView DesktopView gap-5 mt-10">
                    <div className="bg-headings-dark card w-100 h-100 p-2 duration-300 ease-in-out hover:scale-105 transition">
                        <video className="w-full h-full dark:bg-border  object-cover card" src={myVideo1} controls />
                    </div>

                    <div className="bg-headings-dark card w-100 h-100 p-2 duration-300 ease-in-out hover:scale-105 transition">
                        <video className="w-full h-full object-cover card" src={myVideo2} controls />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Gallery
