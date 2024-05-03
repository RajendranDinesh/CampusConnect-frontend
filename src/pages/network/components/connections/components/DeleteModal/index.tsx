import { useState } from 'react';

import Modal from '@/components/Modal';
import Toast from '@/components/Toast';

interface DeleteModal {
    isOpen: boolean;
    onClose: () => void;
}

export default function DeleteModal(props: DeleteModal) {
    const { isOpen, onClose } = props;

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Toast('success', <p>Removed user from your connections</p>);
            onClose();
        }, 1000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} height="fit" width="fit">
            <div className=" mt-4 ">
                {isLoading ? (
                    <div className="text-primary inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
                    </div>
                ) : (
                    <>
                        <h1 className=" text-3xl font-medium text-yellow-500 ">Warning</h1>
                        <p>This is an irreversible process, do you want to continue?</p>
                        <div className=" mt-4 flex w-full justify-end gap-4 ">
                            <button onClick={handleDelete} className=" rounded-md border-2 border-red-600 bg-secondary-color px-8 py-2 font-medium text-red-600 hover:bg-red-600 hover:text-secondary-color ">
                                Yes
                            </button>
                            <button onClick={onClose} className=" rounded-md border-2 border-slate-300 bg-secondary-color px-8 py-2 font-medium text-slate-400 ">
                                No
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
}
