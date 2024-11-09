// controllers/homeController.js
const logger = require('../logger');
const User = require('../models/User')


exports.home = async (ctx) => {
    // 使用 Redis
    await ctx.redis.set('greeting', 'Hello from Koa with Redis!');
    const greeting = await ctx.redis.get('greeting');
    
    // 日志记录
    logger.info('Accessed home route and retrieved greeting from Redis');

    ctx.body = greeting;
};

exports.about = async (ctx) => {
    // 日志记录
    logger.info('Accessed about route');
    ctx.body = 'This is the About page.';
};

exports.getUser = async (ctx) => {
    try {
        const userId = ctx.params.id;
        const user = await User.findById(userId);

        if (user) {
            ctx.body = user;
            logger.info(`User retrieved: ${user.name}`);
        } else {
            ctx.status = 404;
            ctx.body = 'User not found';
            logger.warn(`User not found with ID: ${userId}`);
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = 'Internal server error';
        logger.error(`Error retrieving user: ${error.message}`);
    }
};