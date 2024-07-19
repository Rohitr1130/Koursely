const Featured = () => {

    const data = [
        {
            src: '../images/Featured1.png',
            heading: 'Artificial Intelligence & Information System',
            lessons: '14 Lessons',
            description: 'Et aliquid molestias ratione temporibus mollitia nesciunt quia officiis tempore. Minus voluptas consectetur provident tempora'
        },
        {
            src: '../images/Featured2.png',
            heading: 'Bechelor of Electrical & Electronic Engineering',
            lessons: '15 Lessons',
            description: 'Et aliquid molestias ratione temporibus mollitia nesciunt quia officiis tempore. Minus voluptas consectetur provident tempora'
        },
        {
            src: '../images/Featured3.png',
            heading: 'Diploma in Fashion Design & Creative Arts',
            lessons: '11 Lessons',
            description: 'Et aliquid molestias ratione temporibus mollitia nesciunt quia officiis tempore. Minus voluptas consectetur provident tempora'
        }
    ]

    return (
        <div className="bg-white py-16 lg:py-28 px-4 lg:px-9 xl:px-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6"  data-aos="fade-up">
                <div className="text-center">
                    <h2 className="text-[32px] lg:text-[42px] font-bold text-black leading-tight">
                        Featured Courses
                    </h2>
                </div>
                <div className="mt-11 lg:mt-14 xl::mt-16">
                    <div className="flex flex-wrap">
                        {
                            data.map((item, index) => (
                                <div className="md:w-1/3 lg:px-3 xl:px-4 mb-8" key={index}>
                                    <a href="#">
                                        <div className="bg-white rounded-xl flex flex-col lg:py-0 pb-8 lg:pb-9 shadow-lg">
                                            <div className="mb-5 overflow-hidden rounded-t-xl" style={{ width: '100%', height: '100%' }}>
                                                <img
                                                    className="h-full w-full object-contain rounded-t-xl transition-transform ease-in-out duration-500 transform hover:scale-110"
                                                    src={item.src}
                                                />
                                            </div>
                                            <div className="px-6">
                                                <h3 className="text-[27.5px] font-bold text-gray-900 mb-2 leading-tight">
                                                    {item.heading}
                                                </h3>
                                                <p className="text-[#FF0000] text-[17.5px] lg:text-[17px] mb-2">
                                                    {item.lessons}
                                                </p>
                                                <p className="text-gray-700 text-[17.5px] lg:text-[19px]">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-2 lg:mt-10 flex flex-col lg:inline-block">
                    <a href="#" class="lg:ml-[360px] xl:ml-[520px] text-center bg-white hover:bg-[#FF0000] text-black hover:text-white font-bold lg:py-5 lg:px-10 py-3 px-24 rounded-lg text-lg border border-black hover:border-none">All Courses</a>
                </div>
            </div>
        </div>
    )
}

export default Featured