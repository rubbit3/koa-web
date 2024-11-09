// routes/index.js
const Router = require('koa-router');
const router = new Router();

// 引入控制器
const homeController = require('../controllers/homeController');
const submitController = require('../controllers/submitController');

// 定义路由并关联控制器方法
router.get('/', homeController.home);
router.get('/about', homeController.about);
router.post('/submit', submitController.submitData);

module.exports = router;
