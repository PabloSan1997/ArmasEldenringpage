import { crear } from "./generar.js";
import {buscando} from './buscar.js';
let leer = async () => {
  try {
    let archivo = await fetch(
      "https://my-json-server.typicode.com/PabloSan1997/ArmasEldenring/armas"
    );
    let datos = await archivo.json();
    proceso(datos);
  } catch (error) {
    console.error("Error");
  }
};
leer();
function proceso(dato) {
  for (let i = 0; i < dato.length; i++) {
    document.querySelector(".contenedor").appendChild(crear(dato[i]));
  }
  buscando(document.getElementsByClassName('caja'));
}
