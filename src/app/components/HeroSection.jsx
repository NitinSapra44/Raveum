import React from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    return (
        <div className="flex flex-col   min-h-screen text-4xl  bg-[#311080] justify-between pb-8">
          <div>
          <div className="w-[50%] flex flex-col gap-4">

            <h1 className="text-white font-bold  pl-6 mt-48">New welcome offer</h1>

            <p className="text-white font-bold pl-6 text-8xl">4.15% APY</p>

            <p className="text-2xl text-white pl-6">Boost your APY from 3.50% to 4.15% APY for 3 months when you open and fund a Cash Account. No fees, no strings, and surprisingly few asterisks.</p>

            <div className="pl-6"><Button className=" p-6 bg-[#4840bb] text-white w-[20%]">Get Started with $1</Button></div>

            <div className="pl-6 text-white/50 text-sm mt-4">
            <p >Base Annual Percentage Yield (APY) provided by program banks.</p>
            <p>Base APY as of 11/7/25 and subject to change.</p>
          </div>

          </div>
          <div></div>
          </div>

          <div className="flex flex-row justify-between items-center p-8 mt-16">
            
            <div className="flex flex-col">
              <p className="text-white/50 text-xl font-black">nerdwallet.</p>
              <p className="text-white/50 text-xs">Best Robo-advisor, Portfolio Options, 2022-25 1</p>
            </div>

            <div className="flex flex-col">
              <p className="text-white/50 text-xl font-black">Bankrate.</p>
              <p className="text-white/50 text-xs">Best Cash Management Account, 2023-25 1</p>
              <p className="text-white/50 text-xs">Best Investing App, 2023-24 1</p>
            </div>

            <div className="flex flex-col">
              <p className="text-white/50 text-3xl font-black">1.3M+.</p>
              <p className="text-white/50 text-xs">Funded clients 2</p>
         
            </div>
            
            <div className="flex flex-col">
              <p className="text-white/50 text-3xl font-black">$90B+.</p>
              <p className="text-white/50 text-xs">In total assets 2</p>
            </div>

            <div className="flex flex-col">
              <p className="text-white/50 text-3xl font-black">4.8 *</p>
              <p className="text-white/50 text-xs">Apple App Store 3</p>
            </div>

          </div>
    </div>
    )
}