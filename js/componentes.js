import { Empleado,Registro } from'../js/index.js';

export const form          = document.querySelector('#formulario'),
             nombres       = document.querySelector('#nombre'),
             apellidos     = document.querySelector('#apellido'),
             correo        = document.querySelector('#correo'),
             tBody         = document.querySelector('tbody'),
             eventos       = document.querySelector('#informacion'); 

//Creamos el elemento html que se mostrara en el DOM con la inf. del empleado.
export const crearRegistroHtml=({id, nombre, apellido, correo, sexo})=>{

const html = `<tr>

<td scope="row">${ id }</td>
 <td>${ nombre }</td>
 <td>${ apellido }</td>
 <td id="disabled">${ correo }</td>
 <td id="disabled">${ sexo }</td>

 <td>
 <div class="btn-group" role="group" aria-label="">
   <button type="button" class="btn btn-primary" onclick='${id}'>Editar</button>
   <button type="button" class="btn btn-danger" onclick='${id}'>Eliminar</button>
 </div>
</td>

</tr>`;

tBody.innerHTML += html;

}

const classRegistro = new Registro(); //Instanciamos la classe Registro para llamar sus metodos.

form.onsubmit=(e)=>{

   e.preventDefault();

    if(nombres.value == 0 || apellidos.value == 0 || correo.value == 0){

      alert('Favor de llenar todos los campos');
      
   }else{

   //Validamos el valor de radio button.
   for(let sex of form.sexo){

      if(sex.checked == true){
         
const id = new Date().getTime();
//Enviamos los valores entrantes a la classe Empleado.   
const nuevoEmpleado = new Empleado( id, nombres.value,apellidos.value,correo.value,sex.value );
     
//enviamos la nueva instancia de Empleado con los nuevos valores al metodo de la classe Registro.
classRegistro.nuevoRegistro( nuevoEmpleado );
crearRegistroHtml( nuevoEmpleado );

}
}

nombres.value   = '';
apellidos.value = '';
correo.value    = '';

}

}

//Pasamos las funciones a la variable 'modal' y la ejecutamos en el boton editar.
export const modal = new bootstrap.Modal(document.getElementById('modelId'),{

   keyboard: false,

});

//Manejamos los ventos click de los botones editar||borrar

eventos.addEventListener('click', (event)=>{
   const tr = event.target.parentElement.parentElement.parentElement;
  
   if(event.target.innerText === 'Eliminar'){

      //Eliminamos el registro del localStorage
      const idEmpleado = event.srcElement.attributes[2].value;
      classRegistro.eliminarRegistro(idEmpleado);
     
      //Eliminamos el registro del DOM
      tBody.removeChild(tr);
        location.reload();
   }
   else if(event.target.innerText === 'Editar'){
      
      modal.show();//Abrimos el modal con show al dar click en editar.
      const idEmpleado = event.srcElement.attributes[2].value;
      classRegistro.editarRegistro( idEmpleado );
      
      
 }
  

});