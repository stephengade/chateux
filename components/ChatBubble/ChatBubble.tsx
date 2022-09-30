import React from 'react';
import Image from "next/image"
import Avater from "../../public/Images/profile-avater.svg"

interface ChatBubbleProps {
    color?: string;

}

const sylx = "before:top-[0px] before:left-[-19px] before:absolute before:h-0 before:w-0 before:content-[''] before:border-t-[10px] before:border-solid before:border-t-siloBlack before:border-r-[10px] before:border-solid before:border-r-siloBlack before:border-b-[10px] before:border-solid before:border-b-[transparent] before:border-l-[10px] before:border-solid before:border-l-[transparent]"
export const LeftChatBubble: React.FC<ChatBubbleProps> = ({ color }) => {


    return (
        <div className="flex md:flex-row justify-start md:gap-5 pt-5  mx-5 mb-10">
            <span className="hidden md:block h-[50px]  bg-siloBlack w-[50px] rounded-[50%] border border-solid border-siloBlack">
                <Image src={Avater} alt="userImage" width={50} height={50} />
            </span>

            <div className="relative">
                <div className={`${sylx} box mt-7  rounded-r-2xl rounded-bl-2xl  w-[max-content] max-w-[80%]  md:max-w-[350px] py-[5px] px-1 bg-siloBlack  text-white relative`}>
                    <p className="p-2">I see you, I see you, I see you, I see you, I see you, I see</p>
                </div>
                <p className="text-siloBlack absolute left-2 text-[12px] text-left">6:15 PM</p>
            </div>

        </div>
    );
}



// right bubble 

const right_sylx = "before:top-[0px] before:right-[-19px] before:absolute before:h-0 before:w-0 before:content-[''] before:border-t-[10px] before:border-solid before:border-b-siloBlue before:border-l-[10px] before:border-solid before:border-l-siloBlue before:border-b-[10px] before:border-solid before:border-t-[transparent] before:border-r-[10px] before:border-solid before:border-r-[transparent]"

export const RightChatBubble: React.FC<ChatBubbleProps> = ({ color }) => {

    return (
        <div className="flex md:flex-row justify-end md:gap-5 mx-5 pt-5 mb-10 pl-10 md:pr-0">
           

            <div className="relative">
                <div className={`${right_sylx} box rounded-l-2xl rounded-br-2xl  md:w-[max-content] max-w-[100%]  md:max-w-[350px] py-[5px] px-1 bg-siloBlue  text-white relative`}>
                    <p className="p-2">Werey, be seing rubbish 🙄... hdgjfsfhsf  me too sabi am, let's start it vcbcb</p>
                </div>
                <p className="text-siloBlue absolute left-2 text-[12px] text-left">6:30 PM</p>
            </div>


             <span className="hidden md:block md:h-[50px] bg-white md:w-[50px] rounded-[50%] border border-solid border-siloBlue">
                <Image src={Avater} alt="userImage" />
            </span>

        </div>
    );
}