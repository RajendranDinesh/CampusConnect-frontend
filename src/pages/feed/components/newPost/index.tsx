import PaperPlane from '@/assets/svg/paper_plane.svg';

export default function NewPost() {
    return (
        <div className=" flex w-full flex-col gap-4 rounded-md bg-secondary-color px-8 py-4 shadow-md ">
            <h4>NEW POST</h4>
            <hr />
            <div className=" flex w-full flex-col items-start gap-8 md:flex-row md:items-center ">
                <textarea placeholder="What's on your mind ?" className=" w-full resize-none px-4 py-2 md:text-xl " />
                <button className=" rounded-md border-2 border-primary-color p-2 ">
                    <img src={PaperPlane} alt=" send message " />
                </button>
            </div>
        </div>
    );
}
