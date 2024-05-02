import Modal from '@/components/Modal';

import { experiences } from '@/pages/student/profile/controllers';

interface PastRoles {
    isOpen: boolean;
    onClose: () => void;
}

export default function PastRoles(props: PastRoles) {
    const { isOpen, onClose } = props;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Roles You've been on Before">
            <div>
                {experiences.map((experience, index) => {
                    return (
                        <div key={index} className=" my-8 flex min-w-full flex-col rounded-md bg-secondary-color px-4 shadow-lg  ">
                            <h1 className=" px-4 pt-4 text-2xl font-medium text-text-color ">{experience.company}</h1>
                            <div className=" w-full overflow-x-auto ">
                                <div className=" inline-block w-full py-2 ">
                                    <div className=" overflow-hidden ">
                                        <table className=" text-surface w-full text-left text-sm font-light ">
                                            <thead className="border-b border-neutral-200">
                                                <tr>
                                                    <th scope="col" className="px-6 py-4">
                                                        #
                                                    </th>
                                                    <th scope="col" className="px-6 py-4 font-normal">
                                                        Title
                                                    </th>
                                                    <th scope="col" className="px-6 py-4 font-normal">
                                                        Duration
                                                    </th>
                                                    <th scope="col" className="px-6 py-4 font-normal">
                                                        Timeframe
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {experience.timeframes.map((timeFrame, index) => (
                                                    <tr className="border-b border-neutral-200 hover:bg-neutral-100" key={index}>
                                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                                                        <td className="whitespace-nowrap text-wrap px-6 py-4 ">{timeFrame.title}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{timeFrame.timeframe}</td>
                                                        <td className="whitespace-nowrap px-6 py-4">{timeFrame.duration}</td>
                                                    </tr>
                                                ))}
                                                <tr className="border-b border-neutral-200 hover:bg-neutral-100">
                                                    <td></td>
                                                    <td></td>
                                                    <td className="whitespace-nowrap px-6 py-4">Total</td>
                                                    <td className="whitespace-nowrap px-6 py-4">6 months</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Modal>
    );
}
