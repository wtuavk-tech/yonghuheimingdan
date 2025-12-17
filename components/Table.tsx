import React from 'react';
import { AuditEntry, HitEntry, ListEntry } from '../types';
import { ArrowUpDown } from 'lucide-react';

interface TableProps {
  data: (AuditEntry | HitEntry | ListEntry)[];
  variant?: 'audit' | 'hit' | 'list';
}

export const Table: React.FC<TableProps> = ({ data, variant = 'audit' }) => {
  
  if (variant === 'hit') {
     return (
        <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
          <div className="overflow-x-auto flex-1 pb-4 w-full">
            <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
              <thead className="bg-[#f7f8fa]">
                <tr>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">ID</th>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">查询人</th>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 group cursor-pointer flex items-center gap-1">
                      查询时间
                      <ArrowUpDown className="w-3 h-3 text-gray-400" />
                  </th>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">查询手机号</th>
                  <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">查询来源页面</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.length > 0 ? (
                  (data as HitEntry[]).map((row, index) => (
                    <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.recordId}</td>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.querier}</td>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.queryTime}</td>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.queryPhone}</td>
                      <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.sourcePage}</td>
                    </tr>
                  ))
                ) : (
                    <tr>
                        <td colSpan={6} className="h-96 text-center">
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                                <span>暂无数据</span>
                            </div>
                        </td>
                    </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
     );
  }

  if (variant === 'list') {
    return (
      <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
        <div className="overflow-x-auto flex-1 pb-4 w-full">
          <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
            <thead className="bg-[#f7f8fa]">
              <tr>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">名单类型</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">来源平台</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">平台用户ID</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">用户名</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">手机号</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 min-w-[200px]">加入原因</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">加入时间</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">到期时间</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">状态</th>
                <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">备注</th>
                <th className="px-4 py-3 text-center font-medium whitespace-nowrap w-24">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.length > 0 ? (
                (data as ListEntry[]).map((row, index) => (
                  <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded border text-[11px] ${
                          row.listType === '灰名单' 
                          ? 'bg-[#fff7e6] text-[#fa8c16] border-[#ffd591]' 
                          : 'bg-[#fff1f0] text-[#f5222d] border-[#ffa39e]'
                      }`}>
                          {row.listType}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.sourcePlatform}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.platformUserId}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.username}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap font-medium text-gray-700">{row.phone}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-normal break-words max-w-[250px]">{row.reason}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.addTime}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.expireTime}</td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                      <span className={`px-2 py-0.5 rounded text-[11px] border ${
                          row.status === '需复核'
                          ? 'bg-[#fff7e6] text-[#fa8c16] border-[#ffd591]'
                          : 'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]'
                      }`}>
                          {row.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.remark}</td>
                    <td className="px-4 py-3 text-center whitespace-nowrap">
                      {row.status === '需复核' && (
                          <button className="text-[#1890FF] hover:text-[#096DD9] text-xs">
                              复核
                          </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                  <tr>
                      <td colSpan={12} className="h-96 text-center">
                          <div className="flex flex-col items-center justify-center h-full text-gray-400">
                              <span>暂无数据</span>
                          </div>
                      </td>
                  </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Default 'audit' view
  return (
    <div className="bg-white rounded-sm shadow-sm border border-gray-200 min-h-[500px] flex flex-col">
      <div className="overflow-x-auto flex-1 pb-4 w-full">
        <table className="min-w-full divide-y divide-gray-200 text-xs text-gray-600">
          <thead className="bg-[#f7f8fa]">
            <tr>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 w-16">序号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">申请人</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">申请时间</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">名单类型</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">来源平台</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">平台用户ID</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">用户名</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">手机号</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100 min-w-[200px]">加入原因</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">申请有效期</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">状态</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap border-r border-gray-100">备注</th>
              <th className="px-4 py-3 text-center font-medium whitespace-nowrap w-24">操作</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.length > 0 ? (
              (data as AuditEntry[]).map((row, index) => (
                <tr key={row.id} className={`${index % 2 !== 0 ? 'bg-[#e6f7ff]' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.id}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.applicant}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.applyTime}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded border text-[11px] ${
                        row.listType === '灰名单' 
                        ? 'bg-[#fff7e6] text-[#fa8c16] border-[#ffd591]' 
                        : 'bg-[#fff1f0] text-[#f5222d] border-[#ffa39e]'
                    }`}>
                        {row.listType}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.sourcePlatform}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.platformUserId}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.username}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap font-medium text-gray-700">{row.phone}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-normal break-words max-w-[250px]">{row.reason}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.validity}</td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">
                    <span className={`px-2 py-0.5 rounded border text-[11px] ${
                        row.status === '待审核'
                        ? 'bg-[#f5f5f5] text-[#595959] border-[#d9d9d9]' 
                        : 'bg-[#f6ffed] text-[#52c41a] border-[#b7eb8f]'
                    }`}>
                        {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 border-r border-gray-100 whitespace-nowrap">{row.remark}</td>
                  <td className="px-4 py-3 text-center whitespace-nowrap">
                    {row.status === '待审核' && (
                        <button className="text-[#1890FF] hover:text-[#096DD9] text-xs">
                            审核
                        </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                    <td colSpan={13} className="h-96 text-center">
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <span>暂无数据</span>
                        </div>
                    </td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};