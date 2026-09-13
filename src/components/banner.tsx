import bannerimg from "../assets/banner-stack.png"

const banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center container mx-auto">
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
                    <div>
                        {/* left button */}
                        <button>
                            Explore Technologies
                        </button>

                        {/* right button */}
                        <button className="">
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