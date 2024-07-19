const CourseSection = () => {

    const data = [
        {
            src: "../images/Design-min.png",
            heading: "Design",
            description: "Course: 2"
        },
        {
            src: "../images/Development-min.png",
            heading: "Development",
            description: "Course: 2"
        },
        {
            src: "../images/Marketing-min.png",
            heading: "Marketing",
            description: "Course: 1"
        },
        {
            src: "../images/Personal Development-min.png",
            heading: "Self Growth",
            description: "Course: 1"
        }
    ]

    return (
        <div className="bg-[#eaedf9] py-16 lg:py-28">
            <div className="max-w-7xl mx-auto px-8 lg:px-8">
                {/* Heading and Description Section */}
                <div className="text-center">
                    <h2 className="font-bold text-black text-[30px] lg:text-[40px]">
                        The Course Categories
                    </h2>
                    <p className="mt-4 xl:mt-6 mb-6 lg:mb-[60px] xl:mb-16 text-[17.5px] lg:text-xl text-gray-700 px-2 lg:px-40 xl:px-72">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium sapien libero, vitae imperdiet augue eleifend.
                    </p>
                </div>

                {/* Grid for Items */}
                <div className="mt-0 lg:mt-10 grid grid-cols-1 lg:gap-4 xl:gap-0 sm:grid-cols-2  lg:grid-cols-4 lg:px-10 xl:px-0 lg:mt-0" data-aos="fade-up">
                    {/* Items */}
                    {
                        data.map((item, index) => (
                            <div className="mt-8 lg:w-[200px] xl:w-[280px] bg-white overflow-hidden rounded-lg lg:mx-0 xl:mx-auto" key={index}>
                                <div className="bg-[#eaedf9]">
                                    <div className="border border-gray-400 py-6 lg:py-8 xl:py-4 h-[270px] lg:h-[205px] xl:h-[270px] rounded-lg">
                                        <a href="#">
                                            <img
                                                className="h-full w-full object-contain transition-transform ease-in-out duration-500 transform hover:scale-110"
                                                src={item.src}
                                            />
                                        </a>
                                    </div>
                                    <h3 className="mt-3 text-xl font-bold text-blac">
                                        {item.heading}
                                    </h3>
                                    <p className="mt-1.5 text-md text-gray-700">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>

    )
}

export default CourseSection