import { useState } from 'react';

import EditField from '@/components/EditField';
import Experiences from './components/experiences';
import Projects from './components/projects';
import Studies from './components/studies';

export default function EditProfile() {
    const [editData, setEditData] = useState({
        tagLine: 'Student at BITSathy, Aspiring to be a Machine Learning engineer, Open to offers',
        about: "I'm more experienced in web projects, but have started to work with projects on machine learning.",
    });

    return (
        <div className=" bg-background-color ">
            <div className=" flex w-full flex-col flex-wrap justify-evenly gap-4 md:flex-row md:px-16 md:py-4 ">
                <div className=" flex w-full flex-wrap gap-4 px-6 py-6 md:p-0 ">
                    <div className=" w-full md:w-2/5 ">
                        <EditField label="Tag Line" value={editData.tagLine} onChange={(e) => setEditData({ ...editData, tagLine: e })} type="textarea" />
                    </div>
                    <div className=" w-full md:w-2/5 ">
                        <EditField label="About" value={editData.about} onChange={(e) => setEditData({ ...editData, about: e })} type="textarea" />
                    </div>
                </div>

                <Projects />
                <Experiences />
                <Studies />
            </div>
        </div>
    );
}
