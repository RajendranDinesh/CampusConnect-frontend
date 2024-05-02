import { useState } from 'react';

import { experiences } from '@/pages/student/profile/controllers';

import Modal from '@/components/Modal';
import Toast from '@/components/Toast';
import EditField from '@/components/EditField';

import CircleCross from '@/assets/svg/circle_cross.svg';

interface EditModal {
    isOpen: boolean;
    onClose: () => void;
}

export default function EditModal(props: EditModal) {
    const { isOpen, onClose } = props;

    const [isLoading, setIsLoading] = useState(false);

    const handleEdit = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Toast('success', <p>Changes Persisted</p>);
            onClose();
        }, 1000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} height="fit" width="50vw">
            <div className=" mt-4 ">
                {isLoading ? (
                    <div className="text-primary inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                ) : (
                    <div className=" flex flex-col gap-4 ">
                        <h1 className=" text-3xl ">Edit Profile</h1>
                        <div className=" flex max-h-96 flex-wrap gap-6 overflow-y-scroll pb-4 md:max-h-max md:overflow-y-hidden ">
                            <div className=" w-full ">
                                <EditField
                                    label="Company Name"
                                    value="Reach Hub"
                                    type="text"
                                    onChange={(e) => {
                                        console.log(e);
                                    }}
                                />
                            </div>
                            <div className=" w-full ">
                                <EditField
                                    label="Location"
                                    value="Remote"
                                    type="text"
                                    onChange={(e) => {
                                        console.log(e);
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className=" text-2xl font-medium text-text-accent-color ">Skills</h3>
                                <div className=" flex flex-wrap gap-4 ">
                                    {experiences[0].skills.map((skill, index) => (
                                        <div className=" group flex gap-2 rounded-xl bg-slate-200 px-4 py-2 " key={index}>
                                            {skill} <img className=" hidden group-hover:block " src={CircleCross} alt="delete" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className=" mt-4 flex w-full justify-end gap-4 ">
                            <button onClick={handleEdit} className=" w-28 rounded-md border-2 border-green-600 bg-secondary-color py-2 font-medium text-green-600 hover:bg-green-600 hover:text-secondary-color ">
                                Save
                            </button>
                            <button onClick={onClose} className=" w-28 rounded-md border-2 border-red-600 bg-secondary-color py-2 font-medium text-red-600 hover:bg-red-600 hover:text-secondary-color ">
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Modal>
    );
}
