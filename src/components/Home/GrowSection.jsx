const GrowSection = () => {

    const liData = [
        {
            content: 'Access courses on your schedule'
        },
        {
            content: 'Learn using any device'
        },
        {
            content: 'Fit learning into your busy life'
        }
    ]

    return (
        <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-start lg:space-x-14 xl:space-x-5 py-16 lg:py-28 px-8 lg:px-20 xl:px-28">

            <div class="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-right">
                <img src="../images/Hero-Image.png" alt="Image" class="mx-auto w-full h-auto lg:rounded-lg lg:w-[410px] lg:h-[440px]" />
            </div>


            <div class="w-full lg:w-1/2 xl:pr-28">
                <div>
                    <div data-aos="fade-up" data-aos-easing="ease-in-out">
                        <h2 class="text-[30px] lg:text-[40px] xl:text-[42px] font-bold text-black mb-8 lg:mb-9 leading-tight">Grow your skills learn from anywhere</h2>
                    </div>
                    <div class="mt-4 mb-10 lg:mb-8" data-aos="fade-up" data-aos-delay="50">
                        <ul class="list list-inside text-[17px] lg:text-lg">
                            {
                                liData.map((item, index) => (
                                    <li class="mb-3 lg:mb-5 flex item-center gap-2" key={index}>
                                        <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-[5px]">
                                            <path d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z" fill="#285B52" />
                                        </svg>
                                        {item.content}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div class="mt-6 flex flex-col lg:inline-block" data-aos="fade-up" data-aos-delay="100">
                    <a href="#" class="bg-black hover:bg-[#FF0000] text-white font-bold lg:py-5 lg:px-10 py-3 px-24 rounded-lg text-lg text-center">Get Started</a>
                </div>
            </div>
        </div>

    )
}

export default GrowSection