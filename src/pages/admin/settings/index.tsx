import BlockedUsers from './components/blockedUser';
import Password from './components/password';

export default function Settings() {
    return (
        <div className=" h-dvh bg-background-color p-8 ">
            <BlockedUsers />
            <Password />
        </div>
    );
}
