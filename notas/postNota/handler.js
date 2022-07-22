const { insertEntity } = require("./services/table-service");
exports.createPostHandler = async (context) => {

  try {
 const { codalu, curso, califi } = context.req.body;
 
 const entity = {
  PartitionKey: { _: curso },
  RowKey: { _: new Date().getTime().toString() },
  codalu: { _: codalu },
  califi: { _: califi },
 };
 const result = await insertEntity("Notas", entity);
 context.res = {
  body: result,
 };
 context.done();
} catch (error) {
  context.res = {
    status: 500,
    body: `Request error. ${error.message}`,
  };
}
};