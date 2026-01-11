import React from 'react';
import { Lightbulb, Weight, BarChart3, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const Metric = ({ icon, label, value, colorClass }) => (
  <div className="flex flex-col items-center p-2">
    <div className="text-sacalii-dark mb-2">{icon}</div>
    <div className="text-sacalii-dark font-semibold mb-1 text-sm">{label}</div>
    <div className={clsx("text-2xl font-bold", colorClass)}>
      {value}
    </div>
  </div>
);

const StatusCard = ({ data }) => {
  const isWarning = data.status.includes('WARNING');
  
  // Logic maps directly to CSS variable classes
  const borderClass = isWarning ? 'border-sacalii-gold' : 'border-sacalii-teal';
  const textClass = isWarning ? 'text-sacalii-gold' : 'text-sacalii-teal';
  const bgClass = isWarning ? 'bg-orange-50' : 'bg-slate-50';

  return (
    <div className={clsx("rounded-xl p-6 shadow-sm border-l-4 bg-white", borderClass, bgClass)}>
      <h2 className="text-xl font-bold text-sacalii-dark mb-6">
        Current {data.name} Status: <span className={textClass}>{data.status}</span>
      </h2>
      
      <div className="grid grid-cols-2 gap-y-8 gap-x-4">
        <Metric icon={<Lightbulb size={32} />} label="Throughput" value={data.throughput} colorClass={textClass} />
        <Metric icon={<Weight size={32} />} label="Capacity" value={data.capacity} colorClass={textClass} />
        <Metric icon={<BarChart3 size={32} />} label="OEE" value={data.oee} colorClass={isWarning ? 'text-sacalii-red' : textClass} />
        <Metric icon={<CheckCircle2 size={32} />} label="FPY" value={data.fpy} colorClass={textClass} />
      </div>
    </div>
  );
};

export default StatusCard;