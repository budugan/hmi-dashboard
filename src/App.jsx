import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import EquipmentStatus from './pages/EquipmentStatus';
import ErrorsPersonnel from './pages/ErrorsPersonnel';
import QualityInspection from './pages/QualityInspection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/equipment" element={<EquipmentStatus />} />
        <Route path="/quality" element={<QualityInspection />} />
        <Route path="/errors" element={<ErrorsPersonnel />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;