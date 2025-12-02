import React from "react";
import { Button } from "@/components/ui/button";

const options =["Cash", "Bonds", "Automated Investing", "Stocks", "Borrow", "Learn"];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center" >

        <div className="p-4 text-3xl font-bold text-white">Wealthfront</div>

        <div className="p-4">
            {options.map((option) => (
                <Button key={option} variant="ghost" className="mx-2 text-base font-semibold text-white">
                    {option}
                </Button>
            ))}
        </div>
        
        <div className="p-4">
            <Button className=" text-white bg-[#311080] border-2 border-white " >Log In</Button>
            <Button className="ml-2 text-[#311080] bg-white">Get Started</Button>
        </div>
    </header>
  );
}