// controllers/authController.js
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key'; // 用于签名 JWT 的密钥

// 登录控制器函数
async function login(ctx) {
  const { username, password } = ctx.request.body;
  
  // 假设此处验证用户信息
  if (username === 'user' && password === 'pass') {
    // 生成 token，有效期为 1 小时
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    
    ctx.body = {
      message: 'Login successful!',
      token: token
    };
  } else {
    ctx.status = 401;
    ctx.body = { message: 'Invalid username or password' };
  }
}

module.exports = {
  login
};
