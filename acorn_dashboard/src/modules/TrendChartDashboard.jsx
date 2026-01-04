import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const TrendChartDashboard = () => {
  // Fixed data with realistic ups and downs
  const data = [
    { week: 1, primary: 15, secondary: 35 },
    { week: 2, primary: 33, secondary: 13 },
    { week: 3, primary: 22, secondary: 8 },
    { week: 4, primary: 46, secondary: 22 },
    { week: 5, primary: 24, secondary: 32 },
    { week: 6, primary: 31, secondary: 36 },
    { week: 7, primary: 12, secondary: 45 },
    { week: 8, primary: 50, secondary: 22 },
    { week: 9, primary: 38, secondary: 28 },
    { week: 10, primary: 36, secondary: 16},
    { week: 11, primary: 44, secondary: 32 },
    { week: 12, primary: 40, secondary: 15 }
  ];

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line 
            type="monotone" 
            dataKey="secondary" 
            stroke="#fecaca" 
            strokeWidth={2}
            dot={false}
            opacity={0.9}
          />
          <Line 
            type="monotone" 
            dataKey="primary" 
            stroke="#be123c" 
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendChartDashboard;