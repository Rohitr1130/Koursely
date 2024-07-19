

const BannerSection = () => {
    return (
        <header class="bg-transparent">
            <div class="max-w-7xl mx-auto py-14 lg:py-17 lg:pb-28 xl:pb-24 pb-10 px-10 lg:px-8 xl:px-0 flex flex-col md:flex-row items-center justify-between xl:gap-24 lg:gap-4">

                <div class="flex flex-col items-center sm:items-start mb-4 sm:mb-0 xl:px-6 lg:px-10 px-0">
                    <h1 class="text-[40px] md:px-0 xl:text-[66px] lg:text-[60px] font-bold text-gray-800 leading-tight md:mb-12 mb-8">
                        Explore Our <span class='text-[#FF0000]'>Creative</span> Classes
                    </h1>
                    <p class="text-[19px] xl:text-[22px] lg:text-[23px] text-gray-700 md:mb-10 mb-6">
                        Our courses are taught by experienced professional working in their fields. They have years of real-world experience and are passionate about teaching others.
                    </p>
                    <div class="mt-4 flex flex-col sm:flex-row gap-4">
                        <a href="#" class="bg-black hover:bg-[#FF0000] text-white font-bold lg:py-5 lg:px-10 py-3 px-24 lg:mr-6 rounded-lg text-lg">Get Started</a>
                        <a href="#" class="bg-white hover:bg-[#FF0000] text-black hover:text-white font-bold lg:py-5 lg:px-10 py-3 px-24 lg:mr-6 rounded-lg text-lg border border-black hover:border-none">Learn More</a>
                    </div>
                </div>


                <div class="flex-shrink-0">
                    <img src="../images/TeacherBanner.png" alt="Image" className='xl:w-[600px] lg:w-[430px] w-[500px] lg:pr-8 lg:mt-0 mt-6 animate__animated animate__zoomIn'/>
                </div>
            </div>
        </header>

    )
}

export default BannerSection