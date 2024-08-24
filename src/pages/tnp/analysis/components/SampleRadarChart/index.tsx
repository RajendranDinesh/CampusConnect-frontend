import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from 'recharts';

const data = [
    {
        subject: 'Round 1',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Round 2',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Round 3',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Round 4',
        A: 73,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Round 5',
        A: 47,
        B: 0,
        fullMark: 150,
    },
    {
        subject: 'Round 6',
        A: 20,
        B: 85,
        fullMark: 150,
    },
];

export default function SampleRadarChart() {
    return (
        <div className=" flex flex-col items-center ">
            <h1>Reduction Chart</h1>
            <RadarChart cx={200} cy={200} outerRadius={150} width={400} height={400} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Tooltip />
                <Radar name="Count" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
}
