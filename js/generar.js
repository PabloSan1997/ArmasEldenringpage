function crear(objeto){
    let caja = document.createElement('div');
    caja.className='caja';
    caja.id=objeto.arma;
    let imagen = document.createElement('img');
    imagen.className='foto';
    imagen.src=objeto.linkima;

    let h2=document.createElement('h2');
    h2.className='sub';
    h2.textContent=objeto.arma;

    let poder = document.createElement('p');
    poder.className='pder';
    poder.textContent=objeto.habilidades;

    let requi = document.createElement('p');
    requi.className='requi';
    requi.innerHTML=ver(objeto.requicitos);

    let elementos = [imagen, h2, requi, poder];

    for(let i=0;i<elementos.length;i++){
        caja.appendChild(elementos[i]);
    }
    return caja;

    function ver(texto){
        let cadena = texto.split(' ');
        for(let i=0;i<cadena.length;i++){
            if(cadena[i]=='#'){
                cadena[i]='<br>';
            }
        }
        return cadena.join(' ');
    }

}

export{crear};
/* <div class="caja">
<img src="https://ftw.usatoday.com/wp-content/uploads/sites/90/2022/03/elden-ring-moonveil-katana.jpg?w=1000&h=600&crop=1" alt="" class="foto">
<h2 class="sub">Catana</h2>
<p class="requi">Requizitos: <br> fuerza:0 <br> deztreza:2</p>
<p class="pder">Genera sangrado</p>
</div> */