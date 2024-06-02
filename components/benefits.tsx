import Image from "next/image";
import BackgroundImage from "@/public/assets/Group 35887.png";
import {IoIosNotifications} from 'react-icons/io';
import Image2 from "@/public/assets/iPhone-13-Pro-Front (1).png"
import benefitData from './data.json'; 
const Benefits = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full border justify-evenly items-center p-2">
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h4 className="text-xl text-red-600 font-semibold">ADVANTAGES</h4>
        <h2 className="text-5xl font-bold">Why Choose Uifry?</h2>
        <section className="space-y-4">
          {benefitData.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4 text-xl">
              {/* {React.createElement(benefit.icon, { className: 'text-red-600 text-6xl' })} */}
              <div>
                <h4 className="font-semibold mt-3 text-3xl">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
      <div className="relative sm:h-90">
        <Image className="right-32" src={BackgroundImage} width={600} height={600} alt="Background image" />
        <Image className="absolute top-12 rotate-12 left-12" src={Image2} width={600} height={600} alt="iPhone image" />
      </div>
    </div>
  );
}

export default Benefits;
