
var Sequelize = require("sequelize");

//----- CONFIGURAR LA BASE DE DATOS con sequelize
var sequelize = new Sequelize("NOMBRE_BASE","USUARIO","PASSWORD_USUARIO",{
	dialect:"sqlite", //OTROS VALORES: postgres, mysql, mariadb
	//la propiedad storage SOLO ES PARA sqlite
	storage:__dirname + "/database.db",
	define:{
		timestamps:false,
		//deshabilita la convencion por default para el nombre de las tablas
		freezeTableName:true
	}
});

//SINCRONA
   // leer archivo
   // EJECUTAMOS LA SIGUIENTE LINEA

//---- LAS OPERACIONES EN DISCO DURO EN NODE SE HACEN DE MANER ASINCRONA
// CALLBACKS
// success ES EL CALLBACK DE LA OPERACION ASINCRONA
sequelize.authenticate().success(function(){
	//EL CODIGO EN ESTA FUNCION SE EJECTUA
	//SOLO HASTA QUE LA OPERCION ASINCRONA (AUTHENTICATE) TERMINA
	
	console.log("base lista!");
});

//module.exports ES UN OBJETO QUE NOS PERMITE HACER VISIBLES
//DATOS DE ESTE ARCHIVO
module.exports.PRUEBA = "hola";



// ------------ MAPEOS DE LAS TABLAS CON SEQUELIZE ------

var Articulo = sequelize.define("Articulo",{
	id:{
		//LE INDICAMOS A SEQUELIZE CON primaryKey que esta es una col
		//de la la llave primaria
		primaryKey:true,
		type:Sequelize.INTEGER
	},
	//le dice a sequelize que tenemos una columan titulo
	//que es una cadena
	titulo:Sequelize.TEXT,
	contenido:Sequelize.TEXT
},{
	//tableName le dicen cual es la tabla de la base
	//que esta asociada a este objeto
	tableName:"articulos"
});

//EXPORTANDO EL MODELO DE LA TABLA ARTICULO
module.exports.Articulo = Articulo;







