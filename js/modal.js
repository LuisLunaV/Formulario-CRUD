import {Empleado, Registro,modal } from "./index.js";

export const idEdit        = document.querySelector('#id-edit'),
             nombresEdit   = document.querySelector('#nombre-edit'),
             apellidosEdit = document.querySelector('#apellido-edit'),
             correoEdit    = document.querySelector('#correo-edit'),
             radioHombre   = document.querySelector('#hombre-edit'),
             radioMujer    = document.querySelector('#mujer-edit'),
             formEdit      = document.querySelector('#edit-form'),
             modalEvent    = document.querySelector('#modelId');

           const actualizarClassRegistro = new Registro();

//Enviamos lo valores actualizados en el modal para guardar la nueva informacion el la clase 'Registro'.           
modalEvent.addEventListener('click',( event )=>{

    const nombreBtn = event.target.innerText;

        if(nombreBtn === 'Guardar'){

   //Validamos el valor de radio button.
            for(let sex of formEdit.sexo){

                if( sex.checked === true ){

//Enviamos los valores actualizados entrantes a la classe Empleado.   
        const actClassEmpleado = new Empleado(idEdit.value, nombresEdit.value, apellidosEdit.value, correoEdit.value, sex.value);

//Enviamos la nueva instancia de Empleado con los nuevos valores al metodo de la classe Registro.         
        actualizarClassRegistro.actualizarRegistro(actClassEmpleado);
     
        location.reload();
        modal.hide();
    }

}
   }
    });


