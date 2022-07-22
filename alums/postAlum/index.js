const Joi = require("joi");
const MiddlewareHandler = require("azure-middleware");
const { createPostHandler } = require("./handler");
const { validateBody } = require("../middleware/validator");
const schema = Joi.object({
 curso: Joi.string().min(1).required(),
 codalu: Joi.string().min(1).required(),
 nombre: Joi.string().min(1).required(),
});
const createPost = new MiddlewareHandler()
.use((ctx) => {
//where you can run your middleware
validateBody(ctx, ctx.req.body, schema);
 ctx.next();
})
.use(createPostHandler) //our handler.js method
.catch((err, ctx) => {
 ctx.res = {
 status: 500, 
 body: err.message,
 };
ctx.done();
})
.listen();
module.exports = createPost;