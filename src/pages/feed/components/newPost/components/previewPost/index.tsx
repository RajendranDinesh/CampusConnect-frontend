import { useState } from 'react';

import Modal from '@/components/Modal';
import Post from '@/components/Post';
import Toast from '@/components/Toast';

interface PreviewPost {
    isOpen: boolean;
    onClose: () => void;
}

export default function PreviewPost(props: PreviewPost) {
    const { isOpen, onClose } = props;

    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Toast('success', <p>Posted</p>);
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
                        <h1 className=" text-3xl font-medium ">Post Preview</h1>

                        <Post companyRole="Swift Developer" text="What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins)." user="Sanjeevi Kumar K" />

                        <div className=" mt-4 flex w-full justify-end gap-4 ">
                            <button onClick={handleDelete} className=" rounded-md border-2 border-green-600 bg-secondary-color px-8 py-2 font-medium text-green-600 hover:border-green-400 hover:text-green-400 ">
                                Post
                            </button>
                            <button onClick={() => onClose()} className=" rounded-md border-2 border-primary-color bg-secondary-color px-8 py-2 font-medium text-primary-color ">
                                Go back
                            </button>
                        </div>
                    </>
                )}
            </div>
        </Modal>
    );
}
