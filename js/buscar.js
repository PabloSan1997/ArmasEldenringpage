function buscando(cuadros) {
  let entrada = document.getElementById("buscados");
  let boton = document.getElementById("boton");
    boton.addEventListener("click", function () {
      let direc = cambiado(entrada.value, cuadros);
      let elemento = document.getElementById(direc);
      if (elemento != null) {
        let num = elemento.offsetTop;
        window.scrollTo(0, num);
        entrada.value='';
      }else{
        alert('Ninguna coincidencia con su busqueda');
      }
    });
  

  function cambiado(a, referencia){
    let cadena = a.split(' ');
    cadena=cadena[cadena.length-1];
    for(let i=0;i<referencia.length;i++){
      let texto = referencia[i].id.split(' ');
      console.log(texto);
      if(cadena==texto[texto.length-1]){
        return referencia[i].id;
      }
    }
    return a;
  }
}
export { buscando };
