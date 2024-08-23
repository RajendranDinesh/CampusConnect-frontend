import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { companies } from '../controllers';

import Pen from '@/assets/svg/pen.svg';
import Roles from './components/roles';
import Levels from './components/levels';
import Departmentes from './components/departments';

export default function EditDrive() {
    const { driveId } = useParams();

    const [company, setCompany] = useState(companies[Number(driveId)]);

    const [changeCompanyName, setChangeCompanyName] = useState(false);

    const onCompanyNameChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = companies[e.target.selectedIndex].id;
        setCompany(companies[Number(id)]);

        setChangeCompanyName(false);
    };

    return (
        <div className=" bg-background-color ">
            <div className=" flex flex-col gap-8 p-16 ">
                <div className=" flex w-1/3 gap-6 ">
                    <div className=" w-full ">
                        <div className=" rounded-md bg-white p-4 ">
                            <h2 className=" text-xl text-text-accent-color ">Company Name</h2>
                            {!changeCompanyName && (
                                <div className=" flex gap-4 ">
                                    <h2 className=" text-2xl ">{company.name}</h2>
                                    <img onClick={() => setChangeCompanyName(true)} src={Pen} alt="edit company name" />
                                </div>
                            )}
                        </div>

                        {changeCompanyName && (
                            <select className=" w-full rounded-md p-4 text-lg " onChange={onCompanyNameChange} defaultValue={company.name}>
                                {companies.map((company, cIndex) => (
                                    <option key={cIndex}>{company.name}</option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
                <div>
                    <Levels companyId={Number(driveId)} />
                </div>
                <div>
                    <Roles companyId={Number(driveId)} />
                </div>
                <div>
                    <Departmentes companyId={Number(driveId)} />
                </div>
            </div>
        </div>
    );
}
