import React from 'react';
import Image from 'next/image';
import { GiStarShuriken } from 'react-icons/gi';
import { TbHexagon3D } from 'react-icons/tb';
import { BiCube } from 'react-icons/bi';
import BackgroundImage from '@/public/assets/Group 35887.png';
import Image1 from '@/public/assets/iPhone-13-Pro-Front.png';
import featureData from './data.json';

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full border justify-evenly items-center p-2">
      <div className="relative sm:h-90">
        <Image className="left-16" src={BackgroundImage} width={600} height={600} alt="Background image" />
        <Image className="absolute top-12 rotate-12 left-32" src={Image1} width={600} height={600} alt="iPhone image" />
      </div>
      <div className="flex flex-col gap-6 lg:w-1/2">
        <h4 className="text-xl text-red-600 font-semibold">FEATURES</h4>
        <h3 className="text-4xl font-bold">Uifry Premium</h3>
        <section className="space-y-4">
          {featureData.features.map((featur, index) => (
            <div key={index} className="flex items-start gap-4 text-xl">
              {featur.icon === 'GiStarShuriken' && <GiStarShuriken className="text-red-600 text-4xl mt-1" />}
              {featur.icon === 'TbHexagon3D' && <TbHexagon3D className="text-red-600 text-4xl mt-1" />}
              {featur.icon === 'BiCube' && <BiCube className="text-red-600 text-4xl mt-1" />}
              <div>
                <h5 className="font-semibold mt-2">{featur.title}</h5>
                <p className="text-gray-600">{featur.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Features;
