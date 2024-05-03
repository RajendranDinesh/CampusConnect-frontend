import Layout from './layout';
import Posting from './components/posting';
import Search from './components/search';

import { jobs } from './controller';

export default function Job() {
    return (
        <Layout>
            <div className=" flex flex-col gap-8 bg-background-color p-4 md:p-8 md:px-16 ">
                <Search />

                {/* Text section */}
                <div className=" flex w-full items-center gap-2 ">
                    <hr className=" w-full " />
                    <div className=" flex flex-col items-center justify-center md:flex-row ">
                        <p className=" whitespace-nowrap font-light ">JOBS FOR YOU</p>
                    </div>
                    <hr className=" w-full " />
                </div>

                {jobs.map((job, index) => (
                    <div key={index}>
                        <Posting job={job} />
                    </div>
                ))}
            </div>
        </Layout>
    );
}
