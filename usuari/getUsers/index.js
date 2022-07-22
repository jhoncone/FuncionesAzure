const azure = require("azure-storage");
const { queryEntities } = require("./services/table-service");
module.exports = async function (context, req) {
  try {
    const tipo = context.bindingData.tipo;

    if (!tipo) {
      context.res = {
        status: 400,
        body: "Tipo ID is required",
      };
    }

    var query = new azure.TableQuery().where("PartitionKey eq ?", tipo);

    const result = await queryEntities("Usuarios", query);

    context.res = {
      body: result,
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: error.message,
    };
  }
};


