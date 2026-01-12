import React from 'react';
import Layout from '../components/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { successRateData, downtimeData, errorFreqData, CHART_COLORS } from '../data/mockData';

const Dashboard = () => {
  return (
    <Layout title="Dashboard & Analytics">
      
      {/* Removed the text navigation bar here. The page now starts directly with the charts. */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        
        {/* Chart 1: Success Rate (Left Column) */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-sacalii-teal font-bold mb-4">Quality assurance Success Rate</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={successRateData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickLine={false} />
                <YAxis axisLine={false} tickLine={false} domain={[0, 200]} ticks={[0, 40, 80, 120, 160, 200]}/>
                <Tooltip cursor={{fill: 'transparent'}} />
                <Legend verticalAlign="top" align="center" iconType="rect" height={36}/>
                <Bar dataKey="Normal" stackId="a" fill={CHART_COLORS.teal} name="Normal chess boards" barSize={50} />
                <Bar dataKey="Premium" stackId="a" fill={CHART_COLORS.gold} name="Premium chess boards" barSize={50} />
                </BarChart>
            </ResponsiveContainer>
        </div>

        {/* Right Column: Downtime & Error Frequency */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             
             {/* Chart 2: Downtime Area Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-sacalii-teal font-bold mb-4">Downtime percentage</h3>
                <div className="text-xs text-gray-500 text-right mb-2">Downtime (minutes)</div>
                <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={downtimeData}>
                        <CartesianGrid horizontal={true} vertical={false} strokeDasharray="3 3" />
                        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{fontSize: 12, fontWeight: 'bold'}} />
                        <YAxis tickLine={false} axisLine={false} domain={[3, 10]} ticks={[3,4,5,6,7,8,9,10]} tick={{fontSize: 10}} />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke={CHART_COLORS.teal} fill={CHART_COLORS.teal} fillOpacity={0.8} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

             {/* Chart 3: Error Frequency Donut Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center">
                <h3 className="text-sacalii-teal font-bold mb-4 self-start">Error frequency</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                        <Pie
                            data={errorFreqData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {errorFreqData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                         <Legend verticalAlign="top" align="center" iconType="rect" height={36} wrapperStyle={{fontSize: '10px'}}/>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;