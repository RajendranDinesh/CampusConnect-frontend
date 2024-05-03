import Filter from '@/assets/svg/filter.svg';
import SearchIcon from '@/assets/svg/search.svg';

export default function Search() {
    return (
        <div className=" flex w-full flex-col gap-4 rounded-md bg-secondary-color px-8 py-4 shadow-md ">
            <h4>YOUR DREAM JOB IS HERE</h4>
            <hr />
            <div className=" flex w-full flex-col items-start gap-2 md:flex-row md:items-center md:gap-8 ">
                <input name="job title" placeholder="Where do you want to land your next gig ? " className=" w-full resize-none px-4 py-2 md:text-xl " />
                <div className=" flex gap-4 ">
                    <button className=" p-2 px-3 ">
                        <img src={Filter} alt=" send message " />
                    </button>
                    <button className=" rounded-md border-2 border-primary-color p-2 ">
                        <img src={SearchIcon} alt=" send message " />
                    </button>
                </div>
            </div>
        </div>
    );
}
