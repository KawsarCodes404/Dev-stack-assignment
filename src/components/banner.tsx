import bannerimg from "../assets/banner-stack.png"

const banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center container mx-auto mt-[40px]">
                {/* left */}
                <div>
                    {/* left-heading */}
                    <h1 className="font-bold text-7xl">
                        Build Your Ideal

                        <br />

                        <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    {/* Description start */}
                    <p className="mt-[30px] text-[21px] font-[100]">
                        Explore frontend, backend, database, and tooling options,<br />
                        compare them side by side, and put together the stack that fits your <br />
                        next project.
                    </p>

                    {/* Button start */}
                    <div className="mt-8 flex gap-5">
                        {/* left button */}
                        <button className="text-white bg-gradient-to-r from-orange-500 to-pink-600 px-[10px] py-[10px] rounded-xl font-medium">
                            Explore Technologies
                        </button>

                        {/* right button */}
                        <button className="border border-slate-300 rounded-lg px-[45px] text-slate-700">
                            Learn More
                        </button>
                    </div>
                </div>


                {/* right */}
                <div>
                    <img
                        src={bannerimg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default banner;