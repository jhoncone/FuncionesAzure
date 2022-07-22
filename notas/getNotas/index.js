const azure = require("azure-storage");
const { queryEntities } = require("./services/table-service");
module.exports = async function (context, req) {
  try {
    const codalu = context.bindingData.codalu;

    if (!codalu) {
      context.res = {
        status: 400,
        body: "codalu ID is required",
      };
    }

    var query = new azure.TableQuery().where("codalu eq ?", codalu);

    const result = await queryEntities("Notas", query);

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


