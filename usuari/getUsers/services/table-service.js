var azure = require('azure-storage');
//var tableSvc = azure.createTableService('functionodes', '');

var tableSvc = azure.createTableService(
    "functionodes",
    "jbZlBfYkU7XfceyFhf5V4RcOqqvZEXVGpzC76MByc4/R3BxbPJCODEUM6rsN86vEGLINwKiqZ/vs+ASt+MZK6Q=="
   );


   const insertEntity = (tableName, entity) => {
    return new Promise((resolve, reject) => {
    tableSvc.insertEntity(
     tableName,
     entity,
    { echoContent: true, payloadFormat: "application/json;odata=nometadata" },
     function (error, result, response) {
      if (error) {
       reject(error);
      }
      
      resolve(result);
     });
    });
   };
   const queryEntities = (tableName, query) => {
    return new Promise((resolve, reject) => {
      tableSvc.queryEntities(
        tableName,
        query,
        null,
        { payloadFormat: "application/json;odata=nometadata" },
        function (error, result, response) {
          if (error) {
            reject(error);
          }
  
          resolve(response.body);
        }
      );
    });
  };
  exports.insertEntity=insertEntity;
  exports.queryEntities = queryEntities;
