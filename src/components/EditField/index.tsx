import { ChangeEventHandler, useState } from 'react';

import Pen from '@/assets/svg/pen.svg';
import Tick from '@/assets/svg/tick.svg';

interface EditField {
    label: string;
    value: string;
    type: 'textarea' | 'datetime' | 'text';
    onChange: (v: string) => void;
}

export default function EditField({ label, value, type = 'text', onChange }: EditField) {
    // containerClassName,
    // inputClassName,
    // buttonClassName,
    // editIcon,
    // saveIcon
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = (e) => {
        onChange(e.target.value);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    let inputElement;

    switch (type) {
        case 'textarea':
            inputElement = <textarea value={value} onChange={handleInputChange} className=" min-h-max w-full rounded-md border-2 border-primary-color p-2 " />;
            break;

        case 'datetime':
            inputElement = <input type="datetime-local" value={value} onChange={handleInputChange} className=" min-h-max w-full rounded-md border-2 border-primary-color p-2 " />;
            break;

        default:
            inputElement = <input type={type} value={value} onChange={handleInputChange} className=" min-h-max w-full rounded-md border-2 border-primary-color p-2 " />;
    }

    return (
        <div className=" w-full rounded-md bg-secondary-color p-2 shadow-md ">
            <h3 className=" text-2xl font-medium text-text-accent-color ">{label}</h3>
            <div className="flex w-full flex-col items-center justify-evenly gap-2 md:flex-row">
                {isEditing ? (
                    inputElement
                ) : (
                    <div className=" w-full ">
                        <h4>{value}</h4>
                    </div>
                )}
                <div className=" flex w-full min-w-max justify-end md:w-auto ">
                    <button className=" rounded-md border-2 p-2 text-sm font-light md:border-0 md:bg-secondary-color md:p-6 " onClick={toggleEdit}>
                        {isEditing ? <img src={Tick} alt="complete editing" /> : <img src={Pen} alt="edit" />}
                    </button>
                </div>
            </div>
        </div>
    );
}
