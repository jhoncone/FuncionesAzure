
const { insertEntity } = require("./services/table-service");
module.exports = async function (context, req) {
    try {
      if (!req.body) {
        context.res = {
          status: 400,
          body: "Request body required",
        };
        return;
      }
  

      const { codalu, curso, califi } = req.body;
  
      if (!codalu || !curso || !califi) {
        context.res = {
          status: 400,
          body: "Please pass blog, title and content in the request body",
        };
        return;
      }
      
 
      const entity = {
       PartitionKey: { _: curso },
       RowKey: { _: new Date().getTime().toString() },
       codalu: { _: codalu },
       califi: { _: califi },
      };

  
  
  
      const result = await insertEntity("Notas", entity);
  
      context.res = {
        status: 200,
        body: result,
      };
    } catch (error) {
      context.res = {
        status: 500,
        body: `Request error. ${error.message}`,
      };
   
}
};
/*
const Joi = require("joi");
const MiddlewareHandler = require("azure-middleware");
const { createPostHandler } = require("./handler");
const { validateBody } = require("../middleware/validator");
const schema = Joi.object({
 codalu:string().min(1).required() ,
 curso: Joi.string().min(1).required(),
 califi: Joi.string().min(1).required(),
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

*/