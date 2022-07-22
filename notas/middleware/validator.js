exports.validateBody = async (ctx, body, schema) => {
    try {
     if (!body) {
      ctx.res = {
       status: 400,
       body: "A request body must be passed!",
      };
     ctx.done();
     return;
     }
     
     await schema.validateAsync(body);
    } catch (err) {
      ctx.res = {
       status: 400,
       body: err.message,
     };
     ctx.done();
    }
   };

