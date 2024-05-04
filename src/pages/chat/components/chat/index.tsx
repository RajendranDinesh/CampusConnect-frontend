import { useEffect, useState } from 'react';

import { chats } from '../../controller';

import AngelLeft from '@/assets/svg/angle_left.svg';
import PaperPlane from '@/assets/svg/paper_plane.svg';
import User from '@/assets/svg/temp/user.svg';

interface ChatInterface {
    hideList: (some: boolean) => void;
    id: number;
}

export default function ChatInterface(props: ChatInterface) {
    const { hideList, id } = props;

    const [chatData, setChatData] = useState(chats[0]);

    useEffect(() => {
        const requiredChat = chats.filter((chat) => chat.id === id);
        setChatData(requiredChat[0]);
    }, [id, chatData]);

    return (
        <div className=" flex h-[80vh] w-full flex-col rounded-md bg-secondary-color shadow-md ">
            <div className=" flex w-full items-center px-2 ">
                <div className=" md:hidden " onClick={() => hideList(false)}>
                    <button className=" p-2 ">
                        <img alt="go back" src={AngelLeft} />
                    </button>
                </div>
                <div className=" flex w-full flex-col justify-between md:flex-row md:items-end ">
                    <div className=" flex items-center gap-4 px-2 text-base md:p-2 md:text-xl ">
                        <img alt="some user" src={User} />
                        <h3>{chatData.name}</h3>
                    </div>
                    <div className=" self-end text-xs md:p-2 md:px-6 md:text-sm ">
                        <span className=" text-slate-400 ">Last Seen</span>
                        <span className=" text-primary-color ">&nbsp; {chatData.lastSeen} ago</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className=" flex h-full w-full flex-col overflow-y-auto p-2 ">
                <div className=" flex flex-col gap-2 ">
                    {chatData.messages?.map((message, index) => (
                        <div key={index} className={` flex w-fit flex-col items-end ${message.by === id ? ` ` : ` self-end `}`}>
                            <div className={message.by === id ? ` w-fit rounded-md rounded-tl-none bg-primary-color p-4 text-background-color ` : ` w-fit self-end rounded-md rounded-tr-none bg-slate-200 p-4 text-text-color `}>
                                <p>{message.content}</p>
                            </div>
                            <span className=" mr-2 mt-1 text-xs font-thin ">{message.time}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" flex w-full gap-4 px-4 py-2 ">
                <input placeholder="Text to send" className=" w-full p-2 " name="chat" />
                <button className=" rounded-md border-2 border-primary-color p-2 ">
                    <img alt="send text" src={PaperPlane} />
                </button>
            </div>
        </div>
    );
}
