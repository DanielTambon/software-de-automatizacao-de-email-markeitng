
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import ContactManager from '../components/ContactManager';
import CampaignEditor from '../components/CampaignEditor';
import Reports from '../components/Reports';
import Sidebar from '../components/Sidebar';

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contacts" element={<ContactManager />} />
          <Route path="/campaigns" element={<CampaignEditor />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
};

export default Index;
