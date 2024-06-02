import Image1 from "@/public/assets/iPhone-13-Pro-Front.png"
import Image2 from "@/public/assets/iPhone-13-Pro-Front (1).png"
import Image from "next/image";
import Background from "@/public/assets/Group 35887.png"
import Arrow from "./arrow";
import Watch from "./play";
import Achivement from "./achivement";

const Main = () => {
    return (
        <div className="relative grid grid-flow-row w-full sm:grid-flow-col ">
            <div className="flex flex-col gap-6  lg:pt-32 lg:pl-48 ">
            <div className="relative font-bold text-5xl lg:text-6xl">
    <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-16 h-16 mb-16  lg:w-64 lg:h-64 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full opacity-40"></div>
    </div>
    <h3 className="relative">Make The Best <br/> Financial Decisions</h3>
    </div>

                <p className="text-md mt-4 tracking-wider font-semibold text-[#5d5c5d]">
                    Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> 
                    faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
                </p>
                <div className="flex items-center justify-start gap-10 pl-6 font-semibold text-lg">
                    <div className="text-white bg-black p-6 rounded-md w-52 flex items-center gap-4 hover:bg-gray-600 cursor-pointer">
                        Get Started
                        <Arrow/>
                    </div>
                    <div className="p-6 rounded-md w-52 flex items-center gap-4 cursor-pointer hover:bg-gray-200">
                        <Watch/>
                        Watch Video
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Achivement/>
                </div>
            </div>
            <div className="h-96">
                <Image
                    className="absolute right-24 lg:top-14" src={Background} width={500} height={600} alt="image" 
                />
                <Image
                    className="absolute lg:right-4 lg:top-52" quality={100} src={Image1} width={480} height={480} alt="image"
                />
                <Image
                    className="absolute lg:right-24 lg:top-36" quality={100} src={Image2} width={500} height={500} alt="image"
                />
                <Image
                    className="absolute lg:right-48 lg:top-16" quality={100} src={Image1} width={520} height={520} alt="image"
                />
            </div>
        </div>
    )
}

export default Main;
