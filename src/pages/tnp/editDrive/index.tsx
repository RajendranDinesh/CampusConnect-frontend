import { ChangeEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { companies } from '../controllers';

import Pen from '@/assets/svg/pen.svg';

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
            <div className=" flex gap-8 p-16 ">
                <div className=" flex w-1/3 gap-6 ">
                    <div className=" w-full ">
                        <h2 className=" text-lg text-text-accent-color ">Company Name</h2>
                        {!changeCompanyName && (
                            <div className=" flex gap-4 ">
                                <h2 className=" text-2xl ">{company.name}</h2>
                                <img onClick={() => setChangeCompanyName(true)} src={Pen} alt="edit company name" />
                            </div>
                        )}

                        {changeCompanyName && (
                            <select className=" w-full rounded-md p-4 text-lg " onChange={onCompanyNameChange} defaultValue={company.name}>
                                {companies.map((company, cIndex) => (
                                    <option key={cIndex}>{company.name}</option>
                                ))}
                            </select>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
