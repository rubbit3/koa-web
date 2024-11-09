// controllers/submitController.js

exports.submitData = async (ctx) => {
    const data = ctx.request.body;
    ctx.body = `Data received: ${JSON.stringify(data)}`;
};
