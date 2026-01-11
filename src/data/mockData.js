export const errorLogs = [
    { id: 1, description: "Robot overload", timestamp: "24.10.2024 11:59", severity: "WARNING" },
    { id: 2, description: "Conveyor automatic selector failure", timestamp: "01.11.2024 15:37", severity: "ERROR" },
    { id: 3, description: "Wrapping material missing", timestamp: "01.11.2024 16:03", severity: "ERROR" },
];

export const personnel = [
    { id: 1, name: "Andrei", surname: "Budugan", title: "Web Developer", attribution: "HMI Dev" },
    { id: 2, name: "Caba", surname: "Tudor", title: "Mechanic", attribution: "Repairing the assembly line" },
    { id: 3, name: "Chira", surname: "Ovidiu", title: "3D Designer", attribution: "Designing the new safety features" },
];

export const qualityHistory = [
    { id: '20012', status: 'Approved', details: 'Chess game was ok' },
    { id: '20022', status: 'Approved', details: 'Chess game was ok' },
];

export const qualityChecklist = [
    "1. Verify all chess pieces are correctly positioned in the box.",
    "2. Check for missing chess pieces (piece count verification).",
    "3. Ensure the chess box is securely closed.",
    "4. Inspect packaging material for tears or dents.",
    "5. Confirm external packaging includes proper labeling and branding.",
    "6. Check chess pieces for visible defects (e.g., cracks, color inconsistencies).",
    "7. Ensure the chessboard surface is smooth and evenly finished.",
    "8. Verify the product weight matches specifications.",
    "9. Check for proper alignment of all components in the packaging.",
    "10. Test any included accessories for functionality (if applicable).",
    "11. Record any observed defects in the inspection log.",
    "12. Ensure the batch number and inspection labels are applied.",
    "13. Confirm proper sealing of larger boxes (if palletized).",
    "14. Verify storage conditions (temperature, humidity) meet requirements.",
    "15. Validate that all shipping documentation is complete and accurate."
];

export const equipmentData = {
    conveyor: { name: 'Conveyor', status: 'RUNNING', throughput: '10 / 5 min', capacity: '44%', oee: '95%', fpy: '88%' },
    robot: { name: 'robot', status: 'RUNNING WITH WARNINGS', throughput: '10 / 5 min', capacity: '80%', oee: '45%', fpy: '88%' }
};

// Chart Colors matching index.css variables
export const CHART_COLORS = {
    teal: '#1a4e58',
    gold: '#c59b4e',
    dark: '#2b3035',
    red: '#c0392b'
};

export const successRateData = [
    { name: 'October', Normal: 85, Premium: 65 },
    { name: 'November', Normal: 90, Premium: 80 },
    { name: 'December', Normal: 88, Premium: 95 },
];

export const downtimeData = [
    { name: 'October', value: 3 },
    { name: 'Mid-Nov', value: 10 }, 
    { name: 'November', value: 7 },
];

export const errorFreqData = [
    { name: 'Packaging', value: 40, color: CHART_COLORS.teal },
    { name: 'Sorting', value: 30, color: CHART_COLORS.gold },
    { name: 'Palletizing', value: 30, color: CHART_COLORS.dark },
];