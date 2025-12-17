import React from 'react';

interface AuditTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const AuditTabs: React.FC<AuditTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-white border-b border-gray-200 mb-4 px-4">
      <div className="flex gap-8">
        <div 
          className={`py-3 text-sm font-medium cursor-pointer ${activeTab === 'list' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          onClick={() => onTabChange('list')}
        >
          名单管理
        </div>
        <div 
          className={`py-3 text-sm font-medium cursor-pointer ${activeTab === 'audit' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          onClick={() => onTabChange('audit')}
        >
          审核管理
        </div>
        <div 
          className={`py-3 text-sm font-medium cursor-pointer ${activeTab === 'hit' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
          onClick={() => onTabChange('hit')}
        >
          命中记录
        </div>
      </div>
    </div>
  );
};