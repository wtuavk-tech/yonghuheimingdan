export interface AuditEntry {
  id: number;
  applicant: string;         // 申请人
  applyTime: string;         // 申请时间
  listType: '灰名单' | '黑名单'; // 名单类型
  sourcePlatform: string;    // 来源平台
  platformUserId: string;    // 平台用户ID
  username: string;          // 用户名
  phone: string;             // 手机号
  reason: string;            // 加入原因
  validity: string;          // 申请有效期
  status: '待审核' | '已通过'; // 状态
  remark: string;            // 备注
}

export interface ListEntry {
  id: number;
  listType: '灰名单' | '黑名单';
  creator: string;           // 创建人
  source: string;            // 来源
  sourcePlatform: string;
  platformUserId: string;
  username: string;
  phone: string;
  reason: string;
  addTime: string;
  expireTime: string;
  status: '待审核' | '需复核';
  remark: string;
}

export interface HitEntry {
  id: number;          // 序号
  recordId: string;    // ID
  querier: string;     // 查询人
  queryTime: string;   // 查询时间
  queryPhone: string;  // 查询手机号
  sourcePage: string;  // 查询来源页面
}

export interface PaginationState {
  currentPage: number;
  pageSize: number;
  totalItems: number;
}