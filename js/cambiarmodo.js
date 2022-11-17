(function(){
    document.querySelector('.lista').addEventListener('click', function(){
        localStorage.modo=this.lastElementChild.id;
        poner(localStorage.modo);
        document.body.className=localStorage.modo;
    });
    iniciar();
    function iniciar(){
        if(localStorage.modo==undefined){
            localStorage.modo='claro';
        }
        document.body.className=localStorage.modo;
        poner(localStorage.modo);
    }
    function poner(a){
        let padre = document.querySelector('.lista');
        let objeto = document.getElementById(a);
        let lista = padre.children;
        padre.insertBefore(objeto, lista[0]);
    }
    let cambiar = document.getElementById('buscados');
    cambiar.addEventListener('focus',function(){
        if(this.value=='Buscar'){
            this.value='';
        }
    });
    cambiar.addEventListener('blur',function(){
        if(this.value==''){
            this.value='Buscar';
        }
    });
})();