import Link from 'next/link';
import React, { useEffect, useId, useState } from 'react'
import { CONTACT } from './ChatData';
import { ChatSearch } from './ChatSearch';

interface ChatSideBarProps {

}


export const ChatSideBar: React.FC<ChatSideBarProps> = ({ }) => {

    const [data, setData] = useState([]) as any



    useEffect(() => {
        const chats = CONTACT.map((chat) => chat.chats)
        console.log(chats[0])
        setData(chats[0])
    }, [])


    return (
        <>

            <aside className="w-64" aria-label="Sidebar">
                <div className="overflow-y-auto h-screen py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">

                    <ul className="space-y-2 mb-5">
                        <li>

                            <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg aria-hidden="true" className="w-6 h-6 transition duration-75 text-siloRed dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                <span className="ml-3 text-siloRed font-extrabold text-lg">Chateux</span>
                            </a>

                        </li>
                    </ul>

                    {/* // search here */}
                    <ChatSearch />


                    <ul className="mt-5">
                        {data.map((n: any, index: any) => {
                            return (
                                <>
                                    <li key={index}>
                                        <Link href={`/inbox/[username]`}  as={`/inbox/${data.username}`}>
                                            <a target="_blank" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">

                                                <span className="flex-1 ml-3 whitespace-nowrap">{n.value}</span>
                                                <span className={n.sentMessages === 0 ? "hidden" : "inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"}>{n.sentMessages}</span>
                                            </a>
                                        </Link>
                                    </li>
                                    <hr />
                                </>

                            )
                        })}


                    </ul>




                </div>
            </aside>

        </>
    );
}