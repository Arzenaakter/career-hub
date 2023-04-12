import React from 'react';
import './Statistics.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const dataarr = [
  { name: 'A1', mark: 57 },
  { name: 'A2', mark: 60 },
  { name: 'A3', mark: 57 },
  { name: 'A4', mark: 60 },
  { name: 'A5', mark: 60 },
  { name: 'A6', mark: 60 },
  { name: 'A7', mark: 60 },
  { name: 'A8', mark: 60 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#000" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {dataarr[index].name}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <p>{`Name : ${data.name}`}</p>
          <p>{`Mark : ${data.mark}`}</p>
        </div>
      );
    }
    return null;
  };

const Statistics = () => {
  return (
    <div className="m-auto w-[80%]">
      <h2 className="text-2xl font-semibold text-center mt-10">Assignment Analytics</h2>
      <div className="rechart">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
          <Tooltip content={<CustomTooltip />} wrapperStyle={{  padding: '5px' }} />
            <Pie
              data={dataarr}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="mark"
            >
              {dataarr.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
