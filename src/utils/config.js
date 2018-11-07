const env = process.env.YL_NODE_ENV;
const config = { // eslint-disable-line
  env,
	version: __VERSION__ || '未知',  // eslint-disable-line
	api: 'http://test.com', // 线上域名
};
//  测试环境配置
if (env === 'development') {  // eslint-disable-line
	config.api = 'http://test.com';  // 测试域名
}

console.log(`env: ${env}`); // eslint-disable-line
console.log(`version: ${__VERSION__}`);  // eslint-disable-line

export default config;
