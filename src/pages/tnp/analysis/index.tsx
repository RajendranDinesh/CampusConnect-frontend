import SamplePieChart from './components/SamplePieChart';
import SampleBarChart from './components/SampleBarChart';
import { companies } from '../controllers';
import SampleRadarChart from './components/SampleRadarChart';
import SampleBarChart2 from './components/SampleBarChart2';
import Toast from '@/components/Toast';

export default function Analysis() {
    const downloadPDF = () => {
        Toast(
            'info',
            <p>
                Downloading Analysis PDF
                <br />
                Please wait as this could take some time..
            </p>,
        );
    };

    return (
        <div className=" p-4 ">
            <h1 className=" text-3xl font-semibold text-text-accent-color ">Analysis</h1>
            <div className=" flex w-full justify-evenly gap-4 p-4 ">
                <SamplePieChart />
                <SampleBarChart />
            </div>

            <div className=" flex flex-col gap-8 ">
                <div className=" flex items-center justify-between ">
                    <div className=" flex items-center gap-4 ">
                        <h1 className=" text-3xl font-semibold text-text-accent-color ">Individual Drive Analysis</h1>
                        <select>
                            {companies.map((company, index) => (
                                <option key={index}>
                                    <span>{company.name}</span>
                                </option>
                            ))}
                        </select>
                    </div>
                    <div onClick={downloadPDF}>
                        <button className=" rounded-md border-2 px-4 py-2 ">Download as PDF</button>
                    </div>
                </div>

                <div className=" flex w-full justify-evenly gap-4 ">
                    <SampleRadarChart />
                    <SampleBarChart2 />
                </div>
            </div>
        </div>
    );
}
