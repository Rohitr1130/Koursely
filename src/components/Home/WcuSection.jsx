const WcuSection = () => {

    const data = [
        {
            src: '../images/WCU-Class-min.png',
            heading: 'Learn from anywhere',
            description: 'Koursely online learning platform empowers you to learn new skills and accomplish real growth.'
        },
        {
            src: '../images/WCU-Mentor-min.png',
            heading: 'Expert Mentors',
            description: 'Koursely online learning platform empowers you to learn new skills and accomplish real growth.'
        },
        {
            src: '../images/WCU-Skills-min.png',
            heading: 'Learn in-demand skills',
            description: 'Koursely online learning platform empowers you to learn new skills and accomplish real growth.'
        }
    ]
    return (
        <div>
            <div class="bg-white py-20 lg:py-28">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 xl:px-8"  data-aos="fade-up">
                    <h2 class="text-[32px] lg:text-[42px] font-bold text-black text-center">Why Choose Us</h2>
                    <div class="mt-8 lg:mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-0 xl:gap-6">
                        {
                            data.map((item, index) => (
                                <div class="bg-transparent overflow-hidden" key={index}>
                                    <div class="px-4 lg:px-10 xl:px-4 py-5 sm:p-6 xl:p-14">
                                        <img class="mx-auto h-19 w-19" src={item.src} alt="Service 1" />
                                        <h3 class="mt-3 text-center text-[27px] lg:text-[26px] xl:text-[27px] font-bold text-gray-900">{item.heading}</h3>
                                        <p class="mt-3 text-center text-[17px] lg:text-[19px] xl:text-[20px] text-gray-800">{item.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-[80%] h-[2px] lg:h-[0.2px] bg-gray-300 mx-auto" />
        </div>
    )
}

export default WcuSection