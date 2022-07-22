const azure = require("azure-storage");
const { queryEntities } = require("./services/table-service");
module.exports = async function (context, req) {
  try {
    const curso = context.bindingData.curso;

    if (!curso) {
      context.res = {
        status: 400,
        body: "curso ID is required",
      };
    }

    var query = new azure.TableQuery().where("PartitionKey eq ?", curso);

    const result = await queryEntities("Alumnos", query);

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


