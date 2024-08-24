import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    {
        name: 'Tech Mahindra',
        placed: 20,
        attended: 240,
        amt: 2400,
    },
    {
        name: 'TCS',
        placed: 89,
        attended: 1398,
        amt: 2210,
    },
    {
        name: 'Accenture',
        placed: 123,
        attended: 980,
        amt: 2290,
    },
    {
        name: 'Zoho',
        placed: 17,
        attended: 390,
        amt: 2000,
    },
    {
        name: 'Datacorp',
        placed: 20,
        attended: 480,
        amt: 2181,
    },
    {
        name: 'Rabbitcart',
        placed: 24,
        attended: 380,
        amt: 2500,
    },
    {
        name: 'Infy',
        placed: 36,
        attended: 830,
        amt: 2100,
    },
];

export default function SampleBarChart() {
    return (
        <div className=" flex flex-col items-center gap-8 ">
            <h1>Students count for each drive</h1>
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
