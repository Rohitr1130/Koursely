const Form = () => {
    return (
        <div className="bg-white py-8 px-4 sm:px-6 lg:px-20 xl:px-28 lg:py-24">
            <div className="bg-[#150b3d] max-w-7xl mx-auto pt-8 pb-14 lg:py-24 rounded-[20px] overflow-hidden relative">
                <img src="../images/Form-Ellipse1.png" className="absolute top-[-65px] left-[-65px] lg:top-[-40px] lg:left-[-30px] rounded-tl-[20px]" />
                <img src="../images/Form-Ellipse2.png" className="absolute w-[100px] lg:w-[140px] bottom-[-5px] left-[160px] lg:bottom-[-5px] lg:left-[370px] xl:bottom-[-5px] xl:left-[500px]" />
                <img src="../images/Form-Ellipse3.png" className="absolute w-[55px] hidden lg:block lg:right-[-5px] lg:bottom-[40px]" />
                <div className="text-center">
                    <h2 className="text-[30px] lg:text-[52px] xl:text-[56px] px-8 lg:px-16 xl:px-60 text-white font-bold text-white leading-tight">
                        Get the best sent to your inbox, every month
                    </h2>
                </div>
                <div className="mt-14 max-w-md mx-auto sm:flex sm:justify-center lg:pr-[65px]">
                    <div className="sm:max-w-lg sm:flex-grow">
                        <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 px-6 lg:px-0">
                            <div className="flex-1">
                                <label htmlFor="email" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="appearance-none block w-full lg:w-[380px] px-6 py-3 lg:px-6 lg:py-5 border-none rounded-xl placeholder-gray-500 focus:outline-none text-md"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button
                                type="submit"
                                className="text-[19px] font-bold mt-3 sm:mt-0 w-full sm:w-auto w-full py-2.5 lg:px-12 lg:py-[17px] border border-transparent rounded-xl shadow-sm text-white bg-[#FF0000] focus:outline-none"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form