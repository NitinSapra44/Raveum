import React from "react";
import Card from "@/components/InfoCard";
import cardData from "@/data/CardData.json";


export default function Section2() {

    return(
        <div className="flex flex-col w-full bg-grey-600 min-h-screen justify-center items-center  py-16 gap-16">
               {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
        </div>
    )
}