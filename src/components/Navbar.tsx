import devLogo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">

            <div className="flex justify-between container mx-auto py-[25px] ">
                {/* left */}
                <div>
                    <img src={devLogo} alt="" className="h-[45px]" />
                </div>

                {/* middle */}
                <ul className="flex gap-10 items-center">
                    <li className="text-[#DB2777] font-[550]">Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                {/* right */}
                <div className="flex gap-5">
                    <button>Sign In</button>
                    <button className="bg-[#D91B7E] text-[#FFFFFF] rounded-full px-[20px]">Sign Up</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;