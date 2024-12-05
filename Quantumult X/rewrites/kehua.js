// Quantumult X 脚本 - 修改 /vip-info 接口响应

const body = $response.body;
const obj = JSON.parse(body);

// 修改 vipInfo 数据
obj.result.vipInfo = {
  vip: true,
  activationTime: 1732350327536, // 修改为自定义时间戳
  expirationTime: 1893456000000, // 设置为 2030-01-01
  shipmentType: 1,
  period: 12
};

// 返回修改后的内容
$done({ body: JSON.stringify(obj) });
