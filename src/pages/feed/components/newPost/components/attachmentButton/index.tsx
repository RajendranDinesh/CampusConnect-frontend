import { ChangeEvent, Ref } from 'react';

import PaperClip from '@/assets/svg/paper_clip.svg';

interface Attachment {
    imageRef: Ref<HTMLInputElement>;
    onClick: () => void;
}

export default function Attachment(props: Attachment) {
    const { imageRef, onClick } = props;

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }

        console.log('fileObj is', fileObj);
        console.log(event.target.files);
        console.log(fileObj);
        console.log(fileObj.name);
    };

    return (
        <button onClick={onClick} className=" cursor-pointer self-center rounded-md p-2 ">
            <img src={PaperClip} alt=" send message " />
            <input ref={imageRef} onChange={handleFileChange} type="file" className=" hidden " />
        </button>
    );
}
