import React from 'react';
import Layout from '../components/Layout';
import { GenericTable } from '../components/Tables';
import { errorLogs, personnel } from '../data/mockData';

const ErrorsPersonnel = () => {
    const errorTableData = errorLogs.map(({id, ...rest}) => rest);
    const personnelTableData = personnel.map(({id, ...rest}) => rest);

    return (
        <Layout title="Errors & Personnel">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-sacalii-dark mb-6">Errors and Notifications</h2>
                {/* Pass class name directly, easier to read/edit later */}
                <GenericTable 
                    headers={['Description', 'Timestamp', 'Severity']} 
                    data={errorTableData} 
                    headerClass="bg-sacalii-red" 
                />
            </div>

            <div>
                <h2 className="text-3xl font-bold text-sacalii-dark mb-6">Personnel</h2>
                <GenericTable 
                    headers={['Name', 'Surname', 'Job title', 'Current attribution']} 
                    data={personnelTableData} 
                    headerClass="bg-sacalii-teal" 
                />
            </div>
        </Layout>
    );
};

export default ErrorsPersonnel;