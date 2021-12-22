import { Registro, crearRegistroHtml } from "./js/index.js";

const listaDeRegistros = new Registro();

listaDeRegistros.empleados.forEach( crearRegistroHtml );