import bannerimg from "../assets/banner-stack.png"

const banner = () => {
    return (
        <div>
            <div className="flex justify-between items-center container mx-auto">
                {/* left */}
                <div>
                    {/* left-heading */}
                    <h1 className="">
                        Build Your Ideal

                        <br />

                        <span className="">
                            Development Stack
                        </span>
                    </h1>

                    {/* Description start */}
                    <p className="">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
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