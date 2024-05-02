import HorizontailMenu from '@/assets/svg/menu_horizontal.svg';

import Comment from '@/assets/svg/comment.svg';
import Heart from '@/assets/svg/heart.svg';
import Share from '@/assets/svg/share.svg';
import User from '@/assets/svg/temp/user.svg';

export default function Post() {
    return (
        <div className=" w-full rounded-md bg-secondary-color shadow-md ">
            <div className=" flex justify-end p-2 px-8 ">
                <button>
                    <img src={HorizontailMenu} alt=" open post menu " />
                </button>
            </div>
            <hr />
            <div>
                <div className=" flex gap-8 p-4 px-8 ">
                    <img src={User} width={'72px'} alt="user" />
                    <div className=" flex flex-col justify-center ">
                        <h4 className=" text-lg font-medium ">Sanjeevi Kumar K</h4>
                        <span className=" text-sm ">iOS Developer</span>
                    </div>
                </div>
                <div className=" p-4 px-16 ">
                    <p>What did the Dursleys care if Harry lost his place on the House Quidditch team because he hadn’t practiced all summer? What was it to the Dursleys if Harry went back to school without any of his homework done? The Dursleys were what wizards called Muggles (not a drop of magical blood in their veins).</p>
                </div>
            </div>
            <hr />
            <div className=" flex justify-between h-12 ">
                <div className=" flex items-center ">
                    <button className=" flex h-full min-w-24 items-center justify-evenly ">
                        <img src={Heart} alt=" like " />
                        420
                    </button>
                    <button className=" flex h-full min-w-24 items-center justify-evenly border-l-2 border-r-2 ">
                        <img src={Comment} alt=" comment " />
                        69
                    </button>
                </div>
                <div className=" flex ">
                    <button className=" flex h-full min-w-24 items-center justify-evenly ">
                        <img src={Share} alt=" share " />
                        SHARE
                    </button>
                </div>
            </div>
        </div>
    );
}
