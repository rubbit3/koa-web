// routes/index.js
const Router = require('koa-router');
const router = new Router();

// 引入控制器
const homeController = require('../controllers/homeController');
const submitController = require('../controllers/submitController');
const authController = require('../controllers/authController');


// 定义路由并关联控制器方法
router.get('/', homeController.home);
router.get('/about', homeController.about);
router.post('/submit', submitController.submitData);
router.get('/user/:id', homeController.getUser);  // 根据用户ID获取用户信息

router.post('/login', authController.login);

module.exports = router;
