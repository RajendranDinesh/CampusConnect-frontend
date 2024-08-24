import Toast from '@/components/Toast';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';

export default function Password() {
    const [formData, setFormData] = useState({
        userId: '',
        password: '',
    });

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        Toast('success', <p>Password changed for id {formData.userId}</p>);
        setFormData({ userId: '', password: '' });
    };

    return (
        <div className=" bg-background-color p-16 ">
            <h1 className=" mb-2 text-3xl text-text-accent-color ">Change Password for user</h1>
            <form onSubmit={(e) => onSubmit(e)} className=" flex w-1/3 flex-col gap-8 ">
                <input onChange={onChange} value={formData.userId} name="userId" type="text" className=" rounded-md border-2 p-2 " placeholder="Register Number" required autoComplete="off" />
                <input onChange={onChange} value={formData.password} type="text" name="password" className=" rounded-md border-2 p-2 " placeholder="New Password" required autoComplete="off" />
                <button type="submit" className=" rounded-md border-2 p-2 font-semibold text-primary-color ">
                    Change
                </button>
            </form>
        </div>
    );
}
