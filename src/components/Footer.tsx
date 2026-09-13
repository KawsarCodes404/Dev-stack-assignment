import devLogo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="w-full border-t border-gray-200 mb-[50px]">
            <div className="container mx-auto">
                {/* footer top div */}
                <div className="border-b border-gray-200 pb-[20px]">

                    <div className="flex justify-between mt-[20px] mb-[40px]">
                        {/* icon div */}
                        <div>
                            <img src={devLogo} alt="" />

                            <p className="mt-[13px] text-[14px] text-[#64748B]">Curated tools, technologies, and resources for developers building <br />
                                modern software.</p>

                            <div>
                                <ul className="flex gap-6 mt-[13px]">
                                    <li className="text-[14px] font-bold text-[#475569]">GitHub</li>
                                    <li className="text-[14px] font-bold text-[#475569]">Twitter</li>
                                    <li className="text-[14px] font-bold text-[#475569]">LinkedIn</li>
                                </ul>
                            </div>
                        </div>


                        {/* product div */}
                        <div>
                            <p className="mb-[13px] text-[14px] font-semibold">PRODUCT</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Home</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Technologies</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Projects</p>
                        </div>

                        {/* company div */}
                        <div>
                            <p className="mb-[13px] text-[14px] font-semibold">COMPANY</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">About</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Contact</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Careers</p>
                        </div>

                        {/* legal div */}
                        <div>
                            <p className="mb-[13px] text-[14px] font-semibold">LEGAL</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Privacy Policy</p>
                            <p className="text-[#94A3B8] text-[13px] mt-[10px]">Terms of Service</p>
                        </div>
                    </div>
                </div>


                {/* footer bottom div */}
                <div className="flex justify-between mt-[34px]">
                    {/* left div */}
                    <div>
                        <p className="text-[#94A3B8] text-[14px]">© 2026 Dev Stack. All rights reserved.</p>
                    </div>

                    {/* right div */}
                    <div className="flex gap-5">
                        <h1 className="text-[#94A3B8] text-[14px]">Privacy</h1>
                        <h2 className="text-[#94A3B8] text-[14px]">Terms</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;