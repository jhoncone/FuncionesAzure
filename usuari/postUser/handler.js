const { insertEntity } = require("./services/table-service");
exports.createPostHandler = async (context) => {

  try {
 const { codigo, tipo, nombre } = context.req.body;
 
 const entity = {
  PartitionKey: { _: tipo },
  RowKey: { _: new Date().getTime().toString() },
  codigo: { _: codigo },
  nombre: { _: nombre },
 };
 const result = await insertEntity("Usuarios", entity);
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