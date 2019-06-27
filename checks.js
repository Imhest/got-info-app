window.onload = function() {
    var capitulo = document.querySelectorAll("input[type='checkbox']");
    for (var n = 0; n < capitulo.length; n++) {
        var caja = capitulo[n];
        if (caja.hasAttribute("store")) {
            cargarcaja(caja);
        }
    }
    
    function cargarcaja(caja) {
        var IDcheckbox = caja.getAttribute("store");
        var valorviejo = localStorage.getItem(IDcheckbox); 
        console.log(valorviejo); 
        caja.checked = valorviejo === "true" ? true : false; 
        
		$(caja).change(function() {
   		localStorage.setItem(IDcheckbox, this.checked);  
		});
        //caja.addEventListener("change", function() {
        //    localStorage.setItem(IDcheckbox, this.checked); 
        //});
    }
};

//var casas = [Baratheon, Greyjoy];

//Asigna todos los valores de las chechbox a capitulo en un array.
//Realiza un loop de FOR usando n como indicador, comparandolo a la LENGTH de capitulo, siendo esta la cantidad de checkboxes.
//Asigna los atributos guardados en capitulo a caja + el numero de n, que tambien es usado para esto.
//Si caja en alguna de estas repeticiones tiene el atributo "store" se ejecuta la funcion cargarcaja sobre caja
//Cargarcaja asigna a la checkbox perteneciente al loop el atriibuto store en la variable IDcheckbox, el string.
//se crea una variable valorviejo y se le asigna el valor de IDcheckbox
//Si el checkboxN de caja.checked es el mismo que valorviejo, es esto true?

//$('ul').append('<li><a>hello</a></li>');