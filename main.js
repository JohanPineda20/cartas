
var cartas = { "cartas": [
	{"numero": "1","carta": "As", "valor": "0"},
	{"numero": "2","carta": "2", "valor": "0"},
	{"numero": "3","carta": "3", "valor": "0"},
	{"numero": "4","carta": "4", "valor": "0"},
	{"numero": "5","carta": "5", "valor": "0"}
	]
};
 
function cargarJSON(){
    localStorage.setItem('data',JSON.stringify(cartas));
}

  function agregarTabla(){
   var data = localStorage.getItem('data');
   
  }

function registrarCarta(){
     
    var num = document.getElementById('numero');
    var carta = document.getElementById('carta');
    
    var data = localStorage.getItem('data'); // String
    data = JSON.parse(data); //JSON

    var nuevo = {
        numero: num.value, carta: carta.value, valor: '0'
    };
   data.cartas.push(nuevo);

    localStorage.setItem('data',JSON.stringify(data));
	
}

/*document.getElementById("guardar").addEventListener('click',function(event){
    event.preventDefault();
    registrarCarta();
})*/
cargarJSON();
document.getElementById("guardar").onclick=registrarCarta;