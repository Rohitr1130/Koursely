const OurTeachers = () => {
    return (
        <div class="bg-[#09051a] flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:space-x-14 xl:space-x-5 py-16 lg:py-28 px-8 lg:px-20 xl:px-28">

            <div class="w-full lg:w-1/2 mb-16 lg:mb-0">
                <img src="../images/Hero-Image.png" alt="Image" class="mx-auto w-full h-auto lg:rounded-lg lg:w-[420px] lg:h-[490px]" data-aos="fade-right"/>
            </div>


            <div class="w-full lg:w-1/2">
                <div>
                    <div data-aos="fade-up">
                        <h2 class="text-[40px] lg:text-[48px] xl:text-[50px] font-bold text-white mb-8 lg:mb-9 leading-tight">Talented and Highly Qualified Tutors</h2>
                    </div>
                    <div class="mt-4 mb-10 lg:mb-16 xl:mb-14"  data-aos="fade-up" data-aos-delay="50">
                        <p class="text-white text-[17px] lg:text-[19px] xl:text-[19.5px] leading-relaxed xl:pr-32">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>
                    </div>
                </div>
                <div class="mt-6 flex flex-col lg:inline-block"  data-aos="fade-up" data-aos-delay="100">
                    <a href="#" class="bg-[#FF0000] hover:bg-[#ffebef] hover:text-black text-white font-bold lg:py-5 lg:px-10 py-3 px-24 rounded-lg text-lg text-center">Our Teachers</a>
                </div>
            </div>
        </div>

    )
}

export default OurTeachers