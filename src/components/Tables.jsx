import React from 'react';

export const GenericTable = ({ headers, data, headerClass }) => {
  return (
    <div className="overflow-x-auto shadow-sm rounded-t-lg">
      <table className="lm-table w-full">
        {/* Pass custom class for header background color */}
        <thead className={headerClass}>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, i) => (
            <tr key={i}>
              {Object.values(row).map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};