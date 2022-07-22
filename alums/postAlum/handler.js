const { insertEntity } = require("./services/table-service");
exports.createPostHandler = async (context) => {

  try {
 const { curso, codalu, nombre } = context.req.body;
 
 const entity = {
  PartitionKey: { _: curso },
  RowKey: { _: new Date().getTime().toString() },
  codalu: { _: codalu },
  nombre: { _: nombre },
 };
 const result = await insertEntity("Alumnos", entity);
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