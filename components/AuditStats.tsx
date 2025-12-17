import React from 'react';

export const AuditStats: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {/* Red Card */}
      <div className="bg-white rounded-sm border border-gray-200 border-l-4 border-l-red-500 p-4 shadow-sm">
        <div className="flex items-baseline gap-2 mb-1">
            <div className="text-gray-900 font-bold">需复核数量</div>
            <div className="text-2xl font-bold text-red-500">44</div>
        </div>
        <div className="text-xs text-gray-400">30天内到期需复核的名单数量</div>
      </div>

      {/* Blue Card */}
      <div className="bg-white rounded-sm border border-gray-200 border-l-4 border-l-blue-600 p-4 shadow-sm">
        <div className="flex items-baseline gap-2 mb-1">
            <div className="text-gray-900 font-bold">待审核数量</div>
            <div className="text-2xl font-bold text-blue-600">3</div>
        </div>
        <div className="text-xs text-gray-400">新提交等待审核的黑名单申请</div>
      </div>

      {/* Orange Card */}
      <div className="bg-white rounded-sm border border-gray-200 border-l-4 border-l-orange-500 p-4 shadow-sm">
        <div className="flex items-baseline gap-2 mb-1">
            <div className="text-gray-900 font-bold">需复核的灰名单</div>
            <div className="text-2xl font-bold text-orange-500">0</div>
        </div>
        <div className="text-xs text-gray-400">需复核的灰名单用户数量</div>
      </div>

      {/* Gray Card */}
      <div className="bg-white rounded-sm border border-gray-200 border-l-4 border-l-gray-500 p-4 shadow-sm">
        <div className="flex items-baseline gap-2 mb-1">
            <div className="text-gray-900 font-bold">总名单数量</div>
            <div className="text-2xl font-bold text-gray-500">3480</div>
        </div>
        <div className="text-xs text-gray-400">黑名单: 3476 + 灰名单: 4</div>
      </div>
    </div>
  );
};