import React from 'react';
import Layout from '../components/Layout';
import StatusCard from '../components/StatusCard';
import { equipmentData } from '../data/mockData';

const EquipmentStatus = () => {
    return (
        <Layout title="Equipment Status">
            <h2 className="text-3xl font-bold text-sacalii-dark mb-8">Real-Time Status</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <StatusCard data={equipmentData.conveyor} />
                <StatusCard data={equipmentData.robot} />
            </div>
        </Layout>
    );
};

export default EquipmentStatus;