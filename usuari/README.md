
#API Usuarios

#post

https://usuarifunc.azurewebsites.net/api/guardar
ejemplos

{
	"codigo":"179",
	"tipo":"alu",
	"nombre":"alu1"
}

{
	"codigo":"18",
	"tipo":"profe",
	"nombre":"profe1"
}

#get
https://usuarifunc.azurewebsites.net/api/GetUsers/{tipo}
ejemplos
https://usuarifunc.azurewebsites.net/api/GetUsers/alu

https://usuarifunc.azurewebsites.net/api/GetUsers/profe

