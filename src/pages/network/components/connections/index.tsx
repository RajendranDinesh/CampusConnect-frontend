import { useState } from 'react';
import DeleteModal from './components/DeleteModal';

import User from '@/assets/svg/temp/user.svg';

export default function Connections() {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleDeleteModalVisiblity = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    return (
        <div>
            <div className=" rounded-md ">
                <div className=" flex w-full flex-col items-center justify-between gap-4 rounded-md bg-secondary-color p-4 md:flex-row md:gap-0 ">
                    <div className=" flex items-center gap-4 ">
                        <div>
                            <img className=" w-16 " alt="user" src={User} />
                        </div>
                        <div>
                            <h3 className=" text-2xl font-medium ">Saran S M</h3>
                            <h6 className=" text-sm ">Senior Manager</h6>
                            <span className=" text-xs font-medium text-primary-color ">721 connections</span>
                        </div>
                    </div>
                    <div>
                        <button onClick={toggleDeleteModalVisiblity} className=" rounded-md border-2 border-red-500 p-4 py-2 text-red-500 ">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            <DeleteModal isOpen={isDeleteModalOpen} onClose={toggleDeleteModalVisiblity} />
        </div>
    );
}
