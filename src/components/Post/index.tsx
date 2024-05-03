import { useState } from 'react';

import DeleteModal from './components/DeleteModal';
import EditModal from './components/EditModal';

import Comment from '@/assets/svg/comment.svg';
import Heart from '@/assets/svg/heart.svg';
import HorizontailMenu from '@/assets/svg/menu_horizontal.svg';
import Pen from '@/assets/svg/pen.svg';
import Share from '@/assets/svg/share.svg';
import Trash from '@/assets/svg/trash.svg';
import User from '@/assets/svg/temp/user.svg';

interface Post {
    commentCount?: number;
    companyRole: string;
    image?: undefined | string;
    likeCount?: number;
    showControls?: boolean;
    text: string;
    user: string;
}

export default function Post(props: Post) {
    const { commentCount = 0, companyRole, image = undefined, likeCount = 0, showControls = false, text, user } = props;

    const [activeDropdown, setActiveDropDown] = useState<number | null>(null);

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const toggleDeleteModal = () => {
        setIsDeleteModalOpen(!isDeleteModalOpen);
    };

    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };

    return (
        <div className=" w-full rounded-md bg-secondary-color shadow-md " onClick={() => setActiveDropDown(null)}>
            {showControls && (
                <>
                    <div className=" flex justify-end p-2 px-8 ">
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveDropDown(1);
                            }}>
                            <img src={HorizontailMenu} alt=" open post menu " />
                        </button>
                        {activeDropdown === 1 && (
                            <ul className=" relative z-10 float-left m-0 mt-1 min-w-max list-none items-center rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg md:absolute ">
                                <li>
                                    <button
                                        className="dropdown-item flex w-full items-center gap-4 whitespace-nowrap bg-transparent px-4
                                            py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 "
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleEditModal();
                                        }}>
                                        <img src={Pen} alt="edit" /> Edit
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="dropdown-item flex w-full items-center gap-4 whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal
                                            text-gray-700 hover:bg-gray-100"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDeleteModal();
                                        }}>
                                        <img src={Trash} alt="delete" /> Delete
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>

                    <hr />
                </>
            )}
            <div>
                <div className=" flex gap-4 p-4 px-8 ">
                    <img src={User} width={'72px'} alt="user" />
                    <div className=" flex flex-col justify-center ">
                        <h4 className=" text-lg font-medium ">{user}</h4>
                        <span className=" text-sm ">{companyRole}</span>
                    </div>
                </div>
                <div className=" px-6 pb-6 md:px-16 ">
                    <p>{text}</p>
                    {image != undefined && <img className=" md:w-2/5 " src={image} alt=" user post " />}
                </div>
            </div>
            <hr />
            {showControls && (
                <div className=" flex h-12 justify-between ">
                    <div className=" flex items-center ">
                        <button className=" flex h-full min-w-24 items-center justify-evenly ">
                            <img src={Heart} alt=" like " />
                            {likeCount}
                        </button>
                        <button className=" flex h-full min-w-24 items-center justify-evenly border-l-2 border-r-2 ">
                            <img src={Comment} alt=" comment " />
                            {commentCount}
                        </button>
                    </div>
                    <div className=" flex ">
                        <button className=" flex h-full min-w-24 items-center justify-evenly gap-4 md:pr-4 ">
                            <img src={Share} alt=" share " />
                            SHARE
                        </button>
                    </div>
                </div>
            )}
            <DeleteModal isOpen={isDeleteModalOpen} onClose={toggleDeleteModal} />
            <EditModal isOpen={isEditModalOpen} onClose={toggleEditModal} />
        </div>
    );
}
