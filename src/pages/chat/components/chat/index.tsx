import { useEffect, useState } from 'react';

import { chats } from '../../controller';

import User from '@/assets/svg/temp/user.svg';

interface ChatInterface {
    id: number;
}

export default function ChatInterface(props: ChatInterface) {
    const { id } = props;

    const [chatData, setChatData] = useState(chats[0]);

    useEffect(() => {
        const requiredChat = chats.filter((chat) => chat.id === id);
        setChatData(requiredChat[0]);
    }, [id, chatData]);

    return (
        <div className=" h-[80vh] w-full rounded-md bg-secondary-color shadow-md ">
            <div className=" flex items-end justify-between ">
                <div className=" flex items-center gap-4 p-2 text-xl ">
                    <img alt="some user" src={User} />
                    <h3>{chatData.name}</h3>
                </div>
                <div className=" p-2 px-6 text-sm ">
                    <span className=" text-slate-400 ">Last Seen</span>
                    <span className=" text-primary-color ">&nbsp; {chatData.lastSeen} ago</span>
                </div>
            </div>
            <hr />
        </div>
    );
}
