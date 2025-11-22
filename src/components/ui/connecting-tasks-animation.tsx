import React from "react";
import automationIcons2 from "@/assets/document-numeric.svg";
import automationIcons from "@/assets/document-numeric.svg";
import image from "@/assets/document-numeric.svg";

export const ConnectingTasksAnimation = () => {
  const cards = [
    {
      id: 1,
      icon: automationIcons,
      text: "Connecting",
      className:
        "flex w-[77.01%] h-[62.96%] left-[11.64%] bg-[#dedede] border border-solid border-[#b1b1b1] opacity-50 items-center gap-5 pl-2.5 pr-[50px] py-2.5 absolute top-0 rounded-[15px]",
    },
    {
      id: 2,
      icon: image,
      text: "Connecting tasks",
      className:
        "flex w-[89.25%] h-[62.22%] left-[5.97%] bg-[#efefef] shadow-[0px_4px_25px_#00000040] items-center gap-5 pl-2.5 pr-[50px] py-2.5 absolute top-0 rounded-[15px]",
    },
    {
      id: 3,
      icon: automationIcons2,
      text: "Connecting tasks",
      className:
        "inline-flex w-full h-[62.96%] left-0 bg-white border border-solid border-[#b1b1b1] shadow-[0px_4px_25px_#00000040] items-center gap-5 pl-2.5 pr-[50px] py-2.5 absolute top-0 rounded-[15px]",
     
    },
  ];

  return (
    <div className="relative w-[335px] h-[135px]">
      {cards.map((card) => (
        <div key={card.id} className={card.className}>
          <img
            className=""
            alt="Automation icons"
            src={card.icon}
          />
          <div className="">{card.text}</div>
        </div>
      ))}
    </div>
  );
};
