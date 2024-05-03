import UserIcon from '@/assets/svg/temp/user.svg';

interface User {
    activeId: undefined | number;
    changeTo: (id: number) => void;
    id: number;
    name: string;
}

export default function User(props: User) {
    const { activeId, changeTo, id, name } = props;

    return (
        <button onClick={() => changeTo(id)} className=" flex h-20 w-full first:rounded-t-md last:rounded-b-md hover:bg-slate-100 ">
            {activeId === id && <div className=" hidden min-h-full bg-primary-color p-2 md:block " />}
            <div className=" mx-4 flex h-full w-full items-center gap-8 ">
                <img alt="user 1" src={UserIcon} />
                <span>{name}</span>
            </div>
        </button>
    );
}
