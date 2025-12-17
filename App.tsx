import React, { useState } from 'react';
import { FilterBar } from './components/FilterBar';
import { Table } from './components/Table';
import { Pagination } from './components/Pagination';
import { MOCK_AUDIT_DATA, MOCK_HIT_DATA, MOCK_LIST_DATA } from './constants';
import { SystemNotice } from './components/SystemNotice';
import { AuditStats } from './components/AuditStats';
import { AuditTabs } from './components/AuditTabs';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('audit');

  const getData = () => {
    switch (activeTab) {
        case 'audit': return MOCK_AUDIT_DATA;
        case 'hit': return MOCK_HIT_DATA;
        case 'list': return MOCK_LIST_DATA;
        default: return MOCK_AUDIT_DATA;
    }
  };

  const getVariant = () => {
      switch (activeTab) {
        case 'audit': return 'audit';
        case 'hit': return 'hit';
        case 'list': return 'list';
        default: return 'audit';
      }
  }

  return (
    <div className="min-h-screen bg-[#f0f2f5] p-4 font-sans">
      <div className="max-w-[1920px] mx-auto">
        
        {/* System Notice */}
        <SystemNotice />
        
        {/* Audit Stats Cards */}
        <AuditStats />

        {/* Audit Navigation Tabs */}
        <AuditTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Filter Section */}
        <FilterBar />

        {/* Main Content Area */}
        <div className="space-y-4">
          <Table 
            data={getData()} 
            variant={getVariant()} 
          />
          {/* Pagination */}
          <Pagination total={156} pageSize={10} current={1} />
        </div>

      </div>
    </div>
  );
};

export default App;