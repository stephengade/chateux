import React from 'react'
import { LeftChatBubble, RightChatBubble } from './ChatBubble/ChatBubble';
import { ChatInput } from './ChatInput';


interface ChatBodyProps {

}

export const ChatBody: React.FC<ChatBodyProps> = ({ }) => {
    return (
        <section className="chat__body h-screen w-auto bg-[url('../public/Images/WA.jpg')] ">
              
              <LeftChatBubble />

               <RightChatBubble />

            <ChatInput />
        </section>
    );
}