import React from 'react'
import './Marquee.css'

const Marquee = () => {
    return (
        <div className="bg-[#ffebef] lg:py-16 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="lg:text-[26px] text-[19px] text-center lg:mb-10 mb-5">We are featured on these sites</h2>
                <div className="overflow-hidden">
                    <div className="marquee flex space-x-12">
                        <img src="../images/marqueeLogo1.png" alt="Image 1" className="h-10" />
                        <img src="../images/marqueeLogo2.png" alt="Image 2" className="h-10" />
                        <img src="../images/marqueeLogo3.png" alt="Image 3" className="h-10" />
                        <img src="../images/marqueeLogo4.png" alt="Image 4" className="h-10" />
                        <img src="../images/marqueeLogo5.png" alt="Image 4" className="h-10" />
                        <img src="../images/marqueeLogo1.png" alt="Image 1" className="h-10" />
                        <img src="../images/marqueeLogo2.png" alt="Image 2" className="h-10" />
                        <img src="../images/marqueeLogo3.png" alt="Image 3" className="h-10" />
                        <img src="../images/marqueeLogo4.png" alt="Image 4" className="h-10" />
                        <img src="../images/marqueeLogo5.png" alt="Image 4" className="h-10" />
                        <img src="../images/marqueeLogo1.png" alt="Image 1" className="h-10" />
                        <img src="../images/marqueeLogo2.png" alt="Image 2" className="h-10" />
                        <img src="../images/marqueeLogo3.png" alt="Image 3" className="h-10" />
                        <img src="../images/marqueeLogo4.png" alt="Image 4" className="h-10" />
                        <img src="../images/marqueeLogo5.png" alt="Image 4" className="h-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marquee