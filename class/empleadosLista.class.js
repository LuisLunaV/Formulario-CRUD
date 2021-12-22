import { nombresEdit, apellidosEdit, correoEdit, radioHombre, radioMujer,idEdit } from "../js/index.js";

export class Registro{

  constructor(){

        this.empleados =JSON.parse(localStorage.getItem('empleado'))||[];
    
    }

//Guradamos un nuevo registro dentro del localStorage.
    nuevoRegistro( registro ){
       this.empleados.push( registro );
       this.guardarLocalStorage();
    
    }
//*****************************************************/

//Vlidamos la informacion del registro seleccionado dentro del modal.

    editarRegistro( id ){
    this.empleados.map(index =>{
    
    if(index.id == id){
      idEdit.value        =  index.id;
      nombresEdit.value   =  index.nombre;
      apellidosEdit.value =  index.apellido;
      correoEdit.value    =  index.correo;
      
      (index.sexo == 'masculino') ?
      radioHombre.checked = true
      : 
      radioMujer.checked = true;

        }
    })
     
    }
//*****************************************************/

//Gurdamos los nuevos elementos actualizados de un registro devolviendo los nuevos valores.

    actualizarRegistro( elemento ){
        console.log(this.empleados)
this.empleados = this.empleados.map(index => {
 
if(index.id == elemento.id){

return {

       id : JSON.parse(elemento.id),
       nombre : elemento.nombre,
       apellido : elemento.apellido,
       correo : elemento.correo,
       sexo : elemento.sexo,

      }

}else return index;

});
this.guardarLocalStorage();

    }
//*****************************************************/

//Eliminamos el registro filtrando por el id.
    eliminarRegistro( id ){

       this.empleados = this.empleados.filter(index =>{

         return index.id != id; //Devuelveme el id que sea diferente a este id.
       }
        )

        this.guardarLocalStorage();
      
    }
//*****************************************************/

//Guardamos la propiedad del arreglo en el localStorage.
    guardarLocalStorage(){

        localStorage.setItem('empleado',JSON.stringify( this.empleados ));

    }
    
//*****************************************************/
}