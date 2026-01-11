import React from 'react';
import Layout from '../components/Layout';
import { GenericTable } from '../components/Tables';
import { qualityHistory, qualityChecklist } from '../data/mockData';

const QualityInspection = () => {
  return (
    <Layout title="Quality Inspection Features">
      <div className="flex gap-6 text-gray-500 mb-8 text-sm font-medium">
         <span>Inspection history</span>
         <span className="text-sacalii-teal font-bold border-b-2 border-sacalii-teal">Add quality inspection</span>
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-sacalii-dark mb-6">Quality Inspection</h2>
        <GenericTable 
            headers={['Product ID', 'Status', 'Details']} 
            data={qualityHistory} 
            headerClass="bg-sacalii-teal" 
        />
      </div>

      <div>
        <h3 className="text-xl font-bold text-sacalii-dark mb-4">Add quality inspection entry</h3>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="bg-white p-6 rounded shadow-sm border border-gray-200 flex-1 w-full">
             <h4 className="font-bold mb-4 text-sacalii-teal">— Inspection checklist</h4>
             <div className="space-y-2">
                {qualityChecklist.map((item, index) => (
                    <div key={index} className="flex gap-3 items-start">
                        <input type="checkbox" className="mt-1.5 accent-sacalii-teal" />
                        <label className="text-sm text-gray-700 leading-tight">{item}</label>
                    </div>
                ))}
             </div>
          </div>

          <div className="flex-1 w-full lg:max-w-md space-y-4 bg-white p-6 rounded shadow-sm border border-gray-200">
             <div>
                 <label className="block text-sm text-gray-600 mb-1">Product ID</label>
                 <input type="text" placeholder="Product ID" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-sacalii-teal" />
             </div>
             <div>
                 <label className="block text-sm text-gray-600 mb-1">Status</label>
                 <select className="w-full border border-gray-300 rounded p-2 text-gray-700 focus:outline-none focus:border-sacalii-teal">
                    <option>Approved</option>
                    <option>Rejected</option>
                 </select>
             </div>
             <div>
                 <label className="block text-sm text-gray-600 mb-1">Details</label>
                 <textarea placeholder="Details" rows={4} className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-sacalii-teal"></textarea>
             </div>
             <button className="w-full bg-sacalii-gold hover:opacity-90 text-white font-bold py-3 rounded transition-opacity">
                Send
             </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default QualityInspection;