import React from "react";
import { Button } from "@/components/ui/button";

export default function InfoCard({
  title,
  subtitle,
  description,
  features = [],
  primaryBtn,
  secondaryBtn,
  disclaimer,
  image
}) {
  return (
    <div className="w-[80%] rounded-xl bg-white flex border border-gray-300 p-8 shadow-sm">
      
      {/* Left Content Section */}
      <div className="flex-1 flex flex-col gap-4 p-8">
        
        <h2 className="text-[#4840bb] font-bold text-xl">{title}</h2>
        
        <h1 className="text-[#4840bb] font-black text-5xl">
          {subtitle}
        </h1>

        <p className="text-black text-base">{description}</p>

        {/* Feature List */}
        <div className="pl-6">
          {features.map((feat, i) => (
            <p key={i} className="font-semibold text-[#4840bb] text-base">
              {feat}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-3">
          <Button className="bg-[#4840bb] text-white p-6">
            {primaryBtn?.text}
          </Button>

          {secondaryBtn && (
            <Button className="p-6 text-[#311080] border-2 border-[#4840bb] bg-white">
              {secondaryBtn.text}
            </Button>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-gray-500 text-xs">{disclaimer}</p>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center items-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-auto rounded-lg object-cover" />
        ) : (
          <div className="text-gray-400 italic">No Image Provided</div>
        )}
      </div>
    </div>
  );
}
