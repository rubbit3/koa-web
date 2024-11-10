// app.js
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('./routes/index');
const Redis = require('koa-redis');
require('./db'); // 引入 MongoDB 配置

const app = new Koa();
const redisClient = Redis({ url: 'redis://localhost:6379' }); // 配置 Redis 地址

// 将 Redis 客户端传入上下文
app.context.redis = redisClient;

// 使用 CORS 中间件，允许所有跨域请求
app.use(cors());

app.use(bodyParser());
app.use(Router.routes()).use(Router.allowedMethods());




app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
