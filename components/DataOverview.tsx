import React from 'react';
import { Activity, Search } from 'lucide-react';

interface DataOverviewProps {
  onToggleFilter: () => void;
  isFilterVisible: boolean;
}

export const DataOverview: React.FC<DataOverviewProps> = ({ onToggleFilter, isFilterVisible }) => {
  // Helper for metric items to ensure consistent styling
  const MetricItem = ({ label, value, colorClass = "text-[#333]" }: { label: string, value: string, colorClass?: string }) => (
    <div className="flex flex-col gap-1 min-w-[140px]">
      <span className="text-gray-500 text-xs">{label}</span>
      <span className={`text-xl font-bold ${colorClass}`}>{value}</span>
    </div>
  );

  return (
    <div className="bg-[#E6F7FF] border border-[#91D5FF] rounded-sm p-4 mb-3">
      <div className="flex items-start justify-between">
        
        {/* Left Side: Title & Stats Grid */}
        <div className="flex items-start gap-6 flex-1">
          {/* Title */}
          <div className="flex items-center gap-2 text-[#0050B3] font-bold text-lg pt-2 mr-4">
            <Activity className="w-6 h-6" />
            数据概览
          </div>

          {/* Stats Grid - 7 items as requested */}
          <div className="flex flex-wrap gap-y-4 gap-x-8">
             <MetricItem label="今日总业绩" value="￥98,520.00" colorClass="text-[#1890FF]" />
             
             <div className="w-px h-10 bg-blue-200 my-auto"></div>

             <MetricItem label="手动派单线下业绩" value="￥24,000.00" />
             <MetricItem label="手动派单平台业绩" value="￥18,500.00" />
             <MetricItem label="手动派单总业绩" value="￥42,500.00" colorClass="text-[#FA8C16]" />

             <div className="w-px h-10 bg-blue-200 my-auto"></div>

             <MetricItem label="自动派单线下业绩" value="￥26,000.00" />
             <MetricItem label="自动派单平台业绩" value="￥30,020.00" />
             <MetricItem label="自动派单总业绩" value="￥56,020.00" colorClass="text-[#52C41A]" />
          </div>
        </div>

        {/* Right Side: Toggle */}
        <div className="pt-2">
          <button 
            onClick={onToggleFilter}
            className="flex items-center gap-1 text-[#1890FF] hover:text-[#096DD9] font-medium transition-colors focus:outline-none whitespace-nowrap"
          >
            <Search className="w-4 h-4" />
            {isFilterVisible ? '收起高级筛选' : '高级筛选'}
          </button>
        </div>
      </div>
    </div>
  );
};