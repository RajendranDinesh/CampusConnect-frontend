import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'AIDS',
        placed: 2,
        attended: 30,
        amt: 2400,
    },
    {
        name: 'AIML',
        placed: 1,
        attended: 20,
        amt: 2210,
    },
    {
        name: 'CSE',
        placed: 2,
        attended: 32,
        amt: 2290,
    },
    {
        name: 'Mech',
        placed: 4,
        attended: 64,
        amt: 2000,
    },
    {
        name: 'Mechatronics',
        placed: 3,
        attended: 25,
        amt: 2181,
    },
    {
        name: 'Agri',
        placed: 1,
        attended: 7,
        amt: 2500,
    },
    {
        name: 'CSD',
        placed: 1,
        attended: 8,
        amt: 2100,
    },
];

export default function SampleBarChart2() {
    return (
        <div className=" flex flex-col items-center gap-8 ">
            <h1>Count based on department</h1>
            <BarChart
                width={600}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                barSize={20}>
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="attended" stackId="a" fill="#8884d8" />
                <Bar dataKey="placed" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
