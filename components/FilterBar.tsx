import React from 'react';

interface FilterBarProps {
    onClose?: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-sm border border-gray-200 mb-3 shadow-sm overflow-x-auto">
      <div className="flex items-center gap-4 text-sm text-gray-600 min-w-max">
            
            {/* 关键字 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">关键字</label>
                <input 
                    type="text" 
                    placeholder="请输入手机号或用户名" 
                    className="border border-gray-300 rounded px-3 py-1.5 w-64 focus:outline-none focus:border-blue-500 placeholder-gray-400 text-xs"
                />
            </div>

            {/* 名单类型 */}
            <div className="flex items-center gap-2">
                <label className="whitespace-nowrap font-medium">名单类型</label>
                <select className="border border-gray-300 rounded px-3 py-1.5 w-40 focus:outline-none focus:border-blue-500 bg-white text-gray-600 text-xs">
                    <option value="">请选择</option>
                    <option value="grey">灰名单</option>
                    <option value="black">黑名单</option>
                </select>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2 ml-4">
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-5 py-1.5 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap shadow-sm">
                    搜索
                </button>
                <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-600 px-5 py-1.5 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap shadow-sm">
                    重置
                </button>
                <button className="bg-[#1890FF] hover:bg-[#096DD9] text-white px-5 py-1.5 rounded flex items-center justify-center transition-colors text-xs whitespace-nowrap shadow-sm">
                    新增
                </button>
            </div>
      </div>
    </div>
  );
};