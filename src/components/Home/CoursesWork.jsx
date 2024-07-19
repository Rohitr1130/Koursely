const CoursesWork = () => {

    const data = [
        {
            src: '../images/CW-Enroll.svg',
            heading: '01. Enroll course',
            description: 'Maecenas quis neque molestie, tincidunt felis vitae, faucibus sem. Morbi pulvinar magna non felis tristique pellentesque non id turpis.'
        },
        {
            src: '../images/CW-Graduate.svg',
            heading: '02. Graduate',
            description: 'Maecenas quis neque molestie, tincidunt felis vitae, faucibus sem. Morbi pulvinar magna non felis tristique pellentesque non id turpis.'
        },
        {
            src: '../images/CW-Motivate.svg',
            heading: '03. Stay motivated',
            description: 'Maecenas quis neque molestie, tincidunt felis vitae, faucibus sem. Morbi pulvinar magna non felis tristique pellentesque non id turpis.'
        }
    ]

    return (
        <div className="bg-[#eaedf9] py-20 lg:py-28 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center" data-aos="fade-up">
                    <h2 className="text-[41px] lg:text-5xl font-bold text-black leading-tight">
                        How do our courses work
                    </h2>
                </div>
                <div className="mt-9 lg:mt-16">
                    <div className="flex flex-wrap -mx-4">
                        {
                            data.map((item, index) => (
                                <div className="md:w-1/3 px-4 mb-8" key={index} data-aos="zoom-in">
                                    <div className="bg-white p-6 rounded-xl flex flex-col items-center py-9 lg:py-11">
                                        <div className="mb-4">
                                            <img
                                                className=""
                                                src={item.src}
                                                style={{ width: '150px', height: '150px' }}
                                            />
                                        </div>
                                        <h3 className="text-[27.5px] font-bold text-gray-900 mb-4 text-center">
                                            {item.heading}
                                        </h3>
                                        <p className="text-gray-700 text-center text-[17.5px] lg:text-[19.5px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CoursesWork