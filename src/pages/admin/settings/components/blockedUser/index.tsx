import { useState } from 'react';

const users = [
    {
        name: 'Kavin V',
        regNo: '7376222AL155',
        email: 'kavin.al22@bitsathy.ac.in',
        reason: 'Not paying attention to timings',
    },
];

export default function BlockedUsers() {
    const [activeDropdown, setActiveDropDown] = useState<number | null>(null);

    return (
        <div>
            <div className=" flex w-full bg-background-color p-4 md:p-16 ">
                <div className=" w-full ">
                    <div className=" w-full rounded-md bg-secondary-color py-2 shadow-md " onClick={() => setActiveDropDown(null)}>
                        <h1 className=" px-4 text-3xl text-text-accent-color ">Blocked Users</h1>
                        <div className=" overflow-x-auto md:overflow-hidden ">
                            <table className=" text-surface w-full text-left text-sm font-light">
                                <thead className="border-b border-neutral-200">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            #
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Register Number
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Email
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Reason
                                        </th>
                                        <th scope="col" className="px-6 py-4 font-normal">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr className="border-b border-neutral-200 hover:bg-neutral-100" key={index}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                            <td className="whitespace-nowrap text-wrap px-6 py-4 ">{user.name}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.regNo}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{user.reason}</td>
                                            <td className="whitespace-nowrap px-6 py-4">
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveDropDown(index);
                                                    }}>
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0_403_3415)">
                                                            <path d="M11.9998 4C13.1044 4 13.9998 3.10457 13.9998 2C13.9998 0.89543 13.1044 0 11.9998 0C10.8952 0 9.99982 0.89543 9.99982 2C9.99982 3.10457 10.8952 4 11.9998 4Z" fill="#374957" />
                                                            <path d="M11.9998 14.0003C13.1044 14.0003 13.9998 13.1049 13.9998 12.0003C13.9998 10.8957 13.1044 10.0003 11.9998 10.0003C10.8952 10.0003 9.99982 10.8957 9.99982 12.0003C9.99982 13.1049 10.8952 14.0003 11.9998 14.0003Z" fill="#374957" />
                                                            <path d="M11.9998 23.9997C13.1044 23.9997 13.9998 23.1043 13.9998 21.9997C13.9998 20.8951 13.1044 19.9997 11.9998 19.9997C10.8952 19.9997 9.99982 20.8951 9.99982 21.9997C9.99982 23.1043 10.8952 23.9997 11.9998 23.9997Z" fill="#374957" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_403_3415">
                                                                <rect width="24" height="24" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </button>
                                                {activeDropdown === index && (
                                                    <ul className=" relative z-10 float-left m-0 mt-1 min-w-max list-none items-center rounded-lg border-none bg-white bg-clip-padding py-2 text-left text-base shadow-lg md:absolute">
                                                        <li>
                                                            <button
                                                                className="dropdown-item flex w-full items-center gap-4 whitespace-nowrap bg-transparent px-4
                                            py-2 text-sm font-normal text-gray-700 hover:bg-gray-100 "
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                }}>
                                                                Un Block
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                className="dropdown-item flex w-full items-center gap-4 whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal
                                            text-gray-700 hover:bg-gray-100"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                }}>
                                                                Delete
                                                            </button>
                                                        </li>
                                                    </ul>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
